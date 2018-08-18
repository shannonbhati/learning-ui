import React, { Component } from 'react';
import './Home.css';
  class Home extends Component {
      constructor(){
          super()
          this.state={
              city:'Delhi'
          }
        this.getData=this.getData.bind(this);
        this.newCity=this.newCity.bind(this);
      }
      getData(){
        this.props.history.push("/test/"+this.state.city)
      }
      newCity(e){
this.setState({
    city:e.target.value
})
      }
      render() {
          return (
            <div className="background">
            <span className="text">Enter a City and State</span>
            <input type="text" name="firstname" value={this.state.city} onChange={this.newCity} className="input"/>
            <button className="button" onClick={this.getData} >Get Weather</button>
          </div> 
          );
      }
  }
   export default Home;