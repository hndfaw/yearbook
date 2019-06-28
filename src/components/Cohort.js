import React from 'react';
import Person from './Person';
import './Cohort.css';

function Cohort(props) {

  return (
    <div className="cohort">
      {props.staff.map(member => {

        return <Person
        name={member.name}
        quote={member.quote}
        photo={member.photo}
        superlative={member.superlative}
        key={member.id} />
      })}
    </div>
  )
}


export default Cohort;
