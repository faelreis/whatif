import { AboutCharacter } from "../components/AboutCharacter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { SectionCharacters } from "../components/SectionCharacters";
import { createClient } from "../../prismicio";

export const metadata = {
    title: 'Detalhes: | Marvel',
    description: 'Detalhes do personagem: ',
}

export default async function Character({params}){
    

    console.log(params.slug)
    const prismic = createClient();
    const document = await prismic.getSingle('home')
    const dataPage = document.data;
  
    const characters = await prismic.getAllByType('character')

    return(
        <>
            <PageTitle
                title='Detalhes  | Marvel'
                description=''
            />
            <Header/>
            <AboutCharacter data={characters}/>
            <SectionCharacters/>
            <Footer/>
        </>

    )
}

// export const getStaticPaths = async () => {
//     const prismic = getPrismicClient();
//     const characters = await prismic.getAllByType('character');
  
//     const paths = characters.map(({ data }) => ({
//       params: { slug: data.slug },
//     }));
  
//     return {
//       paths,
//       fallback: true,
//     };
//   };
  
 export const getServerSideProps = async (ctx)=>{
    console.log(ctx)
     return{
      props: {},
    }
 }