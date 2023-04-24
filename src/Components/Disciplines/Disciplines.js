import React, { useState } from 'react'
import Style from './Disciplines.module.css'
import Link from 'next/link';
import { IoChevronForwardSharp } from "react-icons/io5";
import Image from 'next/image';
import { Zoom, Fade } from 'react-reveal';
import { BsFillCircleFill } from "react-icons/bs";



const Disciplines = ({ props, showAs }) => {

  console.log('array', props.imagesData)

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
        {props?.map((item, index) =>
          <Link key={index} href={`discipline/${item.id}`} className={Style[`container__${item.id}`]}
            onMouseEnter={() => handleMouseEnter(`${item.titleUppercase}`)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <h1 style={{ opacity: showText === `${item.titleUppercase}` ? 0 : 1, transition: 'opacity 0.2s ease' }}>{item.titleUppercase}</h1>
            <h1 style={{ opacity: showText === `${item.titleUppercase}` ? 1 : 0, transition: 'opacity 0.2s ease' }}>DESCUBRE MAS...</h1>
          </Link>
        )}
      </div>
    )
  }

  if (showAs === 'discipline') {
    return (
      <div className={Style.containerPage}>
        <div className={Style[`containerPage__${props.id}`]}>
          <h1 className={Style.containerPage__title}>{props.titleUppercase}</h1>
        </div>
        
        <section className={Style.containerPage__discipline__info}>
          <h2> <IoChevronForwardSharp style={{ color: 'var(--font-color--redIntense)', height: '30', width: '30' }} />Titulo Oficial:&nbsp;<strong>Tecnico {props.title}</strong>&nbsp;(6 años)</h2>
          <h3>Resolución Nº ${props.resolucion}/SSGECP/2012 - Ministerio de educacion</h3>
        </section>

        <section className={Style.containerPage__discipline__about}>
          <h2> <IoChevronForwardSharp style={{ color: 'var(--font-color--redIntense)', height: '30', width: '30' }} />Por que estudiar&nbsp;<strong>{props.titleUppercase}</strong></h2>
          <p>{props.text_about_part1}</p>
          <p>{props.text_about_part2}</p>
        </section>

        <section className={Style.containerPage__discipline__photo}>
          <Fade left duration={3000}>
            <div className={Style.discipline__photo__one}></div>
          </Fade>
        </section>

        <section className={Style.containerPage__discipline__future}>
          <h2> <IoChevronForwardSharp style={{ color: 'var(--font-color--redIntense)', height: '30', width: '30' }} /><strong>{props.titleUppercase}</strong>&nbsp;es considerada una carrera del futuro?</h2>
          <p>{props.text_future_part1}</p>
          <p>{props.text_future_part2}</p>
        </section>

        <section className={Style.containerPage__discipline__photo}>
          <Fade left duration={3000}>
            <div className={Style.discipline__photo__two}>
            </div>
          </Fade>
        </section>

        <section className={Style.containerPage__discipline__practice}>
          <h2> <IoChevronForwardSharp style={{ color: 'var(--font-color--redIntense)', height: '30', width: '30' }} />Las&nbsp;<strong>Practicas Profesionalizantes</strong>&nbsp;durante la carrera</h2>
          <p>{props.text_practice_part1}</p>
        </section>

        <section className={Style.containerPage__discipline__workshopStuden}>
          <h2>Trabajos de nuestros alumnos  <span className={Style.discipline__workshopStuden__line}></span> </h2>
          <div className={Style.container_discipline}>
            <Zoom duration={3000}>
              {props.imagesData?.map((item, index) =>
                <Image key={index} src={`${item.url}`} width={318} height={300}></Image>
              )}
            </Zoom>
          </div>
        </section>

        <section className={Style.containerPage__discipline__study}>
          <h2> Plan de estudio <span className={Style.discipline__study__line}></span></h2>
          <div className={Style.discipline__study__infoSubject}>
            {
              props.subjectPerYear?.map((item, index) => {
                return (
                  <div className={Style.study__infoSubject__info}>
                    <h2>{item.year}</h2>
                    <Image
                      key={index}
                      src={`${item.imageUrl}`}
                      className={Style.study__infoSubject__image}
                      width={318}
                      height={200}></Image>
                    {
                      item.subjectName?.map((subject, index) => {
                        return (
                          <h3 key={index}><BsFillCircleFill style={{ color: 'var(--font-color--redIntense)', height: '7', width: '7' }} />&nbsp;&nbsp;{subject.name}</h3>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </section>

      </div>
    )
  }

}


export default Disciplines;

