/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import img from "../../../../assets/imgs/Ethereum_logo_PNG3 2.png"
import { useState } from 'react';
import { BackModal } from '../BackModal/BackModal';

const TableItem = ({ isBorder, title, value }) => {
  return <div className={`flex pr-[26px] ${isBorder ? 'border-b border-b-[#969696]' : ''} items-center justify-between pl-[31px] py-[16px]`}  >
    <p className='text-[rgba(255,255,255,0.50)] text-sm not-italic font-normal leading-[normal] flex gap-x-[3px]' >
      {title}
      <HiOutlineExclamationCircle />
    </p>
    <p className='text-[rgba(255,255,255,0.50)] text-sm not-italic font-semibold leading-[normal]' >{value}</p>
  </div>
}

export const Offer = ({ setActive }) => {
  const [open, setOpen] = useState(false)


  return <div>
    <h1 className='mt-[12px] text-[#6478F0] text-[25px] not-italic font-semibold leading-[normal]' >0.1234 ETH</h1>
    <div className='mt-[20px] bg-[#1A1B1E]'  >
      <TableItem isBorder title="Price Per MRC74" value="0.1234 ETH" />
      <TableItem isBorder title="For" value="10" />
      <TableItem isBorder title="Amount" value={<div className='flex gap-x-[5px] items-center' >
        <p>
          0.1234
        </p>
        <img src={img} />
      </div>} />
      <TableItem title="Fill Type" value="PARTIAL" />
    </div>
    <div className='grid gap-x-[22px] grid-cols-2 mt-[26px]' >
      <button onClick={() => setOpen(true)} className='bg-[#34373C] text-white text-sm not-italic font-bold leading-[normal] cursor-pointer py-[15px] ' >
        Back
      </button>
      <button className='bg-[#101116] text-white text-sm not-italic font-bold leading-[normal] cursor-pointer py-[15px]' >
        Deposit 10 MRAC74
      </button>
    </div>
    {open && <BackModal close={() => setOpen(false)} setActive={setActive} />}
  </div>
}