import React, { Component } from 'react';
import './AddStudent.css';

class AddStudent extends Component {

  state = {
    name: '',
    quote: '',
    superlative: '',
    photo: 'https://placekitten.com/200/300',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitNewStudent = (e) => {
    e.preventDefault();
    let id = new Date().getTime();
    const {name, quote, superlative, photo} = this.state;
    let newStudent = {
      id,
      name,
      quote,
      superlative,
      photo
    }

    this.props.addNewStudent(newStudent);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({name: '', quote: '', superlative: ''});
  }

  render() {
    return (
      <form className={`add-studnet-form ${this.props.hide ? 'flex' : 'hide'}`}>
        <label>Name</label>
        <input  onChange={this.handleChange} name="name" type="text" value={this.state.name}/>
        <label>Quote</label>
        <input value={this.state.quote} onChange={this.handleChange}name="quote" type="text"/>
        <label>Superlative</label>
        <input value={this.state.superlative} onChange={this.handleChange}name="superlative" type="text"/>
        <button onClick={this.submitNewStudent}>Add</button>
      </form>
    )
  }
}

export default AddStudent
