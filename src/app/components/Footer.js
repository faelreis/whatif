import { Container } from "./Container";
import Link from 'next/link'
import Image from 'next/image'
import LogoRafael from '../assets/logo-rafael.svg'

export function Footer(){
    return(
        <div>
            <Container>
                <div className='py-10 border-t-[1px] border-white border-opacity-20 w-full flex items-center justify-center flex-col gap-4'>
                    <Image src={LogoRafael} alt='Logo Rafael Reis Franco'/>
                    <Link href='https://www.linkedin.com/in/rafaelreisfranco/' target='_blank' className='text-center opacity-70 transition-all hover:opacity-100 '>By <strong>Rafael Reis Franco</strong></Link>
                </div>
            </Container>
        </div>
    )
}