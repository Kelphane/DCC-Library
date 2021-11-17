import React, {Component} from "react";
import './App.css';
import TitleBar from './TitleBar/TitleBar';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>    
                <div className='titlebar-nav'>
                    <TitleBar className='container-fluid' />
                </div>
            </div>
        );
    }
}

export default App;