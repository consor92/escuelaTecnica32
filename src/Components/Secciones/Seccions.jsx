import styles from "./Seccions.module.css";
import { useState } from "react";
import Area from "./Area/Area";

export default function Seccions() {
  const [area, setArea] = useState(0);

  const handleClick = () => {
    setArea(0);
  };

  let componentToShow = null;

  if (area === 0) {
    componentToShow = (
      <div className={styles.container}>
        <div id="area1" className={styles.area1} onClick={() => setArea(1)}>
          <h1>EVENTOS <br/> Y <br/> REUNIONES</h1>
        </div>
        <div id="area2" className={styles.area2} onClick={() => setArea(2)}>
          <h1>ADMINISTRATIVA</h1>
        </div>
        <div id="area3" className={styles.area3} onClick={() => setArea(3)}>
          <h1>ACTIVIDADES EXTRACURRICULARES</h1>
        </div>
        <div id="area4" className={styles.area4} onClick={() => setArea(4)}>
          <h1>CIENCIA Y TECNOLOGIA</h1> 
        </div>
        <div id="area5" className={styles.area5} onClick={() => setArea(5)}>
          <h1>INSTALACIONES<br/>DEPORTIVAS</h1>
        </div>
        <div id="area6" className={styles.area6} onClick={() => setArea(6)}>
          <h1>SOCIAL Y CULTURAL</h1>
        </div>
      </div>
    );
  } else {
    componentToShow = (
      <div className={styles.parent}onClick={handleClick}>
          <Area areaNum={area} className={styles.area} />
      </div>
    );
  }

  return <div>{componentToShow}</div>;
}
