import React from 'react';
import Link from 'next/link';
import logo from '../Navbar/images/logo.png';
import Image from 'next/image';


const Footer = () => {

    return (

        <div className='lg:py-[50px] lg:mt-[0px] pb-[60px] pt-[5px]'>
            <div className='grid grid-cols-1
                    md:grid-cols-4 lg:gap-[200px]
                    mt-[50px]
                    text-black text-center
                    '>
                <div>

                    <div className='lg:ml-[-20px] ml-[80px]'>
                        
                        <MyLogo
                            imageSrc={logo}
                            widthLogo={164}
                            heightLogo={52}
                        />      
                    
                    </div> 

                    <p className='font-light lg:text-left'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi ut cupiditate ratione autem. </p>
                    
                </div>  
                <div className='pt-6'>
                    <FooterInfoLink
                        footerTitle="Link"
                        footerInfoOne='services'
                        footerInfoTwo='Benefits'
                        footerInfoThree='Promotion'
                    />
                </div>
                <div className='pt-6'>
                    <FooterInfo
                        footerTitle='Contacts'
                        footerInfoOne='(+31)68786-0673'
                        footerInfoTwo='info@happycleaning.com'
                    />
                </div>
                <div className='pt-6'>
                    <FooterInfo
                        footerTitle='About'
                        footerInfoOne='History'
                        footerInfoTwo='Values'
                        footerInfoThree='Mission'
                    />
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
           <h2 className='text-[30px] mb-3'>{footerTitle}</h2>
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
           <h2 className='text-[30px] mb-3'>{footerTitle}</h2>
           <div className='font-light'>
                <p><Link href="">{footerInfoOne}</Link></p>
                <p><Link href="">{footerInfoTwo}</Link></p>
                <p><Link href="">{footerInfoThree}</Link></p>
           </div>
        </div>

    )

}

export default Footer;
