import Link from "next/link";


const BookCard = ({ book }) => {
    const { title, author, price, category, rating, description, stock } = book;
    return (
        <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className="text-2xl font-semibold">Price: ${price}</p>
                <div className="justify-end card-actions">
                    <Link href={`/books/${book.id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;