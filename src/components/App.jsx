import React, {Component} from "react";
import './App.css';
import TitleBar from './TitleBar/TitleBar';

class App extends Component{
    constructor(props){
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Earnest"},
            {title: "Starry Night", author: "Bob"}
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

    render(){
        return (
            <div>    
                <div className='titlebar-nav'>
                    <TitleBar className='container-fluid' />
                </div>
                    
                <div className="col-md-4">
                    <button onClick={this.goToPreviousBook}>Previous Book</button>
                </div>

                <div className="col-md-4">
                    <h2>{this.books[this.state.bookNumber].title}</h2>
                    <h2>{this.books[this.state.bookNumber].author}</h2>
                </div>

                <div className="col-md-4">
                    <button onClick={this.goToNextBook}>Next Book</button>
                </div>
            </div>
        );
    }
}

export default App;