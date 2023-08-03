'use client'


import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SectionCharacters } from './components/SectionCharacters';
import { SectionHero } from './components/SectionHero';

export default function Home({ data }) {

  console.log(data)
  
  return (
    <>
      <Header/>
      <SectionHero/>
      <SectionCharacters/>
      <Footer/>
    </>

  )
}


export const getStaticProps = () => {
  const prismic = getPrismicClient
  return {
    props: {
      data: myName,
    },
  };
};