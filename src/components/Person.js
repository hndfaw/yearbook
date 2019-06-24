import './Person.css';
import React from 'react'

  function Person(props) {
  return (
    <div>
       <h3>{props.member.name}</h3>
    </div>
  )
}


export default Person

