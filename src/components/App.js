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
    const {currentValue, displayForm, data} = this.state;
    const studentTabStyle = (currentValue === 'students') ? "btn-dark" : "btn-light";
    const staffTabStyle = currentValue === 'staff' ? "btn-dark" : "btn-light";
    const addNewStudentBtnStyle = currentValue === 'students' ? "add-btn" : "hide";
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        <div className="tabs-container">
          <div className="inline-block">
            <button  onClick={this.selectTab} name="staff" className={`btn ${staffTabStyle}`} type="button" >Staff</button>
            <button onClick={this.selectTab} name="students" className={`btn ${studentTabStyle}`} type="button" >Students</button>
          </div>
          <button onClick={this.showAddNewStudent} className={`${addNewStudentBtnStyle}`}>Add new student</button>
        </div>
        </header>
        <AddStudent addNewStudent={this.addNewStudent} hide={displayForm}/>
        <Cohort staff={data} />
      </div>
    );
  }
}

export default App;
