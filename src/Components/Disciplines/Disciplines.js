import React from 'react'
import Style from './Disciplines.module.css'

const Disciplines = () => {
  return (
    <div id='discipline' className={Style.container}>
      <div className={Style.container__mecanica}></div>
      <div className={Style.container__computacion}></div>
      <div className={Style.container__automotores}></div>
    </div>
  )
}

export default Disciplines
