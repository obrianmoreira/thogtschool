import { useRouter } from "next/router";
import { useState } from "react";
import { TwoColHero } from "../Hero/hero";

function Offer() {

    return (


        <div className="h-auto py-[40px] lg:py-[60px] pb-[0px]">
            <div className="grid grid-cols-1 text-center bg-blue-900 rounded-xl py-[20px] pt-[40px] pb-[60px]">
                <TwoColHero
                    twoColHeroTitle="Aprenda Inglês Praticando com Professor"
                    twoColHeroTitleSize='lg:text-[60px] text-[40px] text-white'
                    twoColHeroParag="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt itaque neque similique."
                    twoColHeroParagSize='text-[20px] lg:text-[25px] pt-[16px] pb-[30px] text-white font-light'
                    buttonBollean={true}
                />
            </div>
            
        </div>


    )

    /**
     
        <div className="my-[50px]">
            <FormOffer/>
        </div>


     */
}

export const FormOffer = () => {

    const [leadName, setLeadName] = useState('');
    const [leadEmail, setLeadEmail] = useState('');
    const [leadPhone, setLeadPhone] = useState('');

    let router = useRouter();

    function redirct () {

        router.push('/components/benefits')

    }

    const saveLeads = () => {

        addDoc(dbInstance, {

            leadName: leadName,
            leadEmail: leadEmail,
            leadPhone: leadPhone,

        }).then(() => {

            setLeadName(''),
            setLeadEmail(''),
            setLeadPhone(''),
            redirct()

        })

    }

    return (
        
        <div className="grid grid-cols-4 gap-4">

            <div>
                
                <input
                    className='py-2 rounded mt-3 w-full border-2 pl-3'
                    placeholder='Enter your first and last name'
                    onChange={(e) => setLeadName(e.target.value)}
                    value={leadName}
                />
                
            </div>

            <div>
                
                <input
                    className='py-2 rounded mt-3 w-full border-2 pl-3'
                    placeholder='Enter your first and last name'
                    onChange={(e) => setLeadName(e.target.value)}
                    value={leadName}
                />
                
            </div>

            <div>
                
                <input
                    className='py-2 rounded mt-3 w-full border-2 pl-3'
                    placeholder='Enter your first and last name'
                    onChange={(e) => setLeadName(e.target.value)}
                    value={leadName}
                />
                
            </div>

            <div className="mt-3">
                <button
                    className='bg-amber-400 rounded py-[9px] px-4 hover:bg-amber-600 hover:text-white w-full'
                    onClick={saveLeads}>
                    Know More
                </button>
            </div>  
        </div> 

    )

}

export default Offer;