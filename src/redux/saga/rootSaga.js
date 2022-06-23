import { all, spawn } from 'redux-saga/effects'
import watcherSaga from "./";



export default function* rootSaga() {
    yield all([
        spawn(watcherSaga),
    ]);


}