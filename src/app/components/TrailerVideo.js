import Image from 'next/image'
import thumbTrailer from '../assets/thumb-video.png'
import playIcon from '../assets/play.svg'

export function TrailerVideo(){
    return(
        <div className='mt-[369px] mb-12 max-w-[312px] w-full max-lg:max-w-[80rem] max-lg:mt-[3rem] max-lg:flex flex-col max-[403px]:max-w-[270px]'>
            <span className='text-white text-base max-lg: text-center'>ASSISTA AO TRAILER</span>
            <div className='relative flex justify-center mt-4'>
            <div className='cursor-pointer absolute top-[40%] rounded-full bg-[#13131330] w-8 h-8 flex justify-center z-10 backdrop-blur-sm transition-all ease-linear hover:scale-125'>
                <Image
                    src={playIcon}
                    alt='Botão player'
                />
            </div>
            <div>
            <Image
                    src={thumbTrailer}
                    alt='Trailer vídeo'
                />
            </div>
            </div>
        </div>
    )
}