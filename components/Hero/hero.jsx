import react, { useEffect, useState } from 'react';
import imgsrc from './images/booklearn.png'
import Image from 'next/image';
import style from '../Hero/Hero.module.css';

function Hero (props) {

    return (

        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className='
                lg:px-0 lg:text-left text-center
                md:pt-36 md:px-32
                pt-32'>
                <TwoColHero
                    twoColHeroTitle="Aprenda Inglês Praticando com Professor"
                    twoColHeroTitleSize='text-blue-900 font-medium text-[40px] mb-[20px] lg:text-[80px]'
                    twoColHeroParag="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt itaque neque similique."
                    twoColHeroParagSize='lg:text-[22px] lg:pb-8 lg:pr-32 text-blue-900 font-[325] mb-[20px] lg:mb-[0px]'
                    buttonBollean={true}
                />
            </div>
            <div className='lg:pt-10 lg:w-[800px] lg:h-[755px]'>
                <Image
                    src={imgsrc}
                    layout="responsive"
                />
            </div>
        </div>

    )   

}

export const ImageSrc = () => {

    

}

export const TwoColHero = (props) => {

    const [button] = useState(props.buttonBollean);

    return (

        <div className=''>
            <div className=''>
                <h1 className={props.twoColHeroTitleSize}>{props.twoColHeroTitle}</h1>
                <p className={props.twoColHeroParagSize}>
                    {props.twoColHeroParag}
                </p>
                { button ? (  
                        
                    <button className='px-10 py-3 rounded bg-white border-2 border-blue-900 hover:bg-blue-500 hover:text-white text-blue-900'><a>Saiba Mais</a></button>
                
                ) : (
                
                    <></>
                )}
            </div>
        </div>

    )

}

export default Hero;