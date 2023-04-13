import React, { useState } from 'react'
import Style from './Disciplines.module.css'

const Disciplines = () => {
  const [showTextMecanica, setShowTextMecanica] = useState(false);
  const [showTextComputacion, setShowTextComputacion] = useState(false);
  const [showTextAutomotores, setShowTextAutomotores] = useState(false);

  return (
    <div id='discipline' className={Style.container}>
      <div className={Style.container__mecanica}
        onMouseEnter={() => setShowTextMecanica(true)}
        onMouseLeave={() => setShowTextMecanica(false)}
      >
       <h1 style={{ opacity: showTextMecanica ? 0 : 1, transition: "opacity 0.5s ease" }}>MECANICA</h1>
        <h1 style={{ opacity: showTextMecanica ? 1 : 0, transition: "opacity 0.2s ease" }}>DESCUBRE MAS...</h1>
      </div>
      <div className={Style.container__computacion}
        onMouseEnter={() => setShowTextComputacion(true)}
        onMouseLeave={() => setShowTextComputacion(false)}
      >
       <h1 style={{ opacity: showTextComputacion ? 0 : 1, transition: "opacity 0.5s ease" }}>COMPUTACION</h1>
        <h1 style={{ opacity: showTextComputacion ? 1 : 0, transition: "opacity 0.2s ease" }}>DESCUBRE MAS...</h1>
      </div>
      <div className={Style.container__automotores}
        onMouseEnter={() => setShowTextAutomotores(true)}
        onMouseLeave={() => setShowTextAutomotores(false)}
      >
       <h1 style={{ opacity: showTextAutomotores ? 0 : 1, transition: "opacity 0.5s ease" }}>AUTOMOTORES</h1>
        <h1 style={{ opacity: showTextAutomotores ? 1 : 0, transition: "opacity 0.2s ease" }}>DESCUBRE MAS...</h1>
      </div>
    </div>
  )
}


export default Disciplines
