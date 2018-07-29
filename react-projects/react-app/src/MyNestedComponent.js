import React, { Component } from 'react';


class MyNestedComponent extends Component {
    render() {
        return (
            <div>
            <BoldButton test="KETAN">
                REact is love</BoldButton>
            <Testbutton>
                New button
                </Testbutton>
                </div>
        );
    }
}
const BoldButton = (props) => (
    <span>
        <b>
        {props.children}
        </b>
        {props.test}
        </span>
);
const Testbutton = (props) =>(
    <button>
        {props.children}
        </button>
)
BoldButton.propTypes= {
    test: (props,name) => {
     if(props[name]!==props[name].toUpperCase()){
        return new Error("Nt uc")
         
     }   
    }
}
export default MyNestedComponent;