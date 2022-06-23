const initialState = {
    data: [],
    book: null,
    totalCount: null,
    loading: true,
    startIndex: 0,
    categories: 'all',
    inputValue: 'js'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DATA_SUCCESS':
            const { items, totalCount } = action.payload
            return {
                ...state,
                loading: false,
                data: items,
                totalCount,
            }
        case 'LOAD_MORE_DATA':
            return {
                ...state,
                data: [...state.data, ...action.payload.items],
                startIndex: action.payload.startIndex,
            }
        case 'GET_BOOK':
            return {
                ...state,
                book: action.payload
            }
        case 'CATEGORIES':
            return {
                ...state,
                categories: action.payload,
            }

        case 'INPUT':
            return {
                ...state,
                inputValue: action.payload,
            }
        default:
            return state;
    }
}
export default reducer;


