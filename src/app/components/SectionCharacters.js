import { CardCharacter } from "./CardCharacter";
import { Container } from "./Container";
import logoCardMarvel from '../assets/logo-marvel.png'
import Image from 'next/image'

export function SectionCharacters({ data }){
    return(
        <div className='py-20'>
            <Container>
                <div className='w-full flex items-center justify-center flex-col'>
                    <div className='flex items-start justify-start mb-12'>
                        <div className='flex items-center justify-center gap-3 flex-col'>
                            <div className='w-16 h-[1px] bg-red900'></div>
                            <strong className='text-2xl text-center'>Personagens Marvel</strong>
                        </div>
                    </div>
                    <div className='grid gap-x-6 gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-6 xl:gap-y-16'>
                        {
                            data?.map(character =>{
                                return(
                                    <CardCharacter
                                        key={character.id}
                                        imageCharacter={character.data.image_character.url}
                                        slug={character.data.slug}
                                        name={character.data.name_character}
                                    />
                                )
                            })    
                        }
                        <div className='flex items-center justify-center'>
                            <Image
                                src={logoCardMarvel}
                                alt='Logo Marvel'
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}