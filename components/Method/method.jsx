import style from '../Method/Method.module.css'
import { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TfiWrite} from 'react-icons/tfi'


function Method(props) {

    return (

        <div className='
            pb-[50px] text-center
            lg:text-left'>
            <div>
                <SecondOptionMethod
                
                    secondTitle="The Thogt Method"
                    secondPrag="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sapiente atque accusamus rerum, inventore adipisci voluptatibus? Consectetur eaque rerum officia eius error voluptatum vitae nemo id unde? Doloribus, est voluptatem."
                    secondPartParag="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sapiente atque accusamus rerum, inventore adipisci voluptatibus? Consectetur eaque rerum officia eius error voluptatum vitae nemo id unde? Doloribus, est voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                
                />
            </div>
            
            
        </div>

    )

    /*
    
        
        <div>
            <MethodHeader
                methodTitle="Método Thogt"
                methodSubTitleh2="Luana Pinheiro Coura"
                methodSubTitleh3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste consequatur sunt temporibus."
            />
        </div>
    
        <div>
            <TwoColMethod/>
        </div>
    
    */

}

export const SecondOptionMethod = (props) => {

    return (

        <>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-0 lg:gap-10'>
                <div className='text-left pt-10 text-[20px] font-light text-slate-950 lg:pr-24'>
                    <h1 className='lg:text-[0px] text-blue-900 font-medium lg:invisible visible text-[37px] text-center'>{props.secondTitle}</h1>
                    <p className='mt-0 text-justify lg:text-left'>{props.secondPrag}</p> <br />
                    <p className='text-justify lg:text-left'>{props.secondPartParag}</p>
                </div>
                <div className='mt-[-20px] text-right'>
                    <h1 className='lg:text-[140px] text-blue-900 font-medium invisible lg:visible'>{props.secondTitle}</h1>
                </div>
            </div>

        </>

    )

}

export default Method;