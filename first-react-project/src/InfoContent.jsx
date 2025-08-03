import React from 'react'
import './Content.css'

const InfoContent = ({icon, title, num}) => {
  return (
    <div className="content flex-content" id={icon} >
      <span className="material-symbols-outlined ft-48">{icon}</span>
      <div className="contents-right">
        <p>{title}</p>
        <h2>{num}</h2>
      </div>
    </div>
  )
}

export default InfoContent