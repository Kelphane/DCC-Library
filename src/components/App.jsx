import React, {Component} from "react";
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from "./BookViewer/BookViewer";
import CreateBook from "./CreateBook/CreateBook";

class App extends Component{
    constructor(props){
        super(props);
        this.books = [
            {name: "Ready Player One", author: "Earnest"},
            {name: "Starry Night", author: "Bob"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({bookNumber: tempBookNumber});
    }

    submitBook = (book) => {
        this.books.push(book);
    }

    render(){
        return (
            <div>    
                <TitleBar />
                <BookViewer nextBook={this.goToNextBook} prevBook={this.goToPreviousBook} book={this.books[this.state.bookNumber]}/>
                <CreateBook createBook={this.submitBook} />
            </div>
        );
    }
}

export default App;