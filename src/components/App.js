import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import AddStudent from '../components/AddStudent';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      data: people.staff,
      currentValue: 'staff',
      displayForm: false,
    }
  }

  selectTab = (e) => {
    const {staff, students} = this.state;

    if (e.target.name === 'staff') {
      this.setState({data: staff, currentValue: 'staff', displayForm: false });
    } else {
      this.setState({data: students, currentValue: 'students'});
    }
  }

  showAddNewStudent = () => {
    this.setState({displayForm: !this.state.displayForm});
  }

  addNewStudent = (newStudent) => {
    const students = [...this.state.students, newStudent];
    const data = [...this.state.students, newStudent];
    this.setState({data, students })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        <div className="tabs-container">
          <div className="inline-block">
            <button  onClick={this.selectTab} name="staff" className={`btn ${this.state.currentValue === 'staff' ? "btn-dark" : "btn-light"}`} type="button" >Staff</button>
            <button onClick={this.selectTab} name="students" className={`btn ${this.state.currentValue === 'students' ? "btn-dark" : "btn-light"}`} type="button" >Students</button>
          </div>
          <button onClick={this.showAddNewStudent} className={`${this.state.currentValue === 'students' ? "add-btn" : "hide"}`}>Add new student</button>
        </div>
        </header>
        <AddStudent addNewStudent={this.addNewStudent} hide={this.state.displayForm}/>
        <Cohort staff={this.state.data} />
      </div>
    );
  }
}

export default App;
