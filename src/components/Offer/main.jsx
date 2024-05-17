import Card from "./Card";
import refresh from "../../assets/imgs/refresh.png";
import eth from "../../assets/imgs/logo 20.png";
import pepe from "../../assets/imgs/pepe.png";
import btc from "../../assets/imgs/btc.png";
import { CiSearch } from "react-icons/ci";
import { RiFilter3Line, RiArrowDropDownLine } from "react-icons/ri";
import { BiSortAlt2 } from "react-icons/bi";

const Main = () => {
  return (
    <>
      {/* <div className="w-full text-center font-semibold text-[30px] text-white my-2">
        Token List
      </div> */}
      <div className=" w-full flex flex-wrap space-x-3 justify-center items-center">
        <div className="bg-[#363A41] flex justify-center  rounded-[15px] text-white">
          <div className=" flex justify-center items-center p-3 font-medium hover:cursor-pointer bg-blue-700 rounded-l-2xl text-sm">
            Open
          </div>
          <div className="flex justify-center items-center p-3 font-medium text-sm hover:cursor-pointer">
            100% Filled
          </div>
          <div className="flex justify-center items-center p-3 font-medium text-sm hover:cursor-pointer  rounded-r-2xl">
            Closed
          </div>
        </div>
        <div className="bg-[#363A41] flex justify-center  rounded-[15px] text-white">
          <div className=" flex justify-center items-center p-3 text-sm font-medium hover:cursor-pointer bg-blue-700 rounded-2xl">
            Strict List
          </div>
          <div className="flex justify-center items-center text-sm font-medium hover:cursor-pointer p-3 px-5">
            All
          </div>
        </div>
        <div className=" w-96 bg-[#101116] border border-[#363A41] flex justify-start items-center  rounded-[15px] text-white px-3 space-x-2">
          <CiSearch className=" w-6 h-auto text-gray-500" />
          <div className="relative w-full" onClick={() => setInputState(1)}>
            <input
              type="text"
              className=" bg-transparent p-2 focus:outline-none w-full"
              placeholder="Enter token name or contract address"
            />
          </div>
        </div>
        <div className="bg-[#363A41] flex justify-center items-center  rounded-[15px] text-white px-2 opacity-50 hover:cursor-pointer">
          <RiFilter3Line className="w-6 h-auto" />
          <div className="text-white text-sm p-3">Filter</div>
        </div>
        <div className="bg-[#363A41] flex justify-center items-center  rounded-[15px] text-white opacity-50 px-2 hover:cursor-pointer">
          <BiSortAlt2 className="w-6 h-auto" />
          <div className="text-white text-sm p-3">Peice:Ascending</div>
          <RiArrowDropDownLine className="w-8 h-auto" />
        </div>
        <div className="bg-[#363A41] flex justify-center items-center p-3  rounded-[15px] text-white hover:cursor-pointer">
          <img src={refresh} alt="refresh.png" className="w-6 h-6" />
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5 ">
        <Card percentage={2} token={eth} />
        <Card percentage={2} token={btc} />
        <Card percentage={80} token={pepe} />
        <Card percentage={20} token={btc} />
        <Card percentage={2} token={pepe} />
        <Card percentage={2} token={btc} />
        <Card percentage={2} token={eth} />
        <Card percentage={2} token={btc} />
        <Card percentage={2} token={pepe} />
        <Card percentage={2} token={eth} />
      </div>
    </>
  );
};

export default Main;
