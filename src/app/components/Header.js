import Image from 'next/image'
import { Container } from './Container'

import logoMarvel from '../assets/logo-marvel.png'
import logoRafael from '../assets/logo-rafael.svg'


export function Header(){
    return(
        <header className=' h-[105px] border-b-[1px] border-white border-opacity-20 absolute top-0 w-full max-[348px]:border-none max-[348px]:h-[130px]'>
            <Container>
                <div className='h-full w-full flex justify-between py-[30px] border-x-[1px] border-white border-opacity-20 max-[348px]:border-none max-[348px]:flex-col max-[348px]:items-center max-[348px]:justify-center max-[348px]:gap-3'>
                   <Image src={logoMarvel} alt='Logo Marvel' className='ml-10 max-[348px]:ml-0'/>
                   <Image src={logoRafael} alt='Logo Rafael Reis Franco' className='mr-10 max-[348px]:mr-0'/>
                </div>
            </Container>
        </header>
    )
}