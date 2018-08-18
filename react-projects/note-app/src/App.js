import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [{
        header: 'first',
        content: 'Data is here'
      },
      {
        header: 'second',
        content: 'second is here'
      }
      ],
      currentSelected: 0,
      newText: 'Data is here',
      editHeader: -1,
      i: 0,
      CurrentHeader: 'first'
    }
    this.show = this.show.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.saveHeader = this.saveHeader.bind(this);
    this.editList = this.editList.bind(this);
    this.editH = this.editH.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }
  show(e) {
    this.setState({
      currentSelected: e.currentTarget.getAttribute('data-id'),
      newText: this.state.notes[e.currentTarget.getAttribute('data-id')].content

    })
  }
  add() {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          header: 'third',
          content: 'new data'
        }]
    })
  }
  edit(e) {
    this.setState(
      {
        newText: e.target.value
      }
    )
  }
  save() {
    this.state.notes[this.state.currentSelected].content = this.state.newText
    this.setState(
      this.state
    )
  }
  saveHeader(e) {
    this.state.notes[this.state.editHeader].header = this.state.CurrentHeader
    this.state.editHeader = -1;
    this.setState(
      this.state
    )
  }
  editList(e) {
    this.setState({
      CurrentHeader: e.target.value
    })

  }
  editH(e) {
    this.setState({
      editHeader: e.target.getAttribute("data-id"),
      CurrentHeader: this.state.notes[e.currentTarget.getAttribute('data-id')].header
    })
  }
  up(e) {
    var temp = this.state.notes[e.target.getAttribute('data-id')].header
    this.state.notes[e.currentTarget.getAttribute('data-id')].header = this.state.notes[e.currentTarget.getAttribute('data-id') - 1].header
    this.state.notes[e.currentTarget.getAttribute('data-id') - 1].header = temp
    this.setState(
      this.state
    )

  }
  down(e) {
    const dataId = parseInt(e.target.getAttribute('data-id'));
    var tempL = this.state.notes[dataId].header
    this.state.notes[dataId].header = this.state.notes[dataId + 1].header
    this.state.notes[dataId + 1].header = tempL
    this.setState(
      this.state
    )
  }
  render() {
    return (
      <div>
        <ol>{
          this.state.notes.map((note, i) => {
            if (this.state.editHeader == i) {
              return (
                <li key={i}>
                  <input data-id={i} value={this.state.CurrentHeader} onChange={this.editList}></input>
                  <button data-id={i} onClick={this.saveHeader}>save</button>
                </li>
              )
            }
            else {
              return (
                <li key={i} >
                  <span
                    data-id={i} onClick={this.show}>
                    {note.header}
                  </span>
                  <button data-id={i} onClick={this.editH}>edit</button>
                  <button data-id={i} onClick={this.up}>up</button>
                  <button data-id={i} onClick={this.down}>down</button>
                </li>
              )
            }

          }
          )
        }
        </ol>
        <button onClick={this.add}>add</button>
        <button onClick={this.save}>Save</button>
        <textarea rows="4" cols="50" value={this.state.newText} onChange={this.edit}></textarea>
      </div>

    );
  }
}

export default App;
