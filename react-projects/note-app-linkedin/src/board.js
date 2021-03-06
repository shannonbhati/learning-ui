import React, { Component } from 'react';
import Note from './note';
import FaPlus from 'react-icons/lib/fa/plus';
class Board extends Component {
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
        this.eachNote=this.eachNote.bind(this);
        this.upDate=this.upDate.bind(this);
        this.remove=this.remove.bind(this);
        this.add=this.add.bind(this);
        this.nextId=this.nextId.bind(this);
    }

    eachNote(note,i){
        return (<Note key={i}
                    index={i} 
                    onChange={this.upDate}
                    onRemove={this.remove}>
                    {note.note}
            </Note>
        )
    }
    upDate(newText,i){
        this.setState(prevState=>({
            notes:prevState.notes.map(
                note=>(note.id !==i) ? note : {...note,note:newText}
            )
        }))

    }
    remove(id){
        this.setState(prevState=>({
            notes:prevState.notes.filter(note=>note.id !==id)
        }))
    }
    add(text){
        debugger
        this.setState(prevState=>({
            notes:[
                ...prevState.notes,
                {
                    id:this.nextId(),
                    note:text
                }
            ]
        }))
    }
    nextId(){
        this.UniqueId=this.UniqueId||0
        return this.UniqueId++
    }
    render() {
        return (
            <div className="board">
              {this.state.notes.map(this.eachNote)}
              <button onClick={this.add.bind(null,"New Text")} id="add"><FaPlus /></button>
            </div>
        );
    }
}

export default Board;
