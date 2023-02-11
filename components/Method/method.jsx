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
                    secondPrag="Estudar inglês sem apoio de um professor pode ser complicado e confuso, além disso, aulas em grupo podem ser estressantes e nos deixar encabulados. Foi pensando nisso que a Thogt School surgiu para dar um atendimento individualizado para você que precisa aprender inglês. "
                    secondPartParag="Já imaginou ter um professor de inglês individual para você e que ensine com base na sua necessidade. Esta é a Thogt School, escola onde todo aluno tem um professor particular. Aulas práticas e sem enrolação com professores capacitados para explicar exatamente o que precisa para alcançar seus objetivos."
                
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
                <div className='text-left pt-8 text-[20px] font-light text-slate-950 lg:pr-20'>
                    <h1 className='lg:text-[0px] text-blue-900 font-medium lg:invisible visible text-[37px] text-center'>{props.secondTitle}</h1>
                    <p className='mt-0 text-justify lg:text-left text-black pt-10 lg:pt-0'>{props.secondPrag}</p> <br />
                    <p className='text-justify lg:text-left text-black'>{props.secondPartParag}</p>
                </div>
                <div className='mt-[-20px] text-right'>
                    <h1 className='lg:text-[140px] text-blue-900 font-medium invisible lg:visible'>{props.secondTitle}</h1>
                </div>
            </div>

        </>

    )

}

export default Method;