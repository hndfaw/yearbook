import React from 'react';
import Person from './Person';
import './Cohort.css';

function Cohort(props) {

  return (
    <div>
      {props.staff.map(member => {
        return <Person member={member} key={member.id} />
      })}
    </div>
  )
}


export default Cohort;
