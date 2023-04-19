import React, { useState } from 'react'
import Style from './Disciplines.module.css'
import Link from 'next/link';
import { IoChevronForwardSharp } from "react-icons/io5";



const Disciplines = ({ props, showAs }) => {
  
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
        {props?.map((item,index) =>
          <Link key={index} href={`discipline/${item.id}`} className={Style[`container__${item.id}`]}
            onMouseEnter={() => handleMouseEnter(`${item.titleUppercase}`)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <h1 key={index} style={{ opacity: showText === `${item.titleUppercase}` ? 0 : 1, transition: 'opacity 0.8s ease' }}>{item.titleUppercase}</h1>
            <h1 key={index} style={{ opacity: showText === `${item.titleUppercase}` ? 1 : 0, transition: 'opacity 0.8s ease' }}>DESCUBRE MAS...</h1>
          </Link>
        )}
      </div>
    )
  }

  if (showAs === 'discipline') {
    console.log('props', props)
    return (
      <div className={Style.containerPage}>
        <div className={Style[`containerPage__${props.id}`]}>
          <h1 className={Style.containerPage__title}>{props.titleUppercase}</h1>
        </div>
        <section className={Style.containerPage__discipline__info}>
          <h2> <IoChevronForwardSharp style={{ color: 'var(--font-color--redIntense)', height: '30', width: '30' }} /> Titulo Oficial: <strong>Tecnico {props.title}</strong> (6 años)</h2>
          <h3>Resolución Nº ${props.resolucion}/SSGECP/2012 - Ministerio de educacion</h3>
        </section>
        <section className={Style.containerPage__discipline__about}>
          <h2> <IoChevronForwardSharp style={{ color: 'var(--font-color--redIntense)', height: '30', width: '30' }} /> Por que estudiar <strong>{props.titleUppercase}</strong></h2>
          <p>{props.text_about_part1}</p>
          <p>{props.text_about_part2}</p>
        </section>
        <section className={Style.containerPage__discipline__photo}>
          <div className={Style.discipline__photo__one}>
          </div>
        </section>

      </div>
    )
  }

}


export default Disciplines;

