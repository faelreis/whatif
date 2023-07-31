import Image from 'next/image'
import { Container } from './Container'

import logoMarvel from '../assets/logo-marvel.png'
import logoRafael from '../assets/logo-rafael.svg'


export function Header(){
    return(
        <header className='h-[80] border-b-[1px] border-white border-opacity-20'>
            <Container>
                <div className='h-full w-full flex justify-between py-[30px] border-x-[1px] border-white border-opacity-20 '>
                   <Image src={logoMarvel} alt='Logo Marvel' className='ml-10'/>
                   <Image src={logoRafael} alt='Logo Rafael Reis Franco' className='mr-10'/>
                </div>
            </Container>
        </header>
    )
}