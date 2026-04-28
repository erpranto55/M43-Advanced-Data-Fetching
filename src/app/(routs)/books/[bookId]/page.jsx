export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();

    return books.map(book => ({ bookId: book.id }))
}

const bookDetailPage = async ({ params }) => {
    const { bookId } = params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const { title, author, price, category, rating, description, stock } = await res.json();

    return (
        <div>
            <h2>Book Details: </h2>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p className="font-bold">Author: {author}</p>
            <p className="text-2xl font-semibold">Price: ${price}</p>
            <p className="text-sm">Category: {category}</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
        </div>
    );
};

export default bookDetailPage;