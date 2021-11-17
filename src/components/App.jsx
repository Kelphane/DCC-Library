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

    render(){
        return (
            <div>    
                <div className='titlebar-nav'>
                    <TitleBar className='container-fluid' />
                </div>

                <div className="col-md-4">
                    <h1>First Div</h1>
                </div>

                <div className="col-md-4">
                    <h2>Second Div</h2>
                </div>

                <div className="col-md-4">
                    <h2>Third Div</h2>
                </div>
            </div>
        );
    }
}

export default App;