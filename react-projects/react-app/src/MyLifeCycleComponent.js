import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyLifeCycleComponent extends Component {
    mount(){
        ReactDOM.render(<MyButton/>,document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>Unmount</button>
                <div id='a'>
                    
                </div>
                
            </div>
        );
    }
}

class MyButton extends Component {
    constructor(){
        super();
        this.state={
            val: 0
        }
    }
    increment(){
       this.setState({
           val: this.state.val+1
       }) 
    }
    render() {
        return (
            <div>
                <button onClick={this.increment.bind(this)}>
                {this.state.val}
                </button>
            
                
            </div>
        );
    }
}



export default MyLifeCycleComponent;
