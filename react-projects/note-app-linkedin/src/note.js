import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
  constructor() {
    super()
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.renderForm=this.renderForm.bind(this)
    this.renderDisplay=this.renderDisplay.bind(this)
    this.save=this.save.bind(this);
  }
  edit() {
    this.setState({
      editing: true
    })

  }
  remove() {
    this.props.onRemove(this.props.index)
  }
  save(e) {
    e.preventDefault()
    this.props.onChange(this._newText.value,this.props.index)
    this.setState({
       editing : false
    })
	}
    renderForm() {
      return (
        <div className="note">
          <form onSubmit={this.save}>
            <textarea ref={input => this._newText = input}/>
            <button><FaFloppyO /></button>
          </form>
        </div>
      )
    }
  
  renderDisplay() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button id="edit" onClick={this.edit}><FaPencil /></button>
          <button id="remove" onClick={this.remove}><FaTrash /></button>
        </span>

      </div>
    );
  }
  render(){
    return this.state.editing?this.renderForm():this.renderDisplay();
  }
}

export default Note;
