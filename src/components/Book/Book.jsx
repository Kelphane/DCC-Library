import React from "react";

const Book = (props) => {

    return (
        <React.Fragment>
            <h2>{props.book.name}</h2>
            <h2>{props.book.author}</h2>
        </React.Fragment>
    );
}

export default Book;