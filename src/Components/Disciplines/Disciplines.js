import React, { useState } from 'react'
import Style from './Disciplines.module.css'
import Link from 'next/link';

const Disciplines = ({ props, showAs }) => {
  console.log('props', props)
  const [showText, setShowText] = useState('')

  const handleMouseEnter = (text) => {
    setShowText(text)
  }

  const handleMouseLeave = () => {
    setShowText('')
  }
  if (showAs === 'allDisciplines') {
    return (
      <div id='disciplines' className={Style.container}>
        {props?.map(item =>
          <Link href={`discipline/${item.id}`} className={Style[`container__${item.id}`]}
            onMouseEnter={() => handleMouseEnter(`${item.titleUppercase}`)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <h1 style={{ opacity: showText === `${item.titleUppercase}` ? 0 : 1, transition: 'opacity 0.5s ease' }}>{item.titleUppercase}</h1>
            <h1 style={{ opacity: showText === `${item.titleUppercase}` ? 1 : 0, transition: 'opacity 0.5s ease' }}>DESCUBRE MAS...</h1>
          </Link>
        )}
      </div>
    )
  }

  if (showAs === 'discipline') {
    console.log('props',props)
    return (
      <div className={Style.container__discipline}>
        <h1>{props.title}</h1>
      </div>
    )
  }

}


export default Disciplines;

