import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import Para from './Para';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'i',
    };
  }
  buttonClick(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>{`${this.props.txt1} hello ${this.props.txt2} ${this.state.message}`}</h1>
        <CustomInput update={this.buttonClick.bind(this)} />
        <div>{this.state.message}</div>
        <div>{this.state.message}</div>
        <div>{this.state.message}</div>
        <div>{this.state.message}</div>
        <Button> &hearts; React</Button>
        <Para msg=""> 
        
          SFGSDFGDFGFS<b> my name is </b>FGSDFGSDFSDFDSFDSFDSF
          FGSDFGSDFSDFDSFDSFDSFdf
          fdescribe('gd
          FGSDFGSDFSDFDSFDSFDSFdfg
          <Hearts> 
            KKKKKK
          </Hearts>
          SFGSDFGDFGFSg
          fdg
          ', () => 
              
          });
              
        </Para>
      </div>
    );
  }
}
App.propTypes = {
  txt1: PropTypes.string,
  txt2: PropTypes.string.isRequired,
};
App.defaultProps = {
  txt1: 'shannon',
};


const Hearts = (props) => (
  <span> &hearts; {props.children} &hearts; </span>
);


const CustomInput = props => <input type="text" onChange={props.update} />;
export default App;
