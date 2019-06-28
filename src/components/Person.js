import './Person.css';
import React from 'react'

  function Person({photo, name, quote, superlative}) {
  return (
    <div className="person-card">
       <img className="person-photo" src={photo} alt="member"/>
       <h4 className="person-name">{name}</h4>
       <p className="person-quote" >"{quote}"</p>
       <p className="person-super-relative">{superlative}</p>
    </div>
  )
}


export default Person

