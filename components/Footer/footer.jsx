import React from 'react';
import Link from 'next/link';
import logo from '../Navbar/images/logo.png';
import Image from 'next/image';


const Footer = () => {

    return (

        <div className=''>
            <div className='grid grid-cols-1 pt-6
                    md:grid-cols-1 
                    text-black text-center
                    '>
                <div>

                    <div className='lg:ml-[-20px] flex justify-center item-center'>
                        
                        <MyLogo
                            imageSrc={logo}
                            widthLogo={164}
                            heightLogo={52}
                        />      
                    
                    </div> 

                    <p className='font-light lgpx-0 px-20'>Todos os direitos reservados para Thogt Scool. Site criado por Brian Moreira. </p>
                    
                </div>  
            </div>
        </div>

    )

}

export const MyLogo = ({imageSrc, widthLogo, heightLogo}) => {
    return (
        <Image
            src={imageSrc}
            width={widthLogo}
            height={heightLogo}
            alt="logo da empresa Thogt School"
        />
    )
}

export const FooterFirst = ({bellowLogoParag}) => {
    return (
        <div className='text-left'>
            
            <h2 className='font-light'>{bellowLogoParag}</h2>
        </div> 
    )

    /*
    
    <MyLogo
                imageSrc={logo}
                widthLogo={150}
                heightLogo={100}
            />
    
    */
}

export const FooterInfo = ({footerTitle, footerInfoOne, footerInfoTwo, footerInfoThree}) => {

    return (

        <div>
           <h2 className='text-[30px] mb-3 text-blue-900'>{footerTitle}</h2>
           <div className='underline font-light'>
                <p className='lg:mb-2'>{footerInfoOne}</p>
                <p className='lg:mb-2'>{footerInfoTwo}</p>
                <p className=''>{footerInfoThree}</p>
           </div>
        </div>

    )

}

export const FooterInfoLink = ({footerTitle, footerInfoOne, footerInfoTwo, footerInfoThree}) => {

    return (

        <div>
           <h2 className='text-[30px] mb-3 text-blue-900'>{footerTitle}</h2>
           <div className='font-light'>
                <p><Link href="" className='hover:text-blue-900'>{footerInfoOne}</Link></p>
                <p><Link href="" className='hover:text-blue-900'>{footerInfoTwo}</Link></p>
                <p><Link href="" className='hover:text-blue-900'>{footerInfoThree}</Link></p>
           </div>
        </div>

    )

}

export default Footer;
