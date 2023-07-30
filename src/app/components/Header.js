import Image from 'next/image'
import { Container } from './Container'

import logoMarvel from '../assets/logo-marvel.png'
import logoRafael from '../assets/logo-rafael.svg'


export function Header(){
    return(
        <header className='h-[80] border-b-[1px] border-white'>
            <Container>
                <div className='h-full w-full flex justify-between border-solid border-white my-[30px]'>
                   <Image src={logoMarvel} alt='Logo Marvel'/>
                   <Image src={logoRafael} alt='Logo Rafael Reis Franco'/>
                </div>
            </Container>
        </header>
    )
}