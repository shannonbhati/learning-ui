import React, { Component } from 'react';

class MyRefComponent extends Component {
    constructor(){
        super();
        this.state={
            message : ""
        }
    }
    
    change1(e){
        this.setState({
            message1 : e.target.value
    })
}
    change2(e){
        this.setState({
            message2 : e.target.value
    })
}
    
    render() {
        return (
            <div>
                <input type="text" onChange={this.change1.bind(this)}></input>
                {this.state.message1}
                <br />
                <input type="text" onChange={this.change2.bind(this)}></input>
               {this.state.message2}      
                </div>
                
        );
    }
}

export default MyRefComponent;
