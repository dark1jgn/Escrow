/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { RiBitCoinFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BackModal } from '../BackModal/BackModal';
import { useState } from 'react';

const Radio = ({ name, label, subLabel }) => {
  return <label className="inline-flex gap-x-[5px] items-center mt-[13px]">
    <div className="relative flex items-center -mt-5   rounded-full cursor-pointer" htmlFor="html_version">
      <input name={name} type="radio"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:before:bg-white hover:before:opacity-10"
        id="html_version" />
      <span
        className="absolute text-white atransition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[13px] w-[13px]" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
    </div>
    <div className="mt-px font-light text-white cursor-pointer select-none" htmlFor="html_version">
      <div>
        <p className="text-white text-xs not-italic font-normal leading-[normal]">
          {label}
        </p>
        <p className=" text-[rgba(255,255,255,0.50)] text-[10px] not-italic mt-[6px] font-normal leading-[normal]">
          {subLabel}
        </p>
      </div>
    </div>
  </label>
}


export const OfferDetails = ({ setActive }) => {

  const [open, setOpen] = useState(false)

  return <div className=''>
    <div className=' mt-10 py-[11px] flex items-center  justify-between px-[19px] bg-[#1A1B1E] rounded-[4px]' >
      <div>
        <p className='flex items-center gap-x-[5px]  text-white' >
          OFFER <HiOutlineExclamationCircle className='text-[14px]' />
        </p>
        <p className='text-[rgba(255,255,255,0.50)]  mt-[7px] text-base not-italic font-normal leading-[normal]' >Enter Amount to offer </p>
      </div>
      <div>
        <button className='flex cursor-pointer py-[7px] bg-[#101116] rounded-[6px] text-white px-[15px] items-center gap-x-[6px]' >
          Select a Token
          <MdKeyboardArrowDown />
        </button>
      </div>
    </div>

    <div className=' mt-[21px] py-[11px] flex items-center justify-between px-[19px] bg-[#1A1B1E] rounded-[4px]' >
      <div>
        <p className='flex items-center gap-x-[5px]  text-white' >
          FOR  <HiOutlineExclamationCircle className='text-[14px]' />
        </p>
        <p className='text-[rgba(255,255,255,0.50)]  mt-[7px] text-base not-italic font-normal leading-[normal]' >0.00</p>
      </div>
      <div className='flex flex-col  items-end' >
        <p className='text-[rgba(255,255,255,0.50)] text-[10px] not-italic font-normal leading-[normal]' >
          Ballance 0.00 USD
        </p>
        <p className='flex mt-[8px] gap-x-2 items-center text-white text-[10px] not-italic font-normal leading-[normal]' >
          <RiBitCoinFill className='text-[18px]' />
          USD
          <MdKeyboardArrowDown className='text-[18px]' />
        </p>
      </div>
    </div>

    <div className='mt-[38px] mb-[13px]' >
      <h3 className='text-white text-xs not-italic font-normal leading-[normal]' >
        Fiill Type
      </h3>
      <div className='flex flex-col' >
        <Radio name={"fiill_type"} label="Partial Fill" subLabel="Multiple user can Contribute to Full fill the Offer " />
        <Radio name={"fiill_type"} label="Single Fill" subLabel="Entire offer must be filled by 1 user " />
        <Radio name={"fiill_type"} label="Privet Fill" subLabel="Entire offer must be filled by 1 user " />
      </div>
      <div className='grid gap-x-[22px] grid-cols-2 mt-[26px]' >
        <button onClick={() => setOpen(true)} className='bg-[#34373C] text-white text-sm not-italic font-bold leading-[normal] cursor-pointer py-[15px] ' >
          Back
        </button>
        <button onClick={() => setActive(prev => prev + 1)} className='bg-[#101116] text-white text-sm not-italic font-bold leading-[normal] cursor-pointer py-[15px]' >
          Next
        </button>
      </div>
    </div>
    {open && <BackModal close={() => setOpen(false)} setActive={setActive} />}
  </div>
}