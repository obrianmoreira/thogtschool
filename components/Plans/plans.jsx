import {AiFillCheckCircle} from 'react-icons/ai'
import { MethodHeader } from '../Method/method'

function Plans() {

    return (

        <div className="h-auto pt-[60px] pb-[30px] lg:pt-[120px] lg:pb-[120px]">
            <div className='lg:text-center text-center'>
                <h1 className='text-[39px] lg:text-[60px] text-[30px] text-blue-900 font-medium'>Planos de Estudos</h1> <br />
                <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod aliquid illo quia culpa totam veritatis ab.</p> <br />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-[10px] text-center lg:text-left">

                <div>
                    <PriceCard
                        cardStyle="shadow-sm border border-slate-200 rounded-xl hover:shadow-xl"
                        cardHeadStyle="bg-white text-blue-900 px-10 pt-10 border-t border-gray-100 rounded-t-lg"
                        cardBodyStyle="grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-blue-900 rounded-b-xl"
                        h3TextPrice="Popular"
                        h1TextPrice="$85"
                        pTextPrice="Lorem ipsum dolor sit amet consectetur adipisicing."
                        oL1TextPrice="Custom response limits"
                        oL2TextPrice="VIP support & dedicated."
                        oL3TextPrice="Custom domains & branding"
                        oL4TextPrice="Single Sign-On (SSO)"
                        oL5TextPrice="Lorem ipsum dolor sit."
                    />
                </div>
                
                <div>
                    
                    <PriceCard
                        cardStyle="rounded-xl hover:shadow-lg hover:shadow-gray-500"
                        cardHeadStyle="bg-blue-900 text-white px-10 pt-10 rounded-t-lg"
                        cardBodyStyle="bg-blue-900 grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-white rounded-b-xl"
                        h3TextPrice="Popular"
                        h1TextPrice="$85"
                        pTextPrice="Lorem ipsum dolor sit amet consectetur adipisicing."
                        oL1TextPrice="Custom response limits"
                        oL2TextPrice="VIP support & dedicated."
                        oL3TextPrice="Custom domains & branding"
                        oL4TextPrice="Single Sign-On (SSO)"
                        oL5TextPrice="Lorem ipsum dolor sit."
                    />
                </div>

                <div>
                    <PriceCard
                        cardStyle="shadow-sm border border-slate-200 rounded-xl hover:shadow-xl"
                        cardHeadStyle="bg-white text-blue-900 px-10 pt-10 border-t border-gray-100 rounded-lg"
                        cardBodyStyle="bg-white grid grid-cols-1 gap-8 px-10 pt-0 pb-10 text-blue-900 rounded-lg"
                        h3TextPrice="Popular"
                        h1TextPrice="$85"
                        pTextPrice="Lorem ipsum dolor sit amet consectetur adipisicing."
                        oL1TextPrice="Custom response limits"
                        oL2TextPrice="VIP support & dedicated."
                        oL3TextPrice="Custom domains & branding"
                        oL4TextPrice="Single Sign-On (SSO)"
                        oL5TextPrice="Lorem ipsum dolor sit."
                    />
                </div>

            </div>
        </div>

    )

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
                        <h1 className="text-[60px]">{props.h1TextPrice}<small className='text-[16px]'>/Month</small></h1>
                        <p className='text-[14px]'>{props.pTextPrice}</p>
                    </div>
                </div>
                <ul className='grid grid-cols-1 gap-4'>
                    <ol>✓ {props.oL1TextPrice}</ol>
                    <ol>✓ {props.oL2TextPrice}</ol>
                    <ol>✓ {props.oL3TextPrice}</ol>
                    <ol>✓ {props.oL4TextPrice}</ol>
                    <ol>✓ {props.oL5TextPrice}</ol>
                </ul>
                <div>
                    <button className='bg-blue-900 text-white border border-white rounded w-full py-[5px] hover:bg-blue-700'>Saiba Mais</button>
                </div>
            </div>
        </div>

    )   

}

export default Plans;