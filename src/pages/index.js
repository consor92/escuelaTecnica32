// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import NewsSection from '../Components/NewsSection/NewsSection'
import Layout from '@/Components/Layout/Layout'
import HomeIndex from '@/Components/HomeIndex/HomeIndex'
import AllDisciplines from '@/Components/Disciplines/AllDisciplines'
import { getDisciplineItem } from '@/Service/DisciplineItem'



const inter = Inter({ subsets: ['latin'] })

export default function Home({item}) {
  return (
    <>
    <Layout></Layout>
    <HomeIndex/>
    <NewsSection/>
    <AllDisciplines item={item}/>
    </>
  )
}

 export async function getStaticProps() {
  	const res = await getDisciplineItem()
    console.log("llamado------------" +  await getDisciplineItem() + "con res --" + res)
  	return {
  		props: {
  			item: res
  		}
  	}
  }

