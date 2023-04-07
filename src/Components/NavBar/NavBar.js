import React from 'react'
import Style from './NavBar.module.css'
import Link from 'next/link'

const navBar = () => {
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
      <div className={Style.container__login}>
        Login
      </div>
    </div>
  )
}

export default navBar