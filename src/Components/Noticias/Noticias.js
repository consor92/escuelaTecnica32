import styles from './Noticias.module.css'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


export default function Noticias() {
  
  const router = useRouter();
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function fetchNoticias() {
      const res = await fetch("/api/noticias");
      const data = await res.json();
      setNoticias(data);
    }

    fetchNoticias();
  }, []);

  const handleNoticiaClick = (id) => {
    router.push(`/noticias/${id}`);
  };
  return (   <>
    { noticias.length > 0 &&
    <div class={styles.container}>
      
    <div class={styles.N0} onClick={() => handleNoticiaClick(noticias[0].id)}> <img class={styles.img} src="https://picsum.photos/id/237/200/300" alt="Imagen de la noticia"/>
    <h3 class={styles.title_Origen}> Candidato</h3>
    <h2 class={styles.title}> {noticias[0].title}</h2>
    <h3 class={styles.title_fecha} > hora y fecha</h3>
    </div>

    
    <div class={styles.N1} onClick={() => handleNoticiaClick(noticias[1].id)}><h2>{noticias[1].title}</h2></div>

    <div class={styles.N2} onClick={() => handleNoticiaClick(noticias[2].id)}><h2>{noticias[2].title}</h2></div>

    <div class={styles.N3} onClick={() => handleNoticiaClick(noticias[3].id)}><h2>{noticias[3].title}</h2></div>

    <div class={styles.N4} onClick={() => handleNoticiaClick(noticias[4].id)}><h2>{noticias[4].title}</h2></div>
    
    <div class={styles.N5} onClick={() => handleNoticiaClick(noticias[5].id)}><h2>{noticias[5].title}</h2></div>
  </div>}  </>
  )
}