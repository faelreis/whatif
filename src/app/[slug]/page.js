
import { AboutCharacter } from "../components/AboutCharacter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { SectionCharacters } from "../components/SectionCharacters";
import { createClient } from "../../prismicio";

export default async function Character(){

    const client = createClient();
    const characters = await client.getAllByType('character')

    return(
        <>
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