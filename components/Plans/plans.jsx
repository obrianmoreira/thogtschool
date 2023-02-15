import React, { useState, useEffect } from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';
import { MethodHeader } from '../Method/method';
import ReactWhatsappButton from "react-whatsapp-button";

function Plans() {

    return (

        <div className="h-auto pt-[60px] pb-[30px] lg:pt-[120px] lg:pb-[120px]">
            <div className='lg:text-center text-center'>
                <h1 className='text-[39px] lg:text-[60px] text-[30px] text-blue-900 font-medium'>Planos de Estudos</h1>
                <p className='font-light pt-2 text-black'>Encontre abaixo o plano de estudos para você que melhor se encaixe em sua rotina e deixe a Thogt School fazer o resto.</p> <br />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-4 text-center lg:text-left">

                <div>
                    <PriceCard
                        cardStyle="shadow-sm border border-slate-200 rounded-xl hover:shadow-xl"
                        cardHeadStyle="bg-white text-blue-900 px-10 pt-10 border-t border-gray-100 rounded-lg"
                        cardBodyStyle="bg-white grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-blue-900 rounded-lg"
                        h3TextPrice="Grupo"
                        h1TextPrice="$85"
                        pTextPrice="Estude 3 Vezes na Semana Com Professor Particular."
                        oL1TextPrice="Aulas de 30 minutos personalizadas"
                        oL2TextPrice="O mesmo professor em todas as aulas"
                        oL3TextPrice="Aulas práticas e intensivas"
                        oL4TextPrice="Exercícios para casa em dias sem aula"
                    />
                </div>

                <div>
                    <PriceCalculator
                    
                        cardStyle="rounded-xl hover:shadow-lg hover:shadow-gray-500"
                        cardHeadStyle="bg-blue-900 text-white px-10 pt-10 rounded-t-lg"
                        cardBodyStyle="bg-blue-900 grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-white rounded-b-xl"
                        h3TextPrice="Plano Personalizado"
                        pTextPrice="Valor acima com desconto para maior frequência e duração de aula."
                    
                    />
                </div>

                <div>
                    <PriceCard
                        cardStyle="shadow-sm border border-slate-200 rounded-xl hover:shadow-xl"
                        cardHeadStyle="bg-white text-blue-900 px-10 pt-10 border-t border-gray-100 rounded-t-lg"
                        cardBodyStyle="grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-blue-900 rounded-b-xl"
                        h3TextPrice="Intensivo"
                        h1TextPrice="€130"
                        pTextPrice="Aulas 5 dias na semana com professor particular."
                        oL1TextPrice="Aulas de 30 minutos de segunda a sexta"
                        oL2TextPrice="O mesmo professor em todas as aulas"
                        oL3TextPrice="Aulas práticas com atividades intensivas"
                        oL4TextPrice="Exercícios para casa todos os dias"
                    />
                </div>
                

            </div>

        </div>

    )

}

// The price card code for the other plans already with the difined price
const PriceCard = (props) => {

    return (

        <div className={props.cardStyle}>
            <div className={props.cardHeadStyle}>
                <h3 className="text-[20px] ">{props.h3TextPrice}</h3>
            </div>
            <div className={props.cardBodyStyle}>
                <div className='grid grid-cols-1'>
                    <div className=''>
                        <h1 className="text-[60px]">{props.h1TextPrice}<small className='text-[16px]'>/Mensal</small></h1>
                        <p className='text-[14px]'>{props.pTextPrice}</p>
                    </div>
                </div>
                <ul className='grid grid-cols-1 gap-4'>
                    <ol>✓ {props.oL1TextPrice}</ol>
                    <ol>✓ {props.oL2TextPrice}</ol>
                    <ol>✓ {props.oL3TextPrice}</ol>
                    <ol>✓ {props.oL4TextPrice}</ol>
                </ul>
                <div>
                    <a href="https://wa.me/+351968943125"><button className='bg-blue-900 text-white border border-white rounded w-full py-[5px] hover:bg-blue-700'> Saiba Mais</button></a>
                </div>
            </div>
        </div>

    )   

}

const PriceCalculator = (props) => {

    // Deals with the totalPrice area of the card
    const [totalPrice, setTotalPrice] = useState(0);

    // Deals with the totalDiscount area of the card
    const [totalDiscount, setTotalDiscount] = useState('€' + `${0}` + ',00 de Desconto')

    // Deals with the amount of hours for each class
    const [hoursOption, setHoursOptions] = useState(0)

    // Deals with the amount of days for each class
    const [daysOptions, setDaysOptions] = useState(0)

    // Deals with the open and close of the dropdown  hour menu
    const [openHourList, setOpenHourList] = useState(false);

    // Deals with the open and close of the dropdown day menu
    const [openDaysList, setOpenDaysList] = useState(false);

    // Deals with the name of the lead
    const [nameLead, setNameLead] = useState('');

    // Deals with the name of the lead
    const [surnameLead, setsurnameLead] = useState('');

    // handleOpenHourList function: open or closes the dropdown menu
    const handleOpenHourList = () => {

        setOpenHourList(!openHourList)

    }

    // handleOpenDaysList function: open or closes the dropdown menu
    const handleOpenDaysList = () => {

        setOpenDaysList(!openDaysList)

    }

    // Array of hours: the student can choose the amount of time of his classes
    const hoursArray = [
        {
            text: `${30} minutos`
        },

        {
            text: `${60} minutos`
        },

        {
            text: `${90} minutos`
        }
    ]

    // handleHour function: change the state of the input with the current hour chosen and closes the dropdown menu
    const handleHour = (hours) => {

        setHoursOptions(hours);
        handleOpenHourList(!openHourList);

    }

    // Array of days: the student can choose the amount of days of his classes
    const daysArray = [
        {
            text: `${2} dias`
        },

        {
            text: `${3} dias`
        },

        {
            text: `${5} dias`
        }
    ]

    // handleDay function: change the state of the input with the current day chosen and closes the dropdown menu
    const handleDays = (days) => {

        setDaysOptions(days);
        handleOpenDaysList(!openDaysList);

    }

    // handleMath function: handles with the math of the card to give the price of the personalized plan
    const handleMath = () => {

        let hourPrice = 10;

        let hours = parseInt(hoursOption)
        
        let days = parseInt(daysOptions)

        let math = ((hours * days) * 4 / 60) * hourPrice
        
        if (math === 200){
            let discount = ((math*10)/100)
            setNameLead()
            setTotalDiscount('€' + `${discount}` + ',00 de Desconto');
            setTotalPrice(math - discount);
        } else if (math === 300) {
            let discount = ((math*7)/100);
            setTotalDiscount('€' + `${discount}` + ',00 de Desconto');
            setTotalPrice(math - discount);
        } else {
            setTotalDiscount('Sem Desconto')
            setTotalPrice(math)
        }

    }

    // WhatsApp number to send the personalized plan to our sales team
    const whatsAppNumber = '+31687721270'

    // WhatsApp text to send the personalized plan to our sales team undertands the sale oportunity
    const whatsAppText = `Olá, ${nameLead} ${surnameLead}. Confirmamos que você gostaria de aulas ${daysOptions} vezes na semana com duração de ${hoursOption} minutos pelo preço mensal de €${totalPrice},00 e ${totalDiscount}.`;

    return (

        <div className={props.cardStyle}>
            <div className={props.cardHeadStyle}>
                <h3 className="text-[20px] ">{props.h3TextPrice}</h3>
            </div>
            <div className={props.cardBodyStyle}>
                <div className='grid grid-cols-1'>
                    <div className=''>
                        <h1 className="text-[60px]">{totalPrice}<small className='text-[16px]'>/Mensal</small></h1>
                        <p className='text-[14px]' >{totalDiscount}</p>
                    </div>
                </div>
                <ul className='grid grid-cols-1 gap-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label  className='text-left'
                            htmlFor="name">Nome</label>
                            <input className='rounded-md w-full pl-2 mt-2 text-black' id='name' value={nameLead} placeholder={'Ex: Joao'} onChange={e => setNameLead(e.target.value)}/>
                        </div>
                        <div>
                            <label className='text-left' htmlFor="secondName">Segundo Nome</label>
                            <input className='rounded-md w-full pl-2 mt-2 text-black' id='secondName' value={surnameLead} placeholder={'Ex: Manuel'} onChange={e => setsurnameLead(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label className='text-left' htmlFor="hours">Escolha Duração de Aula</label>
                        <input className='rounded-md pl-4 w-full mt-2' onClick={handleOpenHourList} id='hours' placeholder={hoursOption} />

                        { openHourList ? 

                            <div className='bg-white grid grid-cols-1 mt-2 rounded-md w-ful pt-[5px]'>

                                {hoursArray.map((hours) => {

                                    return (
                                        <li className='text-black hover:bg-blue-400 border-t-2 text-left pl-4' onClick={() => handleHour(hours.text)}>{hours.text}</li>
                                    )

                                })}
                                
                            </div>
            
                        : 
                            (
                                
                                <></>

                            )
                        
                        }
                    </div>
                    <div>
                        <label className='text-left' htmlFor="days">Escolha os Dias de Aulas</label>
                        <input className='rounded-md pl-4 w-full mt-2' onClick={handleOpenDaysList} id='days' placeholder={daysOptions}/>
                        { openDaysList ? 

                            <div className='bg-white grid grid-cols-1 mt-2 rounded-md w-ful pt-[5px]'>

                                {daysArray.map((days) => {

                                    return (
                                        <li className='text-black hover:bg-blue-400 border-t-2 text-left pl-4' onClick={() => handleDays(days.text)}>{days.text}</li>
                                    )

                                })}
                                
                            </div>
            
                        : 
                            (
                                
                                <></>

                            )
                        
                        }

                    </div>
                </ul>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <a ><button className='bg-blue-900 text-white border border-white rounded w-full py-[5px] hover:bg-blue-700' onClick={handleMath}>Calcular Plano</button></a>
                    </div>
                    <div>
                        <a href={`https://wa.me/${whatsAppNumber}?text=${whatsAppText}`} ><button className='bg-blue-900 text-white border border-white rounded w-full py-[5px] hover:bg-blue-700 disabled:opacity-25 disabled:hover:bg-blue-900' disabled={totalPrice === 0}>Gerar Proposta</button></a>
                    </div>
                </div>
            </div>
        </div>

    )   

    /**

     */

}

export default Plans;