import React, {Component} from "react";
import "./CreateBook.css";

class CreateBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            author: ""
        };
    }

    render(){
        return (
            <form className="form">
                <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    Author:
                    <input />
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default CreateBook;