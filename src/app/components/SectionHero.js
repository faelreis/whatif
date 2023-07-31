import Image from "next/image";

import { Container } from "./Container";

import iconInstagram from '../assets/instagram.svg'
import iconYoutube from '../assets/youtube.svg'
import { TrailerVideo } from "./TrailerVideo";
import { imageHero } from '../assets/image-hero.jpg'


export function SectionHero(){
    return(
        <section className='py-8 h-[731px] relative'>
            <Container>
                <div className='w-full flex border-l-1 border-solid'>
                    <div className='max-w-[7.7rem] w-full flex flex-col items-center gap-[32px] border-r-[1px] border-white'>
                        <Image
                            src={iconInstagram}
                            alt='Ícone Instagram'
                        />
                        <Image
                            src={iconYoutube}
                            alt='Ícone YouTube'
                        />
                    </div>
                    <div className='max-w-[42rem] w-full mx-20 mt-20'>
                        <span className='text-yellow font-bold'>COMING SON</span>
                        <h1 className='text-6xl text-white font-bold mt-2'>Momentos cruciais do Universo Marvel</h1>
                        <p className='text-base font-base mb-8 mt-4 text-gray200'>Imaginando o que teria acontecido aos super-heróis se a história fosse totalmente diferente e se passasse em outra realidade.</p>
                        <button className='px-12 py-4 bg-red900 font-medium text-white border-[1px] border-solid border-red900 transition-all duration-300 ease-linear hover:bg-transparent'>Saiba mais</button>
                    </div>
                    <div>
                        <TrailerVideo/>
                    </div>
                </div>
            </Container>
        </section>
    )
}