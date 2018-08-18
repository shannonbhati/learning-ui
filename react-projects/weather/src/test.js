import React, { Component } from 'react';
import queryString from 'query-string';
import './Home.css';
import './test.css';
import axios from 'axios';
const Modal = (props) => {
    return (
        <div id="myModal" class="modal">

            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
                <div>
                                        <img src={`/${props.weatherData.weather[0].icon}.svg`}></img>
                                    </div>
                <div>Temp Min : {props.weatherData.main.temp_min}</div>
                <div>Temp Max : {props.weatherData.main.temp_max}</div>
                <div>{props.weatherData.weather[0].description}</div>
            </div>

        </div>
    );
}
class Test extends Component {
    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/?q=${this.props.match.params.name}&type=accurate&APPID=f08b1f79f975a4afb92afe75c8b1d393&cnt=5`)
            .then(function (response) {
                console.log(response);
                this.setState({
                    weather: response.data
                })
            }.bind(this))

            .catch(function (error) {
                console.log(error);
            });
    }
    constructor() {
        super()
        this.state = {
            weather: undefined,
            modal: false,
            i:0
            
        }
        this.data=this.data.bind(this);
        this.close=this.close.bind(this);
    }
    data(e) {
//debugger
        this.setState({
            modal: true,
            i:e.target.getAttribute('data-id')

        })
    }
    close(){
        this.setState({
            modal:false
        })
    }
    weatherData(){

    }
    render() {
        //const queryParam = queryString.parse(test.location.search)
        if (this.state.weather) {
            return (
                <div>
                    {this.state.modal && (<Modal onClose={this.close} weatherData={this.state.weather.list[this.state.i]}/>)}
                    <div className="city"> {
                        `${this.props.match.params.name}`
                    }</div>

                    <ul className="flex-container wrap">
                        {this.state.weather.list.map((data,i)=> {
                            return (
                                <li key={data.dt} className="flex-item">{new Date(data.dt * 1000).toDateString()}
                                    <div>
                                        <img src={`/${data.weather[0].icon}.svg`} className="big-image"  data-id={i} onClick={this.data}></img>
                                    </div>

                                </li>


                            )
                        })}
                    </ul>
                </div>
            );

        }
        else {
            return (
                <div>Loading</div>
            )
        }
    }

}


export default Test;