import styles from "./Section.module.css";
import { useState } from "react";
import Area from "./Area/Area";
import itemSeccions from "@/pages/api/itemSeccions";

export default function Seccions() {
  const [area, setArea] = useState(0);
  const handleClick = () => {
    setArea(0);
  };

  let componentToShow = null;

  if (area === 0) {
    componentToShow = (
      <div className={styles.container}>
        {
          itemSeccions?.map((item, index) =>
            <div key={index} className={styles[`area${item.id}`]} onClick={() => setArea(item.id)} ><h1> {item.title} </h1></div>
          )}
      </div>
    );
  } else {
    componentToShow = (     
      <div className={styles.parent} onClick={handleClick}>
        <Area areaNum={area} className={styles.area} setArea={setArea}/>
      </div>
    );
  }

  return <div>{componentToShow}</div>;
}
