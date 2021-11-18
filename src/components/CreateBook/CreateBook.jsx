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
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createBook(this.state);
    }

    render(){
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <label>
                    Author:
                    <input type="text" name="author" onChange={this.handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default CreateBook;