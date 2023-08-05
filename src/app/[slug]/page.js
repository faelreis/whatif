import { AboutCharacter } from "../components/AboutCharacter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { SectionCharacters } from "../components/SectionCharacters";
import { createClient } from "../../prismicio";

export default async function Character({ params }){

    const client = createClient();
    const characters = await client.getAllByType('character')
    const character = characters.data;

    // characters.splice(characters.findIndex((e) => {
    //     return params.slug === character.slug
    // }), 1)

    console.log(characters)

    return(
        <>
            <h2>{characters}</h2>
            <PageTitle
                title='Detalhes  | Marvel'
                description=''
            />
            <Header/>
            <AboutCharacter data={characters}/>
            <SectionCharacters data={characters}/>
            <Footer/>
        </>

    )
}