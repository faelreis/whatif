import { Container } from "./Container";
import Image from 'next/image'
import Link from 'next/link'
import imgCharacter from '../assets/character.jpg'

export function AboutCharacter(){
    return(
        <div className='bg-details_img bg-cover bg-center pt-[105px] min-[0px]:pt-[105px] min-[0px]:pb-10 min-[348px]:h-[960px] min-[351px]:h-[940px] min-[370px]:h-[947px] min-[390px]:h-[977px] min-[410px]:h-[997px]  min-[445px]:h-[1010px] min-[460px]:h-[1096px] min-[460px]:h-[1040px] min-[486px]:h-[1020px] min-[505px]:h-[1040px] min-[525px]:h-[1070px] min-[528px]:h-[1070px] min-[542px]:h-[1030px] min-[562px]:h-[1006px] lg:h-[740px]'>
            <Container>
                <div className='w-full flex items-center justify-between flex-col max-[348px]:border-none lg:flex-row'>
                    <div>
                        <Image
                            src={imgCharacter}
                            alt='Imagem do personagem'
                            className='rounded-xl'
                        />
                    </div>
                    <div className='w-full max-w-[520px] mt-4 flex items-center justify-center flex-col min-[348px]:mb-20 min-[542px]:mb-10 lg:items-start lg:gap-3 xl:mr-10'>
                        <span className='text-gray400 font-light text-center lg:text-left'>A História</span>
                        <div className='w-12 h-[1px] bg-red900'></div>
                        <h2 className='text-center text-3xl font-bold my-4 lg:text-left'>T’Challa Senhor das Estrelas</h2>
                        <p className='text-gray500 font-normal text-center lg:text-left'>Nulla eu sapien ante. Praesent convallis posuere rhoncus. Aliquam aliquet ut odio ac lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Aenean facilisis diam quis nunc tempus, in placerat sem tincidunt. Sed id aliquet neque, quis varius ligula</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}