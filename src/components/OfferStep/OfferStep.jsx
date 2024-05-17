import { useState } from 'react'
import { GetStart } from './Components/GetStart/GetStart'
import { OfferDetails } from './Components/OfferDetails/OfferDetails'
import { Offer } from './Components/Offer/Offer'



export const OfferStep = () => {

  const [active, setActive] = useState(0)

  const STEP = [
    {
      title: 'Get Started',
      content: <GetStart setActive={setActive} />
    },
    {
      title: "Offer Details ",
      content: <OfferDetails setActive={setActive} />
    },
    {
      title: "You want to Offer 10 MRC74 for ",
      content: <Offer setActive={setActive} />
    }
  ]
  return <div className='bg-[#15161B] pb-[31px] rounded-[8px] px-[52px] py-[12px] w-[710px]' >
    <div className='flex justify-between' >
      <h1 className='text-white text-[25px] not-italic font-semibold leading-[normal]'  >{STEP[active].title}</h1>
      <div className='py-[9px] bg-[#101116] rounded-[6px] px-[22px]' >
        <p className='text-white text-xs not-italic font-normal leading-[normal]' >Step {STEP.length}/{active + 1} Done</p>
      </div>
    </div>
    {STEP[active].content}
  </div>
}