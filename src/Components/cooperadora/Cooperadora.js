import React from 'react'
import Style from './cooperadora.module.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const url1 = 'https://cdn.wallpapersafari.com/95/49/RBudz6.jpg'
const url2 = 'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg'
const url3 = 'https://raw.githubusercontent.com/imagezzzz/blog_background/main/42.jpg'
const url4 = 'https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg'
const url5 = 'https://e1.pxfuel.com/desktop-wallpaper/389/672/desktop-wallpaper-nosey-giraffe-long-neck.jpg'

const items = [
  <div className={Style.image} style={{ backgroundImage: `url(${url1})` }}></div>,
  <div className={Style.image} style={{ backgroundImage: `url(${url2})` }}></div>,
  <div className={Style.image} style={{ backgroundImage: `url(${url3})` }}></div>,
  <div className={Style.image} style={{ backgroundImage: `url(${url4})` }}></div>,
  <div className={Style.image} style={{ backgroundImage: `url(${url5})` }}></div>,
];

const Cooperadora = () => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Cooperadora Tecnica 32<span></span></h1>
      <p className={Style.text}>Les damos la bienvenida a la cooperadora de la Técnica 32. Estamos para ayudarlos y acompañar a sus hijos en sus trayectos escolares. La cooperadora colaborará con necesidades varias y materiales para el funcionamiento de la escuela. Necesitamos de su colaboración para realizar este objetivo, no solo monetariamente sino también, con padres que se comprometan estando en la Comisión directiva. Los esperamos en la cooperadora, para escuchar sus inquietudes y propuestas.</p>
      <div className={Style.container__msg}>
        <div className={Style.msg}></div>
        <div className={Style.image}>
          <AliceCarousel
            autoPlay
            autoPlayControls={false}
            autoPlayStrategy="none"
            autoPlayInterval={5000}
            animationDuration={5500}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
          />

        </div>
      </div>
    </div>
  )
}

export default Cooperadora
