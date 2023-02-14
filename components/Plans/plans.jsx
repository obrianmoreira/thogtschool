import React, { useState } from 'react';
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

                <div>
                    <PriceCalculator
                    
                        cardStyle="rounded-xl hover:shadow-lg hover:shadow-gray-500"
                        cardHeadStyle="bg-blue-900 text-white px-10 pt-10 rounded-t-lg"
                        cardBodyStyle="bg-blue-900 grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-white rounded-b-xl"
                        h3TextPrice="Plano Personalizado"
                        pTextPrice="Valor acima com desconto para maior frequência e duração de aula."
                    
                    />
                </div>
                

            </div>

        </div>

    )

    /*
    
        <div>     
            <PriceCard
                cardStyle="rounded-xl hover:shadow-lg hover:shadow-gray-500"
                cardHeadStyle="bg-blue-900 text-white px-10 pt-10 rounded-t-lg"
                cardBodyStyle="bg-blue-900 grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-white rounded-b-xl"
                h3TextPrice="Regular"
                h1TextPrice="$50"
                pTextPrice="Aulas 3 vezes na Semana Em Grupo."
                oL1TextPrice="1 hora de aula com grupo de até 4 pessoas"
                oL2TextPrice="Aulas para quem tem medo de falar inglês"
                oL3TextPrice="Exercícios intensivos desde o básico"
                oL4TextPrice="Atividades para casa em dias sem aula"
            />
        </div>
    
    
    */

}

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

    const [hoursOption, setHoursOptions] = useState(0)
    const [daysOptions, setDaysOptions] = useState(0)
    const [openHourList, setOpenHourList] = useState(false);
    const [openDaysList, setOpenDaysList] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState('€' + `${0}` + ',00 de Desconto')

    const whatsAppNumber = '+31687721270'
    const whatsAppText = `Olá, gostaria de aulas ${daysOptions} vezes na semana com duração de ${hoursOption} minutos pelo preço mensal de €${totalPrice},00 e ${totalDiscount}.`;

    let hourOne = 30;
    let hourTwo = 60;
    let hourThree = 90;

    let daysOne = 2;
    let daysTwo = 3;
    let daysThree = 5;

    const handleOpenHourList = () => {

        setOpenHourList(!openHourList)

    }

    const handleOpenDaysList = () => {

        setOpenDaysList(!openDaysList)


    }

    const handleMath = () => {

        let math = ((hoursOption * daysOptions) * 4 / 60) * 10
        
        let discount = 0;

        if (math === 200){
            let discount = ((math*10)/100)
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
                    <div>
                        <label htmlFor="hours">Escola Duracao de Aula</label>
                        <input className='rounded-md pl-4 w-full mt-2' onClick={handleOpenHourList} id='hours' placeholder={`${hoursOption}` + ' minutos'}/>
                        { openHourList ?
                        
                            <div className='bg-white grid grid-cols-1 mt-2 rounded-md w-full'>
                                <button className='text-black hover:bg-blue-400 border-b-2 text-left pl-4' onClick={(e) => setHoursOptions(hourOne)}>{`${hourOne}` + ' minutos'}</button>
                                <button className='text-black hover:bg-blue-400 border-b-2 text-left pl-4' onClick={(e) => setHoursOptions(hourTwo)}>{`${hourTwo}` + ' minutos'}</button>
                                <button className='text-black hover:bg-blue-400 text-left pl-4' onClick={(e) => setHoursOptions(hourThree)}>{`${hourThree}` + ' minutos'}</button>
                            </div>
                            
                        : 
                        
                            <></>    

                        }
                    </div>
                    <div>
                        <label htmlFor="days">Escola Dias de Aulas</label>
                        <input className='rounded-md pl-4 w-full mt-2' onClick={handleOpenDaysList} id='days' placeholder={daysOptions}/>
                        { openDaysList ?
                        
                            <div className='bg-white grid grid-cols-1 mt-2 rounded-md w-full'>
                                <button className='text-black hover:bg-blue-400 border-b-2 text-left pl-4' onClick={(e) => setDaysOptions(daysOne)}>{daysOne}</button>
                                <button className='text-black hover:bg-blue-400 border-b-2 text-left pl-4' onClick={(e) => setDaysOptions(daysTwo)}>{daysTwo}</button>
                                <button className='text-black hover:bg-blue-400 text-left pl-4' onClick={(e) => setDaysOptions(daysThree)}>{daysThree}</button>
                            </div>
                            
                        : 
                        
                            <></>    

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

const QuizApp = () => {

    const [finalResult, setFinalResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of America?",
          options: [
            { id: 0, text: "New York City", isCorrect: false },
            { id: 1, text: "Boston", isCorrect: false },
            { id: 2, text: "Santa Fe", isCorrect: false },
            { id: 3, text: "Washington DC", isCorrect: true },
          ],
        },
        {
          text: "What year was the Constitution of America written?",
          options: [
            { id: 0, text: "1787", isCorrect: true },
            { id: 1, text: "1776", isCorrect: false },
            { id: 2, text: "1774", isCorrect: false },
            { id: 3, text: "1826", isCorrect: false },
          ],
        },
        {
          text: "Who was the second president of the US?",
          options: [
            { id: 0, text: "John Adams", isCorrect: true },
            { id: 1, text: "Paul Revere", isCorrect: false },
            { id: 2, text: "Thomas Jefferson", isCorrect: false },
            { id: 3, text: "Benjamin Franklin", isCorrect: false },
          ],
        },
        {
          text: "What is the largest state in the US?",
          options: [
            { id: 0, text: "California", isCorrect: false },
            { id: 1, text: "Alaska", isCorrect: true },
            { id: 2, text: "Texas", isCorrect: false },
            { id: 3, text: "Montana", isCorrect: false },
          ],
        },
        {
          text: "Which of the following countries DO NOT border the US?",
          options: [
            { id: 0, text: "Canada", isCorrect: false },
            { id: 1, text: "Russia", isCorrect: true },
            { id: 2, text: "Cuba", isCorrect: true },
            { id: 3, text: "Mexico", isCorrect: false },
          ],
        },
      ];

    const optionClicked = (isCorrect) => {

        if (isCorrect) {

            setScore(score + 1);

        }

        if (currentQuestion + 1 < questions.length) {

            setCurrentQuestion(currentQuestion + 1);

        } else {

            setFinalResult(true)

        }

    }

    const restartQuiz = () => {

        setFinalResult(false);
        setCurrentQuestion(0);
        setScore(0);

    }

    return (

        <div>

            <h1>Current Score: {score}</h1>
            
            { finalResult ? 

                <div>
                    <h1>Resultado Final</h1>
                    <p>{score} de {questions.length} - ({(score / questions.length) * 100}%)</p>
                    <button onClick={restartQuiz}>Refazer</button>
                </div> 
            
            : 
                (
                    <div className='grid grid-cols-1 px-40 text-center'>
                        <div className='bg-slate-100 '>
                            <h1>Pergunta : {currentQuestion + 1} de {questions.length}</h1>
                        </div>
                        <div>
                            <ul>
                                Aqui questions = the questions inside the array
                                currentQuestion = the number of the question of the quiz that is changing dynamicly when the optionClicker method is fire
                                {questions[currentQuestion].options.map((option) => {

                                    return (

                                        // Here the optionClicked method is accessing the option correct answer as an object, because the array we have created is the array of objects, isCorrect is a variable that stores true or false
                                        <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>{option.text}</li>

                                    )

                                })}
                            </ul>
                            <ul>
                                {questions.map((option) => {
                                    return (
                                        <li key={option.id}>{option.text}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div> 

                )
            
            }

        </div>

    )

}

export default Plans;