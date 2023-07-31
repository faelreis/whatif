import Image from 'next/image'
import thumbTrailer from '../assets/thumb-video.png'
import playIcon from '../assets/play.svg'

export function TrailerVideo(){
    return(
        <div className='mt-[390px] mb-12 max-w-[312px]'>
            <span className='text-white text-base'>ASSISTA AO TRAILER</span>
            <div className='relative flex justify-center mt-4'>
            <div className='absolute top-1/2 left-1/2 rounded-full bg-[#13131330] w-8 h-8 flex justify-center z-10'>
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