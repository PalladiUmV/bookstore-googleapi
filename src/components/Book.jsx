import React from 'react'

const Book = ({ book, clickOnBook }) => {
	const { authors, categories, title, } = book?.volumeInfo;
	return (
		<div className="list__item" onClick={() => clickOnBook(book)}>
			<div className="image">
				<img
					src={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : ''}
					alt={title}
					style={{ width: "128px", height: "182px" }} />
			</div>
			<div className="categories">
				{categories ? categories : ''}
			</div>
			<div className="title">
				{title ? title : ''}
			</div>
			<div className="authors">
				{authors ? authors.join(' / ') : ''}
			</div>
		</div>
	)
}

export default Book