import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import Book from "./Book";
import { useNavigate } from "react-router-dom";


export const Books = () => {
    const books = useSelector(({ data }) => data);
    const loading = useSelector(({ loading }) => loading);
    const category = useSelector(({ categories }) => categories);
    const totalCount = useSelector(({ totalCount }) => totalCount);
    let startIndex = useSelector(({ startIndex }) => startIndex);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const loadMore = () => {
        dispatch({
            type: 'LOAD_MORE_BOOKS',
            payload: startIndex + 31,
        })
    }


    function getVisibleBooks(books, category) {
        if (category === 'all') return books;
        return books.filter(item =>
            item.volumeInfo?.categories?.includes(category))
    }
    const visibleBooks = getVisibleBooks(books, category)

    return (
        <>
            {
                loading ? (
                    <div style={{ marginTop: "40px" }}>
                        Loading...
                    </div>
                ) : (
                    <>
                        <h3>Found {totalCount} results</h3>
                        <div className="list">
                            {visibleBooks.map((book) => {
                                return (
                                    <Book clickOnBook={(book) => navigate('/mainPage/' + (book.id))} book={book} key={book.id + book.etag} />
                                )
                            })}
                        </div>
                        <button onClick={loadMore} style={{ marginTop: '20px', fontSize: 20 }}>Load More</button>
                    </>
                )}
        </>
    )
}
