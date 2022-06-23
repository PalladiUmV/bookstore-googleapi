import axios from 'axios';
import { takeEvery, put, call, fork, all, select } from 'redux-saga/effects'

const api = "AIzaSyBbUHmS9k4Wp-5_G651d9xYYL9ROpEDObg"

async function getBooks(inputValue = 'js', startIndex = 0, sortBy = 'relevance', maxResults = 30) {
    const request = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&orderBy=${sortBy}&key=${api}&startIndex=${startIndex}&maxResults=${maxResults}`)
    return request.data
}
function* fetchRequest(action) {
    yield put({
        type: 'DATA_REQUEST'
    })
    const inputValue = yield select(({ inputValue }) => inputValue)
    const startIndex = yield select(({ startIndex }) => startIndex)
    const request = yield call(getBooks, inputValue, startIndex, action?.payload)
    yield put({
        type: 'DATA_SUCCESS',
        payload: {
            items: request.items,
            totalCount: request.totalItems,
        }
    });
};

function* loadMore(action) {
    const inputValue = yield select(({ inputValue }) => inputValue)
    const request = yield call(getBooks, inputValue, action.payload);
    yield put({
        type: 'LOAD_MORE_DATA',
        payload: {
            items: request.items,
            startIndex: action.payload
        }
    })
}


export default function* watcherSaga() {
    yield all([
        fork(fetchRequest)
    ]);

    yield takeEvery('LOAD_MORE_BOOKS', loadMore)
    yield takeEvery('SEARCH_BY_BUTTON', fetchRequest)
    yield takeEvery('SORT_BY', fetchRequest)
}



