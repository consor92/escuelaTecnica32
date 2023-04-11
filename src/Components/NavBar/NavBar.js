import React, { useState } from 'react'
import Style from './NavBar.module.css'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'


const navBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const handleOpenSideBar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <div className={Style.container}>
      <div className={Style.container__EscuelaTecnica}>
        <div className={Style.escuelaTecnica_Img}></div>
        <div className={Style.escuelaTecnica_info}>
          <h2>LA GLORIOSA 32</h2>
          <h3>Gral Jose de San Martin ET32 DE14</h3>
        </div>
      </div>
      <div className={sideBarOpen ? Style.container__navBarClosed : Style.container__navBar}>
        <div className={Style.container__navBarTop}>
          <nav>
            <Link href='' >
              CALENDARIO
            </Link>
            <Link href='' >
              NOTICIAS
            </Link>
            <Link href='' >
              AUTORIDADES
            </Link>
            <Link href='' >
              AULA VIRTUAL
            </Link>
          </nav>
        </div>
        <div className={Style.container__navBarBottom}>
          <nav>
            <Link href='' >
              ESPECIALIDADES
            </Link>
            <Link href='' >
              INSCRIPCIONES
            </Link>
            <Link href='' >
              INFRAESTRUCTURA
            </Link>
            <Link href='' >
              COOPERADORA
            </Link>
          </nav>

        </div>
      </div>
      <button onClick={handleOpenSideBar} className={Style.container__sideBar}>
        <HiMenu />
      </button>
    </div>
  )
}

export default navBar