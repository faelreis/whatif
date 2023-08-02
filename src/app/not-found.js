import { Container } from "./components/Container";
import Image from 'next/image'
import Link from 'next/link'
import errorImage from './assets/image-not-found.png'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata = {
    title: 'Página de error | Marvel',
    description: 'Página não encontrada!',
}

export default function NotFound(){
    return(
        <>
            <Header/>
            <div className='bg-black h-screen w-screen'>
                <Container>
                    <div className='flex items-center justify-center flex-col w-full h-screen'>
                        <h1 className='text-5xl font-bold text-center'>Whoops, essa página sumiu.</h1>
                        <p className='text-center font-normal w-full my-8 max-w-xl'>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.</p>
                        <Link href="/" className='mb-10 px-10 py-5 bg-red900 text-white rounded-md border-red900 border-[1px] duration-300 cursor-pointer transition-all ease-in-out hover:bg-transparent'>Voltar</Link>
                        <Image
                            src={errorImage}
                            alt='Error 404'
                        />
                    </div>
                </Container>
            </div>  
        </>
  
    )
}