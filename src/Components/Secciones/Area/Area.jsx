import React from 'react';
import styles from './Area.module.css'
const Area = ({ areaNum }) => {
  return (
    <div className={styles.Area}>
      <h1>Área {areaNum}</h1>
      <p>Aquí podrías colocar la información específica de la zona {areaNum}</p>
    </div>
  );
};

export default Area;