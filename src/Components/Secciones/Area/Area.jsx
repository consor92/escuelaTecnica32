import React from 'react';
import styles from './Area.module.css'
import itemSeccions from '@/pages/api/itemSeccions';

const Area = ({ areaNum, setArea }) => {
  console.log(areaNum)

  const resulFilter = itemSeccions.filter(item => item.id === areaNum)

  const handleCancel = () => {
    setArea(0)
  }

  return (
    <>
      {resulFilter?.map((item) =>
        <div className={styles.container}>
          <div className={styles.containerImage}>
            <div className={styles.img1}></div>
            <div className={styles.img2}></div>
          </div>
          <div className={styles.area}>
            <div className={styles.areaTitle}>
              <h2 >{item.title}</h2>
            </div>
            <div className={styles.areaText}>
              <h3>{item.text}</h3>
              <div className={styles.areaButton}>
                <button onClick={() => handleCancel}>CERRAR</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Area;