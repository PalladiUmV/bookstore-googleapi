import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import "./BookPage.css";


const BookPage = () => {
	const params = useParams()
	const book = useSelector(state => state?.book)
	const dispatch = useDispatch()
	useEffect(() => {
		const getBook = async () => {
			const url = `https://www.googleapis.com/books/v1/volumes/${params.id}`;
			const res = await axios.get(url)
			dispatch({
				type: 'GET_BOOK',
				payload: res.data
			})
		}
		getBook()
	}, []);

	return (
		<>
			{
				book ?
					<div className='book'>
						<div className="book__image">
							<img
								src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ''}
								alt="" width="300px" height="400px" />
						</div>
						<div className='book__info'>
							<div className='book__category'>
								<span>{book.volumeInfo.categories ? book.volumeInfo.categories : ''}</span>
							</div>
							<div className="book__title">{book.volumeInfo.title ? book.volumeInfo.title : ''} <br />
								<span className="book__author">{book.volumeInfo.authors ? book.volumeInfo.authors.join('  /  ') : ''}</span>
							</div>
							<div className="book__description">{book.volumeInfo.textSnippet ? book.volumeInfo.textSnippet : ''}</div>
						</div>
					</div>
					: <div style={{ color: 'black', fontSize: '40px', fontWeight: 'bold' }}>Loading...</div>
			}
		</>
	)
}

export default BookPage