import Image from "next/image";
import '../globals.css'

import { Container } from "./Container";

import iconInstagram from '../assets/instagram.svg'
import iconYoutube from '../assets/youtube.svg'
import {TrailerVideo} from "./TrailerVideo";


export function SectionHero(){
    return(
        <section className='h-[731px] bg-hero_img'>
            <Container>
                <div className='w-full flex border-x-[1px] border-white border-opacity-20'>
                    <div className='max-w-[7rem] w-full flex flex-col items-center gap-[32px] border-r-[1px] border-white border-opacity-20'>
                        <Image
                            src={iconInstagram}
                            alt='Ícone Instagram'
                            className='mt-7'
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
                        <button className='rounded-md px-12 py-4 bg-red900 font-medium text-white border-[1px] border-solid border-red900 transition-all duration-300 ease-linear hover:bg-transparent'>Saiba mais</button>
                    </div>
                    <div className='mr-10'>
                        <TrailerVideo/>
                    </div>
                </div>
            </Container>
        </section>
    )
}