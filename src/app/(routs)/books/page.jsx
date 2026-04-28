import BookCard from '@/components/BookCard';
import React from 'react';

const fetchBooks = async () => {
    const res = await fetch('http://localhost:5000/books', { cache: 'no-store' });
    return res.json();
}

const BooksPage = async () => {
    const books = await fetchBooks();
    return (
        <div className='container mx-auto'>
            <h2>Books: {books.length}</h2>

            <div className='grid grid-cols-3'>
                {
                    books.map(book =>
                        <BookCard
                            key={book.id}
                            book={book} />)
                }
            </div>
        </div>
    );
};

export default BooksPage;