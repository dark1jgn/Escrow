import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Select } from "./Components/Select/Select";
import { LineStep } from "./Components/LineStep/LineStep";
import { MyOrders } from "./Components/MyOrders/MyOrders";
import { IoIosClose } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Tokens } from "./Components/Tokens/Tokens";
import { About } from "./Components/About/About";
import { useNavigate } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
// import { CircularProgressbar } from "react-circular-progressbar";

export const BuyOffer = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-40 w-full">
      <div className="w-full">
        <div className="flex py-[30px] justify-center space-x-20 ">
          <div className=" bg-[#272a2f] rounded-2xl">
            <div className="flex justify-between py-3 px-8">
              <div className="flex items-center justify-between w-full">
                <div className="w-1/2 flex justify-start text-[#EFEFEF] drop-shadow-cs">
                  {/* <img src={token} alt="token.png" className="" /> */}
                  <div className="ml-3 flex flex-col justify-center">
                    <div className="flex justify-start space-x-3 items-start">
                      <div className="text-2xl">MACH7</div>
                      <div className="text-sm mt-1">#1</div>
                    </div>
                    <div className="text-[10px] text-blue-700">
                      PARTIAL FILL
                    </div>
                  </div>
                </div>
                {/* <div className="w-9 h-9">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}`}
              styles={buildStyles({
                textSize: "36px",
                textColor: "white",
                trailColor: "black",
              })}
            />
          </div> */}
              </div>
              <div className="flex  gap-x-[6px] ">
                <button className=" text-[#ffffff7f] rounded-[4px] bg-[#181A1C] w-[39px] h-[34px] flex justify-center items-center">
                  <IoIosClose />
                </button>
                <button className="text-[#ffffff7f] rounded-[4px] bg-[#181A1C] w-[39px] h-[34px] flex justify-center items-center">
                  <TfiWorld />
                </button>
                <button className="text-white rounded-[4px] bg-[#181A1C] w-[39px] h-[34px] flex justify-center items-center">
                  <TiArrowForwardOutline />
                </button>
              </div>
            </div>
            <div className="py-[27px] border-b-2 border-b-black px-8">
              <Tokens />
            </div>
            <div className="flex justify-between items-center px-8 border-b-2 border-b-black">
              <div className="text-md my-7">
                <div className="text-[#808080]">Offering</div>
                <div className="text-white text-2ops flex space-x-1 mt-0.5">
                  <div>100M M7</div>
                  <div className="w-[24px] h-[30px]">
                    {/* <img
                      src={token}
                      alt="token.png"
                      className="w-auto h-auto"
                    /> */}
                  </div>
                </div>
                <div className="text-[#808080] mt-0.5">Price / Token</div>
                <div className="text-white text-2ops flex space-x-1 mt-0.5">
                  <div>$0.00553</div>
                </div>
              </div>
              <FiArrowRightCircle className="w-7 h-auto text-blue-700" />
              <div className=" text-md">
                <div className="text-[#808080]">For</div>
                <div className="text-white text-2ops flex space-x-1 mt-0.5">
                  <div>0.553 ETH</div>
                  {/* <img src={eth} alt="token.png" className="w-[22px] "></img> */}
                </div>
                <div className="text-[#808080] mt-0.5">Created</div>
                <div className="text-white text-2ops flex space-x-1 mt-0.5">
                  <div>1h ago</div>
                </div>
              </div>
            </div>
            <div className="pt-[13px] px-8">
              <About />
              <button
                onClick={() => navigate("/offer-step")}
                className="py-[17px] w-full bg-[#101116] cursor-pointer mt-[48px] text-white text-xs not-italic font-normal leading-[normal]"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className=" pr-[27px] bg-[#272a2f] rounded-2xl px-5 py-3 px-8">
            <div className="flex gap-x-[116px]">
              <div>
                <h1 className="text-[#EFEFEF] text-base not-italic font-medium leading-[normal]">
                  MACH7/ USDC
                </h1>
                <p className="mt-1 text-[rgba(255,255,255,0.50)] text-[10px] not-italic font-normal leading-[normal]">
                  $ 2.003 2.003 USDC
                </p>
              </div>
              <button className="flex py-2 px px-3 rounded-[4px] bg-[#181A1C] items-center gap-x-2 text-[rgba(255,255,255,0.60)] text-[10px] not-italic font-normal leading-[normal]">
                <AiOutlineExclamationCircle />
                Offer Info
              </button>
            </div>
            <div className="mt-[20px] flex flex-col gap-y-[16px]">
              <Select label="Selling" />
              <Select label="Collateral" />
            </div>
            <div className="mt-[50px]">
              <LineStep />
            </div>
            <button className="py-[17px] w-full bg-[#101116] mt-[26px] text-white text-xs not-italic font-normal leading-[normal]">
              Sell Now
            </button>
            <div className="mt-[9px]">
              <div className="flex justify-between">
                <p className="text-white text-xs not-italic font-light leading-[normal]">
                  {" "}
                  Selling
                </p>
                <p className="text-[#9B9DA0] text-[10px] not-italic font-normal leading-[normal]">
                  2000
                </p>
              </div>
              <div className="flex mt-[9px] justify-between">
                <p className="text-white text-xs not-italic font-light leading-[normal]">
                  {" "}
                  Collateral
                </p>
                <p className="text-[#9B9DA0] text-[10px] not-italic font-normal leading-[normal]">
                  3500
                </p>
              </div>
            </div>
            <div className="w-full h-[0.2px] bg-white mt-[15px]" />
            <MyOrders />
          </div>
        </div>
      </div>
    </div>
  );
};
