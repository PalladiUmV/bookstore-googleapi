import { useDispatch } from "react-redux";

export const SearchPanel = () => {

    const dispatch = useDispatch();

    function category(e) {
        dispatch({
            type: "CATEGORIES",
            payload: e.target.value
        })
    }

    function sortBy(e) {
        const value = e.target.value;
        dispatch({
            type: "SORT_BY",
            payload: value
        })
    }

    function inputChange(e) {
        const value = e.target.value;
        dispatch({
            type: "INPUT",
            payload: value
        })
    }
    function inputKeyDown(e) {
        if (e.key === 'Enter') {
            searchByButton();
        }
    }

    function searchByButton() {
        dispatch({
            type: "SEARCH_BY_BUTTON",
        })
    }

    return (
        <div className="search-panel">
            <h3>Поиск по книге</h3>
            <input type="text" onChange={inputChange} onKeyDown={inputKeyDown} />
            <button onClick={searchByButton}>Поиск</button>
            <div>
                <span style={{ color: 'white', marginRight: '10px', }}>Categories</span>

                <select onChange={category}>
                    <option selected value="all">all</option>
                    <option value="Art">art</option>
                    <option value="Biography">biography</option>
                    <option value="Computers">computers</option>
                    <option value="History">history</option>
                    <option value="Medical">medical</option>
                    <option value="Poetry">poetry</option>
                </select>
            </div>
            <div>
                <span style={{ color: 'white', marginRight: '10px' }}>Sorting by</span>
                <select onChange={sortBy}>
                    <option selected value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </div>
        </div >
    );
};
