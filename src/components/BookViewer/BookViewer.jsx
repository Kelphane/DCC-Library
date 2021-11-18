import React from "react";

const BookViewer = (props) => {

    return (
        <div>    
            <div>
                <button onClick={props.prevBook}>Previous Book</button>
            </div>

            <div>
                <h2>{props.book.name}</h2>
                <h2>{props.book.author}</h2>
            </div>

            <div>
                <button onClick={props.nextBook}>Next Book</button>
            </div>
        </div>
    );
}

export default BookViewer;