import { AiOutlineExclamationCircle } from 'react-icons/ai'

export const LineStep = () => {
  return <>
    <div className='flex justify-between relative' >
      {new Array(5).fill(0).map((_, i) => {
        return <div key={i} className='w-[18.22px] z-10 h-[18.22px]  rounded-full bg-[#FFF] ' />
      })}
      <div className='h-[1px] w-[100%] top-1/2 absolute bg-[#9B9DA0]' />

    </div>
    <div className='flex  justify-between mt-[9px]' >
      {["0%", "25%", "50%", "75%", "100%"].map((procent, i) => {
        return <p key={i} className='text-[#9B9DA0] text-[10px] not-italic font-normal leading-[normal]' >
          {procent}
        </p>
      })}
    </div>
    <p className='flex mt-3 gap-x-[2px] text-[#9B9DA0] text-[8px] not-italic font-normal leading-[normal]' >
      1 USDT= 1.0001 USD    <AiOutlineExclamationCircle />
    </p>
  </>
}