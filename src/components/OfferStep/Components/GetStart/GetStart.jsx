/* eslint-disable react/prop-types */
import { SelectMaerket } from './Components/SelectMaerket/SelectMaerket'
import img1 from "../../../../assets/imgs/arrow curve.png"
import img2 from "../../../../assets/imgs/pre.png"
import img3 from "../../../../assets/imgs/Recyle.png"
import img4 from "../../../../assets/imgs/tether.png"
import img5 from "../../../../assets/imgs/virtual.png"
import img6 from "../../../../assets/imgs/Streamline.png"
import { useState } from 'react'
const MARKET = [
  {
    title: "Pre- market",
    subtitle: "Trade pre-TGE Token allocation",
    img: img1,
  },
  {
    title: "Points market",
    subtitle: "Trade pre-TGE Token allocation ",
    img: img2,
  },
  {
    title: "Runes market",
    subtitle: "Trade pre-TGE Token allocation ",
    img: img3,
  },
  {
    title: "Runes DEX",
    subtitle: "Trade pre-TGE Token allocation ",
    img: img4
  },
  {
    title: "NFT Whitelist",
    subtitle: "Trade pre-TGE Token allocation ",
    img: img5
  },
  {
    title: "Vesting market",
    subtitle: "Trade pre-TGE Token allocation ",
    img: img6
  },
]

const Card = ({ card, selectCard, setSelectCard }) => {

  return <div onClick={() => setSelectCard(card.title)} className={` ${selectCard === card.title ? "bg-[#1A1B1E] text-white" : ""} rounded hover:bg-[#1A1B1E] cursor-pointer flex flex-col  items-center pt-[13px] pb-[21px] border-[0.2px] border-solid border-[#969696]`} >
    <img src={card.img} />
    <p className={` ${selectCard === card.title ? "text-white" : "text-[rgba(255,255,255,0.50)]"}  mt-[6px] mb-[4px] text-sm not-italic font-semibold leading-[normal]`} >
      {card.title}
    </p>
    <p className={`  ${selectCard === card.title ? "text-white" : "text-[rgba(255,255,255,0.50)]"} w-[50%] text-center text-[10px] not-italic font-normal leading-[normal]`} >
      {card.subtitle}
    </p>
  </div>
}

export const GetStart = ({ setActive }) => {
  const [selectCard, setSelectCard] = useState("")

  return <div className='max-h-[100%]'>
    <div className='flex items-center mt-[16px] gap-x-[7px] ' >
      <div className='w-[31px] border rounded-full h-[31px] flex justify-center items-center' >
        <p className='text-white text-base not-italic font-normal leading-[normal]' >1</p>
      </div>
      <h1 className='text-white text-base not-italic font-normal leading-[normal]' >Select Market </h1>
    </div>
    <div className='grid mt-[21px] grid-cols-3 gap-y-[27px] gap-x-[30px]' >
      {MARKET.map((card, index) => <Card selectCard={selectCard} setSelectCard={setSelectCard} key={index} card={card} />)}
    </div>
    <div className='flex items-center mt-[16px] gap-x-[7px] ' >
      <div className='w-[31px] border rounded-full h-[31px] flex justify-center items-center' >
        <p className='text-white text-base not-italic font-normal leading-[normal]' >2</p>
      </div>
      <h1 className='text-white text-base not-italic font-normal leading-[normal]' >Select Market </h1>
    </div>
    <div>
      <SelectMaerket />
    </div>
    <button onClick={() => setActive(prev => prev + 1)} className='py-[17px] w-full bg-[#101116] mt-[26px] text-white text-xs not-italic font-normal leading-[normal]' >
      Next
    </button>
  </div>
}