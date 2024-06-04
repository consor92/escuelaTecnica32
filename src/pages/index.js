import { Inter } from 'next/font/google'
import NewsSection from '../Components/NewsSection/NewsSection'
import News from '../Components/News/News'
import Layout from '@/Components/Layout/Layout'
import HomeIndex from '@/Components/HomeIndex/HomeIndex'
import Disciplines from '@/Components/Disciplines/Disciplines'
import Section from '@/Components/Secciones/Section.jsx'
import { getDisciplineItem } from '@/Service/DisciplineItem'
import Inscripciones from '@/Components/inscripciones/Inscripciones'
import Cooperadora from '@/Components/cooperadora/Cooperadora'



const inter = Inter({ subsets: ['latin'] })

export default function Home({ item }) {
  return (
    <>
      <Layout
        title='Esc. Tenica 32 "Gral. Jose de San Martin"'
        favicon='/logoet32.ico'
        page="home"
      ></Layout>
        <HomeIndex />
        <NewsSection />
        <Disciplines
          props={item}
          showAs='allDisciplines' />
          <Inscripciones/>
        <Section/>
        <Cooperadora/>
    </>
  )
}

export async function getStaticProps() {
  const res = await getDisciplineItem()
  return {
    props: {
      item: res
    }
  }
}

