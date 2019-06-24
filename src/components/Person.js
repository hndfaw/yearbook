import './Person.css';
import React from 'react'

  function Person(props) {
  return (
    <div className="person-card">
        <img className="person-photo" src={props.member.photo} alt="member"/>
       <h4 className="person-name">{props.member.name}</h4>
       <p className="person-quote" >"{props.member.quote}"</p>
       <p className="person-super-relative">{props.member.superlative}</p>
    </div>
  )
}


export default Person

