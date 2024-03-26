import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));

    }, [])



    return (
        <div className="grid grid-col lg:grid-cols-3">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
        </div>
    );
};

export default Books;