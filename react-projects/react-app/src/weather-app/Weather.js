import React, { Component } from 'react';
import axios from 'axios';


export class Weather extends Component {
    componentDidMount() {
        axios.get('/data.json')
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
    constructor(){
        super();
        this.state = {
            weather: {list : []}
        }
    }
    render() {
        return (
            <div className='flex-grid '>
                {this.state.weather.list.map(function(item){
                   return (
                   <div className='col'>
                       <b>
                    {item.main.temp_min}
                    </b>
                <br /><img src={"http://openweathermap.org/img/w/" + item.weather[0].icon + ".png"}/>
                  
                   </div>
                
                )
                })}
            </div>
        );
    }
}


