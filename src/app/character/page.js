import { AboutCharacter } from "../components/AboutCharacter";
import { Header } from "../components/Header";
import { PageTitle } from "../components/PageTitle";
import { SectionCharacters } from "../components/SectionCharacters";

export const metadata = {
    title: 'Detalhes: | Marvel',
    description: 'Detalhes do personagem: ',
}

export default function Character(){
    return(
        <>
            <PageTitle
                title='Detalhes  | Marvel'
                description=''
            />
            <Header/>
            <AboutCharacter/>
            <SectionCharacters/>
        </>

    )
}