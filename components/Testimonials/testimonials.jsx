import {AiOutlineArrowDown} from 'react-icons/ai';
import { useState } from 'react';
import style from '../Testimonials/Testimonials.module.css'
import imgsrc from './images/luanathogt.png'
import Image from 'next/image'
import { MethodHeader, TwoColMethod } from '../Method/method';

function Testimonials () {

    const [open, setOpen] = useState(true);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [btnIcon, setBtnIcon] = useState(true);

    const handleOpen = () => {

        setOpen(!open)
        setBtnIcon(!btnIcon)

    }

    const handleOpenTwo = () => {

        setOpenTwo(!openTwo)

    }

    const handleOpenThree = () => {

        setOpenThree(!openThree)

    }


    return (

        <div className='pb-[20px] px-[40px] pt-10 pb-16 rounded-xl bg-blue-900'>
            <div className='grid lg:grid-cols-4 lg:gap-4 gap-[30px]'>
                <div className=' text-center lg:text-left mb-[-40px]'>
                    <h1 className='text-[30px] lg:text-[35px] text-white font-medium'>Depoimento de Nossos Alunos</h1> <br />
                    <p className='font-light text-white mb-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod aliquid illo quia culpa totam veritatis ab, kdiiddlldldl dododo.</p> <br />
                    <button className='border-2 border-white text-white hover:bg-blue-700 rounded px-[0px] py-[0px] invisible lg:px-[30px] lg:py-[10px] lg:visible'>Saiba Mais</button>
                </div>

                <div onClick={handleOpen} className="lg:pt-10">
                    <DepoCard
                        open={open}
                        cardAuthor="Luana Pinheiro Coura"
                        cardAuthorSub="Aluna Thogt"
                        cardText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo assumenda commodi aut, tenetur quas nihil nobis. Necessitatibus, quisquam sed recusandae explicabo saepe, repudiandae pariatur rem aperiam ducimus ratione impedit!"
                    />
                </div>

                <div onClick={handleOpenTwo} className="lg:pt-10">
                    <DepoCard
                        open={openTwo}
                        cardAuthor="Luana Pinheiro Coura"
                        cardAuthorSub="Aluna Thogt"
                        cardText="Loremssss ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo assumenda commodi aut, tenetur quas nihil nobis. Necessitatibus, quisquam sed recusandae explicabo saepe, repudiandae pariatur rem aperiam ducimus ratione impedit!"
                    />
                </div>
                
                
                <div onClick={handleOpenThree} className="lg:pt-10">
                    <DepoCard
                        open={openThree}
                        cardAuthor="Luana Pinheiro Coura"
                        cardAuthorSub="Aluna Thogt"
                        cardText="Loremssss ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo assumenda commodi aut, tenetur quas nihil nobis. Necessitatibus, quisquam sed recusandae explicabo saepe, repudiandae pariatur rem aperiam ducimus ratione impedit!"
                    />
                </div>

            </div>
        </div>

    )

    /**
        <div className='lg:px-[100px]'>
            <CarouselTestmo/>
        </div>
    
     */

}

const DepoCard = (props) => {

    
    return (

        <>
        
            <div className='grid lg:grid-cols-1 lg:gap-4 lg:shadow-md lg:mt-[0px] lg:border-t px-[0px] py-[25px] lg:py-10 rounded-xl hover:shadow-xl bg-white'>
                
                <div className='grid lg:grid-cols-1 lg:gap-4 text-center'>
                    <div>
                        <div className='flex justify-center item-center'>
                            <Image
                                className='rounded-full'
                                src={imgsrc}
                                width={120}
                                height={120}
                            />
                        </div>
                        <h3 className='text-[20px] font-medium'>{props.cardAuthor}</h3>
                        <p className='text-[16px] font-normal'>{props.cardAuthorSub}</p> <br />
                        { props.btnIcon ? (  
                                    
                            <div>
                                <button className='bg-blue-900 text-white px-3 rounded-full py-1.5'>X</button>
                            </div>
                            
                        ) : (
                        
                            <div>
                                <button className='bg-blue-900 text-white px-3 rounded-full py-1.5'>+</button>
                            </div>
                        )}
                        
                    </div>
                </div>
                
                { props.open ? (  
                                    
                    <div className='text-[16px] text-center font-light'>
                        <p className='px-4'>{props.cardText}</p>   
                    </div>
                    
                ) : (
                
                    <></>
                )}
                
            </div>

        </>

    )

}


const CarouselTestmo = () => {

    const [depo, setDepo] = useState(true);
    const [holdBtn, setHoldBtn] = useState(true);

    const [depoTwo, setDepoTwo] = useState(false);
    const [holdBtnTwo, setHoldBtnTwo] = useState(false);

    const [depoThree, setDepoThree] = useState(false);
    const [holdBtnThree, setHoldBtnThree] = useState(false);

    const handleDepo = () => {

        setDepo(!depo)
        setHoldBtn(!holdBtn)
        setHoldBtnTwo(false)
        setHoldBtnThree(false)

        if (holdBtn === true) {

            setDepoTwo(false)
            setDepoThree(false)

        } else {

            setDepoTwo(false)
            setDepoThree(false)

        }

    }

    const handleDepoTwo = () => {

        setDepoTwo(!depoTwo)
        setHoldBtnTwo(!holdBtnTwo)
        setHoldBtn(false)
        setHoldBtnThree(false)

        if (holdBtn === true) {

            setDepo(false)
            setDepoThree(false)

        } else {

            setDepo(false)
            setDepoThree(false)
            handleDepo()

        }

    }
    
    const handleDepoThree = () => {


        setDepoThree(!depoThree)
        setHoldBtnThree(!holdBtnThree)
        setHoldBtn(false)
        setHoldBtnTwo(false)

        if (holdBtn === true) {

            setDepo(false)
            setDepoTwo(false)

        } else {

            setDepo(false)
            setDepoTwo(false)
            handleDepo()

        }


    }
    
    return (

        <div className='grid lg:grid-cols-1 gap-6'>
        
            <div className='grid lg:grid-cols-2 gap-8'>

                <CardDepo
                    depotitle="Luana Pinheiro"
                    depoSubTitle="Gerente Empresa Thogt"
                    handlerDepo={(onClic) => {handleDepo}}
                    depoBodyText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolor saepe voluptate aut officia delectus eligendi facilis laboriosam assumenda sit fuga repellendus suscipit reiciendis, rem mollitia numquam. Laborum, quidem ipsum?"
                />

                <CardDepo
                    depotitle="Luana Pinheiro"
                    depoSubTitle="Gerente Empresa Thogt"
                    depoBodyText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolor saepe voluptate aut officia delectus eligendi facilis laboriosam assumenda sit fuga repellendus suscipit reiciendis, rem mollitia numquam. Laborum, quidem ipsum?"
                />

            </div>

        </div>
    )

}

const CardDepo = (props) => {

    const [depo, setDepo] = useState(true);

    return (

        <div className='bg-white lg:p-[20px]'>

            <div className='grid lg:grid-cols-2'>
                <div id={style.firstDepo} className='rounded-full bg-amber-50 w-[80px] h-[80px]'></div>
                <div className='lg:ml-[-140px] lg:mt-[20px]'>
                    <h1 className='text-[20px]'>{props.depotitle}</h1>
                    <p>{props.depoSubTitle}</p>
                </div>
            </div>

            <div>
                { props.handlerDepo ? (  
                                
                    <div>
                        <p className='lg:text-justify'>{props.depoBodyText}</p>
                    </div>

                        
                ) : (
                
                    <></>
                )}
            </div>
        </div>

    )

}   

const draft = () => {

    return (

        <>

<div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='mb-[30px]' onClick={handleDepo}>
                    { holdBtn ? (  
                                
                    <div className='bg-white rounded-md text-justify border-slate-100 shadow-md py-[20px] px-[15px] w-[350px] ml-[-15px] lg:p-[20px] lg:w-[420px]' onClick={handleDepo}>
                        <div className='grid grid-cols-2'>
                            <div id={style.firstDepo} className='rounded-full bg-amber-50 w-[100px] h-[100px]'></div>
                            <div className='mt-[20px] ml-[-45px] lg:mt-[15px] lg:ml-[-60px]'>
                                <h1 className='text-[21px] lg:text-[25px] text-blue-900]'>Luana Pinheiro Coura</h1>
                                <h3 className='text-[15px] lg:text-[18px]'>Responsavel Comercial Thogt</h3>
                            </div>
                        </div>
                    </div>
                                
                    ) : (
                        
                        <div className='lg:bg-slate-100 bg-white rounded-md mb-[0px] border-slate-100 hover:border-2 hover:border-white py-[20px] px-[10px] w-[350px] ml-[-15px] lg:p-[20px] lg:w-[420px]' onClick={handleDepo}>
                            <div className='grid grid-cols-2'>
                                <div id={style.firstDepo} className='rounded-full bg-amber-50 w-[100px] h-[100px]'></div>
                                <div className='mt-[20px] ml-[-45px] lg:mt-[15px] lg:ml-[-60px]'>
                                    <h1 className='text-[21px] lg:text-[25px] text-blue-900]'>Luana Pinheiro Coura</h1>
                                    <h3 className='text-[15px] lg:text-[18px]'>Responsavel Comercial Thogt</h3>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>

                <div>
                    { depo ? (  
                                
                                <div className='bg-white rounded-md mt-[-28px] px-[20px] w-[350px] ml-[-15px]'>
                                    <div className='border-3 lg:ml-[-100px] pt-[10px]'>
                                        <h1 className='text-[25px] lg:text-[30px] lg:text-left'>It was a great experience!</h1>
                                        <p className='text-justify'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, soluta, accusamus optio recusandae quaerat fugiat repellat iusto velit hic facilis adipisci saepe nostrum sapiente? Maiores inventore cupiditate itaque repellendus eveniet."</p><br />
                                    </div>
                                </div>  
                            
                    ) : (
                    
                        <></>
                    )}
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 mt-[20px]'>
                <div className='mb-[30px]' onClick={handleDepoTwo}>
                    { holdBtnTwo ? (  
                                
                        <div className='bg-white rounded-md text-justify border-slate-100 shadow-md py-[20px] px-[15px] w-[350px] ml-[-15px] lg:p-[20px] lg:w-[420px]' onClick={handleDepoTwo}>
                            <div className='grid grid-cols-2'>
                                <div id={style.firstDepo} className='rounded-full bg-amber-50 w-[100px] h-[100px]'></div>
                                <div className='mt-[20px] ml-[-45px] lg:mt-[15px] lg:ml-[-60px]'>
                                    <h1 className='text-[21px] lg:text-[25px] text-blue-900]'>Luana Pinheiro Coura</h1>
                                    <h3 className='text-[15px] lg:text-[18px]'>Responsavel Comercial Thogt</h3>
                                </div>
                            </div>
                        </div>
                                
                    ) : (
                        
                        <div className='mb-[0px] border-slate-100 hover:border-2 hover:border-white py-[20px] px-[10px] w-[350px] ml-[-15px] lg:p-[20px] lg:w-[420px]' onClick={handleDepoTwo}>
                            <div className='grid grid-cols-2'>
                                <div id={style.firstDepo} className='rounded-full bg-amber-50 w-[100px] h-[100px]'></div>
                                <div className='mt-[20px] ml-[-45px] lg:mt-[15px] lg:ml-[-60px]'>
                                    <h1 className='text-[21px] lg:text-[25px] text-blue-900]'>Luana Pinheiro Coura</h1>
                                    <h3 className='text-[15px] lg:text-[18px]'>Responsavel Comercial Thogt</h3>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>

                <div>
                    { depoTwo ? (  
                                
                        <div className='bg-white lg:bg-slate-100 rounded-md mt-[-28px] px-[20px] w-[350px] ml-[-15px]'>
                            <div className='border-3 lg:ml-[-100px] pt-[10px]'>
                                <h1 className='text-[25px] lg:text-[30px] lg:text-left'>It was a great experience!</h1>
                                <p className='text-justify'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, soluta, accusamus optio recusandae quaerat fugiat repellat iusto velit hic facilis adipisci saepe nostrum sapiente? Maiores inventore cupiditate itaque repellendus eveniet."</p><br />
                            </div>
                        </div>   
                            
                    ) : (
                    
                        <></>
                    )}
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 mt-[20px]'>
                <div className='mb-[30px]' onClick={handleDepoThree}>
                    { holdBtnThree ? (  
                                
                        <div className='bg-white rounded-md text-justify border-slate-100 shadow-md py-[20px] px-[15px] w-[350px] ml-[-15px] lg:p-[20px] lg:w-[420px]' onClick={handleDepoThree}>
                            <div className='grid grid-cols-2'>
                                <div id={style.firstDepo} className='rounded-full bg-amber-50 w-[100px] h-[100px]'></div>
                                <div className='mt-[20px] ml-[-45px] lg:mt-[15px] lg:ml-[-60px]'>
                                    <h1 className='text-[21px] lg:text-[25px] text-blue-900]'>Luana Pinheiro Coura</h1>
                                    <h3 className='text-[15px] lg:text-[18px]'>Responsavel Comercial Thogt</h3>
                                </div>
                            </div>
                        </div>
                                
                    ) : (
                        
                        <div className='mb-[0px] border-slate-100 hover:border-2 hover:border-white py-[20px] px-[10px] w-[350px] ml-[-15px] lg:p-[20px] lg:w-[420px]' onClick={handleDepoThree}>
                            <div className='grid grid-cols-2'>
                                <div id={style.firstDepo} className='rounded-full bg-amber-50 w-[100px] h-[100px]'></div>
                                <div className='mt-[20px] ml-[-45px] lg:mt-[15px] lg:ml-[-60px]'>
                                    <h1 className='text-[21px] lg:text-[25px] text-blue-900]'>Luana Pinheiro Coura</h1>
                                    <h3 className='text-[15px] lg:text-[18px]'>Responsavel Comercial Thogt</h3>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>

                <div>
                    { depoThree ? (  
                                
                        <div className='bg-white lg:bg-slate-100 rounded-md mt-[-28px] px-[20px] w-[350px] ml-[-15px]'>
                            <div className='border-3 lg:ml-[-100px] pt-[10px]'>
                                <h1 className='text-[25px] lg:text-[30px] lg:text-left'>It was a great experience!</h1>
                                <p className='text-justify'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, soluta, accusamus optio recusandae quaerat fugiat repellat iusto velit hic facilis adipisci saepe nostrum sapiente? Maiores inventore cupiditate itaque repellendus eveniet."</p><br />
                            </div>
                        </div>   
                            
                    ) : (
                    
                        <></>
                    )}
                </div>
            </div>
        
        </>

    )

}

export default Testimonials;
