import { CardCharacter } from "./CardCharacter";
import { Container } from "./Container";

export function SectionCharacters(){
    return(
        <div className='py-20'>
            <Container>
                <div className='w-full flex items-center justify-center flex-col'>
                    <div className='flex items-start justify-start mb-12'>
                        <div className='flex items-center justify-center gap-3 flex-col'>
                            <div className='w-16 h-[1px] bg-red900'></div>
                            <strong className='text-2xl text-center'>Personagens Marvel</strong>
                        </div>
                    </div>
                    <div className='grid gap-x-6 gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-6 xl:gap-y-16'>
                        <CardCharacter/>
                        <CardCharacter/>
                        <CardCharacter/>
                        <CardCharacter/>
                        <CardCharacter/>
                        <CardCharacter/>
                        <CardCharacter/>
                    </div>
                </div>
            </Container>
        </div>
    )
}