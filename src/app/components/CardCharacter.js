import Image from 'next/image'
import Link from 'next/link'
import imgCharacter from '../assets/character.jpg'



export function CardCharacter({name, imageCharacter, slug}){
    return(
        <Link href={`character/${slug}`} className='w-full max-w-[283px] transition-all hover:opacity-80 ease-in-out duration-300'>
            <div className='h-[368px] max-w-[283px] w-full rounded-md overflow-hidden max-[330px]:h-[300px] max-[270px]:h-[230px] max-[230px]:h-[180px] max-[185px]:h-[100px]'>
                <Image src={imageCharacter} alt='Character image' className='transition-all hover:scale-110 ease-in-out duration-300' width='280' height='372'/>
            </div>
            <div className='flex justify-between mt-3 max-[250px]:flex-col'>
                <div>
                    <h3 className='text-white font-bold text-lg mb-1'>{name}</h3>
                    <p className='text-gray-500 text-sm'>Marvel Studios</p>
                </div>
                <div>
                    <span className='text-gray-500 text-sm'>What if</span>        
                </div>
            </div>
        </Link>
    )
}