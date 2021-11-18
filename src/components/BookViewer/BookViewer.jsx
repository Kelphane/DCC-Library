import React from "react";
import "./BookViewer.css";
import Book from "../Book/Book";

const BookViewer = (props) => {

    return (
        <div className="book-viewer">    
            <div>
                <button onClick={props.prevBook}>Previous Book</button>
            </div>

            <div>
                <Book book={props.book} />
            </div>

            <div>
                <button onClick={props.nextBook}>Next Book</button>
            </div>
        </div>
    );
}

export default BookViewer;