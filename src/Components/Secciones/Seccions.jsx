import styles from "./Seccions.module.css";
import { useState } from 'react';
import Modal from "./Modal";


export default function Seccions(){
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState(null); // Información para mostrar en el modal
  
    const handleModal = (content) => {
      setOpenModal(true);
      setModalContent(content);
    };
    
    return (
    <div className={styles.container}>
  <div id="area1" className={styles.area1} onClick={() => handleModal("area1")} ><h1>hola</h1></div>
  <div id="area2" className={styles.area2}> <h1>hola</h1></div>
  <div id="area3" className={styles.area3}> <h1>hola</h1></div>
  <div id="area4" className={styles.area4}> <h1>hola</h1></div>
  <div id="area5" className={styles.area5}> <h1>hola</h1></div>
  <div id="area6" className={styles.area6}> <h1>hola</h1></div>
  {openModal && <Modal content={modalContent} onClose={() => setOpenModal(false)} />}
</div>
    )
}