import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [{
        header: 'abc',
        content: 'hello weorrld'
      }, {
        header: 'kkbc',
        content: 'hellod'
      }],
      currentSelected: 0,
      currentEdit: -1,
      newText: 'hello weorrld',
      i:0,
      newEdit:'abc'

    }
    this.add = this.add.bind(this);
    this.data = this.data.bind(this);
    this.modify = this.modify.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.editList = this.editList.bind(this);
  }
  add() {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          header: 'ccd',
          content: 'new entry'
        }
      ]
    })
  }
  data(e) {
    this.setState({
      currentSelected: e.currentTarget.getAttribute('data-id'),
      newText: this.state.notes[e.currentTarget.getAttribute('data-id')].content
    })
  }

  modify(e) {
    this.setState(
      {
        newText: e.target.value
      }

    )}
    editList(e){
      this.setState({
        newEdit: e.target.value
      })
    }
  save() {
    this.state.notes[this.state.currentSelected].content = this.state.newText
    this.setState(
      this.state
    )
  }
  edit(e) {
    this.setState({
      currentEdit: e.target.getAttribute("data-id"),
      newEdit: this.state.notes[e.currentTarget.getAttribute('data-id')].header
    })
  }
  saveEdit(){
    this.state.notes[this.state.currentEdit].header=this.state.newEdit
    this.state.currentEdit=-1;
    this.setState(
      this.state
    )
}

  render() {
    return (
      <div className="row">
        <div className="note-list" >
          <button className="add-button" onClick={this.add}>+</button>
          <h2>List</h2>
          <ol>
            {this.state.notes.map((note, i) => {
              if (this.state.currentEdit == i) {
                return (
                  <li key={i} >
                    <input data-id={i} value={this.state.newEdit} onChange={this.editList}></input>
                    <button data-id={i} onClick={this.saveEdit}>save</button>
                  </li>
                )
              }
              else {
                return (
                  <li key={i} >
                    <span data-id={i} onClick={this.data}>{note.header}</span>
                    <button data-id={i} onClick={this.edit}>edit</button>
                  </li>
                )
              }
            })}
          </ol>
        </div>
        <div className="note-details" >
          <button className="save-button" onClick={this.save} >Save</button>
          <h2>Task</h2>
          <textarea rows="4" cols="50" value={this.state.newText} onChange={this.modify} />
        </div>
      </div>
    );
  }
}

export default App;
