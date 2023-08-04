import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SectionCharacters } from './components/SectionCharacters';
import { SectionHero } from './components/SectionHero';
import { createClient } from "../prismicio";

export default async function Home() {  

  const prismic = createClient();
  const document = await prismic.getSingle('home')
  const dataPage = document.data;

  const characters = await prismic.getAllByType('character')

  return (
    <>
      <Header/>
      <SectionHero data={dataPage}/>
      <SectionCharacters data={characters}/>
      <Footer/>
    </>

  )
}
