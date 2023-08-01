import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SectionCharacters } from './components/SectionCharacters';
import { SectionHero } from './components/SectionHero';

export default function Home() {
  return (
    <>
      <Header/>
      <SectionHero/>
      <SectionCharacters/>
      <Footer/>
    </>

  )
}
