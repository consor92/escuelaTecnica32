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
        LA GLORIOSA 32
      </div>
      <div className={Style.container__navBar}>
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
          <div>
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
      </div>
      <button onClick={handleOpenSideBar} className={Style.container__sideBar}>
      <HiMenu />
      </button>
    </div>
  )
}

export default navBar