import Image from "next/image";
import '../globals.css'

import { Container } from "./Container";

import {TrailerVideo} from "./TrailerVideo";


export function SectionHero({data}){

    return(
        <section className='h-[731px] bg-hero_img bg-cover bg-center pt-[96px] max-lg:h-[773px] max-md:h-[765px] max-sm:h-[721px] max-[403px]:h-[718px] max-[348px]:h-[738px] max-[300px]:h-[758px] max-[293px]:h-[800px] max-[233px]:h-[900px]'>
            <Container>
                <div className='w-full flex border-x-[1px] border-white border-opacity-20 max-lg:flex-col max-lg:items-center max-[348px]:border-none'>
                    <div className='max-w-[42rem] w-full mx-12 mt-20 max-sm:mt-10 max-xl:max-w-[35rem] max-lg:max-w-[43rem] max-md:max-w-[34rem] max-sm:max-w-[27rem] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center'>
                        <span className='text-yellow font-bold max-lg:text-center'>COMING SON</span>
                        <h1 className='max-lg:text-center text-6xl text-white font-bold mt-2 max-xl:text-5xl max-sm:text-3xl'>Momentos Cruciais do Universo Marvel</h1>
                        <p className='max-lg:text-center text-base font-base mb-8 mt-4 text-gray200 max-md:w-full max-md:max-w-10 max-md:text-sm'>Imaginando o que teria acontecido com os super-heróis se a história tivesse sido completamente diferente e tivesse ocorrido em outra realidade</p>
                        <button className='max-[233px]:px-6 rounded-md px-12 py-4 bg-red900 font-medium text-white border-[1px] border-solid border-red900 transition-all duration-300 ease-linear hover:bg-transparent'>Saiba mais</button>
                    </div>
                    <div className='mr-7 max-lg:mr-0'>
                        <TrailerVideo/>
                    </div>
                </div>
            </Container>
        </section>
    )
}