import React from 'react';
import { render } from '@testing-library/react';
import Grudges from './Grudges.js';
import id from 'uuid/v4';
class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grudges: [{
                id:this.nextId(),
                person: 'shannon',
                reason: 'Parked too close to me in the parking lot',
                forgiven:false
            }]
        }
        this.onForgiven=this.onForgiven.bind(this);
        this.nextId=this.nextId.bind(this);
    }
    // nextId(){
    //     this.uniqueID=this.uniqueID||0
    //    return this.uniqueID
    // }
    nextId(){
        this.uniqueID=this.uniqueID||0
       return this.uniqueID++
    }
    addGrudge = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return ({
                grudges: [
                    ...prevState.grudges,
                    {
                        id: this.nextId(),
                        person: this._newText.value,
                        reason: this._newReason.value
                    }
                ] 
             } );
        },
        ()=>{
            this._newText.value="";
            this._newReason.value="";
        })
    }
    onForgiven(id){
        console.log(id);
        this.setState(prevState=>({
                grudges:prevState.grudges.filter(
                    grudge=>(grudge.id!==id))
            })
        )
    }
    edit=(newPerson,newReason,i)=>{
        console.log(newPerson,i);
        this.setState(prevState=>({
            grudges:prevState.grudges.map(
                grudge=>(grudge.id!==i)?grudge:{
                    
                    person:newPerson,
                    reason:newReason
                }
            )
        }))
    }

    render() {
        return (
            <div>
                <form className="NewGrudge" onSubmit={this.addGrudge}>
                    <input type="text"
                        placeholder="Person"
                        
                        ref={input=>this._newText=input}
                        required>
                    </input>
                    <input type="text"
                        placeholder="Reason"
                        ref={input=>this._newReason=input}
                        required>
                    </input>
                    <button className="NewGrudge-submit button">Submit</button>
                </form>
                <Grudges data={this.state.grudges} onToggle={this.onForgiven} onUpdate={this.edit}/>
            </div>

        )
    }
}
export default Application;


