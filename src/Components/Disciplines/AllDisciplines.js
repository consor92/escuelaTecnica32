import React, { useState } from 'react'
import Style from './AllDisciplines.module.css'
import Link from 'next/link';

import Discipline from './Discipline/Discipline';
import { getDisciplineItem } from '@/Service/DisciplineItem';

const AllDisciplines = ({ props }) => {
  console.log('props:', props);
  return (
    <div id='disciplines' className={Style.container}>
      {props?.map(item => <h1 key={item.id}>{item.title}</h1>)}
    </div>
  )
}

export async function getStaticProps() {
  const items = await getDisciplineItem();
  console.log('caca',items)
  return {
    props: {items}
  }
}

export default AllDisciplines;



// const AllDisciplines = () => {
//   const [showText, setShowText] = useState("");

//   const handleMouseEnter = (text) => {
//     setShowText(text);
//   }

//   const handleMouseLeave = () => {
//     setShowText("");
//   }

//   return (
//     <div id='disciplines' className={Style.container}>
//       <Link href='' className={Style.container__mecanica}
//         onMouseEnter={() => handleMouseEnter("MECANICA")}
//         onMouseLeave={() => handleMouseLeave()}
//       >
//         <h1 style={{ opacity: showText === "MECANICA" ? 0 : 1, transition: "opacity 0.5s ease" }}>MECANICA</h1>
//         <h1 style={{ opacity: showText === "MECANICA" ? 1 : 0, transition: "opacity 0.2s ease" }}>DESCUBRE MAS...</h1>
//       </Link>

//       <div className={Style.container__computacion}
//         onMouseEnter={() => handleMouseEnter("COMPUTACION")}
//         onMouseLeave={() => handleMouseLeave()}
//       >
//         <h1 style={{ opacity: showText === "COMPUTACION" ? 0 : 1, transition: "opacity 0.5s ease" }}>COMPUTACION</h1>
//         <h1 style={{ opacity: showText === "COMPUTACION" ? 1 : 0, transition: "opacity 0.2s ease" }}>DESCUBRE MAS...</h1>
//       </div>
      
//       <div className={Style.container__automotores}
//         onMouseEnter={() => handleMouseEnter("AUTOMOTORES")}
//         onMouseLeave={() => handleMouseLeave()}
//       >
//         <h1 style={{ opacity: showText === "AUTOMOTORES" ? 0 : 1, transition: "opacity 0.5s ease" }}>AUTOMOTORES</h1>
//         <h1 style={{ opacity: showText === "AUTOMOTORES" ? 1 : 0, transition: "opacity 0.2s ease" }}>DESCUBRE MAS...</h1>
//       </div>
//     </div>
//   )
// }

// export default AllDisciplines;