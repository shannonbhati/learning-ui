import React, { Component } from 'react';

class Para extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Para;
