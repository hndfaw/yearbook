import React from 'react';
import Person from './Person';
import './Cohort.css';

function Cohort(props) {

  const members = props.staff.map(member => {
    return <Person
    name={member.name}
    quote={member.quote}
    photo={member.photo}
    superlative={member.superlative}
    key={member.id} />
  })

  return (
    <div className="cohort">
      {members}
    </div>
  )
}


export default Cohort;
