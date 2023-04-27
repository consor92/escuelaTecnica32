import React from 'react';
import styles from './Area.module.css'
const Area = ({ areaNum }) => {
  let name = undefined
  if (areaNum === 1) {
    name =("EVENTOS Y REUNIONES");
  } else if (areaNum === 2) {
    name = "ADMINISTRATIVA";
  } else if (areaNum === 3) {
    name =("ACTIVIDADES EXTRACURRICULARES");
  } else if (areaNum === 4) {
    name =("CIENCIA Y TECNOLOGIA");
  } else if (areaNum === 5) {
    name =("INSTALACIONES DEPORTIVAS");
  } else if (areaNum === 6) {
    name =("SOCIAL Y CULTURAL");
  } else {
    name =("Opción inválida");
  }


  
  return (
    <div className={styles.container}>
  <div className={styles.img1}></div>
  <div className={styles.img2}></div>
  <div className={styles.area2}>
    
  </div>
  <div className={styles.area1}>
  <h2>{name}</h2>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam cum sint assumenda tempore nam quo perspiciatis est. Adipisci doloribus veritatis magnam porro explicabo ducimus, dicta repudiandae et aut. Voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet quasi quo nulla dolores nam, ea debitis, voluptatum itaque consequuntur ullam expedita recusandae quas voluptate ex beatae atque eum magni.</h3>
  </div>
</div>
  );
};

export default Area;