import React, { useState } from 'react'
import './Discipline.module.css'
import Layout from '@/Components/Layout/Layout'
import { getDisciplineItem } from '@/Service/DisciplineItem'
import Link from 'next/link'
import Style from '../AllDisciplines.module.css'

const Discipline = ({ items, showAs }) => {
	const [showText, setShowText] = useState('')
	const handleMouseEnter = (text) => {
		setShowText(text)
	}
	const handleMouseLeave = () => {
		setShowText('')
	}

	if (showAs === 'home') {
		return (
			<Link className={Style[`container__${items.id}`]}
				onMouseEnter={() => handleMouseEnter(`${items.titleUppercase}`)}
				onMouseLeave={() => handleMouseLeave()}
			>
				<h1 style={{ opacity: showText === `${items.titleUppercase}` ? 0 : 1, transition: 'opacity 0.5s ease' }}>{items.titleUppercase}</h1>
				<h1 style={{ opacity: showText === `${items.titleUppercase}` ? 1 : 0, transition: 'opacity 0.2s ease' }}>DESCUBRE MAS...</h1>
			</Link>

		)
	}
}

// export async function getStaticProps() { //Funcion que permite el Static Generation
// 	const res = await getDisciplineItem()
// 	return {
// 		props: {
// 			items: res
// 		} //Next solicita que el return sea un props de un objeto 
// 	}
// }

export default Discipline


	// < h1 > { items.title }</h1 >