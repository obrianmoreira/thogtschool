import Image from 'next/image';
import Head from 'next/head';
import React, {useState} from 'react';
import Link from 'next/link';
import logo from '../Navbar/images/logo.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
/* import Layout from '../layout';*/

const Navbar = () => {
    return (
        <nav className="fixed left-0 top-0 w-full ease-in duration-300 bg-slate-100 border-solid shadow-md px-[120px]">
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
                <div className='ml-[-110px] md:ml-[-80px]'>  
                    <a href="#hero">
                        <MyLogo
                            imageSrc={logo}
                            widthLogo={164}
                            heightLogo={52}
                        />
                    </a>
                </div>
                <div className='mr-[-100px] pt-3 md:mr-[-70px] lg:pt-0  text-dark'>
                    <MyNavbarLink
                        openN={false}
                    />
                </div>
            </div>
        </nav>
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

const MyNavbarLink = (props) => {
    const [nav, setNav] = useState(false);
    const [openNav, setOpenNava] = useState(props.openN);

    const handleNav = () => {
        setNav(!nav);
    }

    function MouseHover () {

        setOpenNava(!openNav);
    
    }

    function MouseOut () {

        setOpenNava(false);
    
    }

    // onMouseOver={MouseHover} onMouseOut={MouseOut}

    return (
        <div>
            <ul className='hidden lg:visible sm:flex space-x-6 text-[19px]'>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]'><Link href="#hero">Principal</Link></li>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]'><Link href='#metodo'>Metódo Thogt</Link></li>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]' ><Link href="#depo">Depoimentos</Link></li>
                <li className='pt-2 hover:rounded hover:border-solid hover:text-white hover:bg-blue-900 px-[10px]' ><Link href="#plans">Planos</Link></li>
                <li className='bg-blue-900 hover:bg-blue-700 rounded text-white border-solid px-4 py-2' ><a href="https://wa.me/+351968943125">Aula Free</a></li>
            </ul>
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ?  <AiOutlineClose size={20} color='black'/> : <AiOutlineMenu size={20} color='black'/>}
            </div>
            <div className={
                nav
                    ? 'sm:hidden absolute top-20 mt-3 left-0 right-0 bottom-0 flex justify-left items-left pl-8 w-full h-fit bg-blue-900 text-left ease-in duration-300'
                    : 'sm:hidden absolute top-20 mt-3 right-[-100%] right-0 bottom-0 flex justify-left items-left pl-8 w-full h-fit bg-blue-700 text-center ease-in duration-300'
                }>
                <ul className='text-white pt-4 pb-8'>
                    <li className='p-4 text-[27px]'><Link href="#hero" onClick={(e) => setNav(!nav)}>Principal</Link></li>
                    <li className='p-4 text-[27px]'><Link href="#metodo" onClick={(e) => setNav(!nav)}>Método Thogt</Link></li>
                    <li className='p-4 text-[27px]'><Link href="#depo" onClick={(e) => setNav(!nav)}>Depoimentos</Link></li>
                    <li className='p-4 text-[27px]'><Link href="#plans" onClick={(e) => setNav(!nav)}>Planos</Link></li>
                    <li className='bg-white hover:bg-blue-700 hover:text-white rounded text-black text-[24px] border-solid w-36 pl-4 py-2 ml-4 mt-4' ><a href="https://wa.me/+351968943125">Aula Free</a></li>
                </ul>
            </div>
            { openNav ? (  
                                    
                <div className='text-[16px] text-center font-light'>
                    <p className=''>Hello, World</p>   
                </div>
                
            ) : (
            
                <></>
            )}
        </div>
    )
    
    /*
    
        <div onClick={handleNav} className='block sm:hidden z-10'>
        {nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    </div>
    
    <div className={
        nav 
            ? 'sm:hidden absolute top-[113px] left-0 right-0 bottom-0 flex justify-center items-center w-full h-fit bg-amber-300 text-center ease-in duration-300'
            : 'sm:hidden absolute top-[113px] left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-fit bg-amber-300 text-center ease-in duration-300'
        }>
        <ul>
            <li className='p-4 text-[27px]'><Link href="/">Home</Link></li>
            <li className='p-4 text-[27px]'><Link href="/">Services</Link></li>
            <li className='p-4 text-[27px]'><Link href="/">Benefits</Link></li>
            <li className='p-4 text-[27px]'><Link href="/">Free Hour</Link></li>
        </ul>
    </div>
    
    */
}



export default Navbar