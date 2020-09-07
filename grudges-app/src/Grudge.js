import React from 'react';
import Grudges from './Grudges';
class Grudge extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            name:'',
            reason:''
        }
        this.onRemove=this.onRemove.bind(this);
        this.save=this.save.bind(this);
    }
    onRemove(e){
        e.preventDefault();
        this.props.onDel(this.props.index);
    }
    
    onEdit=()=> {
        this.setState({
            edit:true
        })
    }
    save(e){
        e.preventDefault();
        this.props.onChange(this.state.name,this.state.reason,this.props.index);
        this.setState({
            edit:false
        })
    }
    handlePerson=(e)=>{
this.setState({
    name:e.target.value
})
    }
handleReason=(e)=>{
    this.setState({
        reason:e.target.value
    })
}
    
    renderForm() {

        //if (this.state.edit == item.id) {
            return (
    
                        <form onSubmit={this.save}>
                            <article className="Grudge">
                                <input type="text" onChange={this.handlePerson}
                                ></input>
                                <input type="text" onChange={this.handleReason}></input>
                                <button className="NewGrudge-submit button">Submit</button>
                            </article>
                        </form>
    
    
                    )
                
                }
        renderDisplay(){
            return (
                        <article className="Grudge" key={this.props.index}>
                            <h3>{this.props.person}</h3>
                            <p>{this.props.reason}</p>
                            <input type="checkbox" onChange={this.onRemove} />
                                Forgiven
                            {''}
                            <button className="NewGrudge-submit button" onClick={this.onEdit}>Edit</button>
                        </article>
                    )
                }
            
        
       render(){
           if(this.state.edit){
               return this.renderForm();
           }
           else{
               return this.renderDisplay();
           }
       } 
           
}
export default Grudge;
