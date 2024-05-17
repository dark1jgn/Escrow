/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.css";
import eth from "../../../assets/imgs/virtual.png";
import { FiArrowRightCircle } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Card = ({ percentage, token }) => {
  return (
    <div className="w-full bg-cs rounded-[5px]">
      <div className="w-full ">
        <div className="flex items-center justify-between w-full py-3 px-7">
          <div className="w-1/2 flex justify-start text-[#EFEFEF] drop-shadow-cs">
            <img src={token} alt="token.png" className="w-[26px] h-[30px]" />
            <div className="ml-3 flex flex-col justify-center">
              <div className="flex justify-start space-x-3 items-start">
                <div className="text-md">MACH7</div>
                <div className="text-xs mt-1">#1</div>
              </div>
              <div className="text-[10px] text-blue-700">PARTIAL FILL</div>
            </div>
          </div>
          <div className="w-9 h-9">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}`}
              styles={buildStyles({
                textSize: "36px",
                textColor: "white",
                trailColor: "black",
              })}
            />
          </div>
        </div>
        <div className="w-full h-0.5 bg-black px-7"></div>
        <div className="flex justify-around items-center">
          <div className="text-md my-7">
            <div className="text-[#808080]">Offering</div>
            <div className="text-white text-2ops flex space-x-1 mt-0.5">
              <div>100M M7</div>
              <div className="w-[24px] h-[30px]">
                <img src={token} alt="token.png" className="w-auto h-auto" />
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
              <img src={eth} alt="token.png" className="w-[22px] "></img>
            </div>
            <div className="text-[#808080] mt-0.5">Created</div>
            <div className="text-white text-2ops flex space-x-1 mt-0.5">
              <div>1h ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full text-[#efefef] border-t-2 border-black">
        <Link
          className="w-1/2 bg-[#0271e4] flex justify-center items-center px-6 py-4 font-medium rounded-bl-md hover:cursor-pointer border-r-[1px] border-black"
          to="/buy-offer/1"
        >
          Take Offer
        </Link>
        <Link
          to="/offer-step"
          className="w-1/2 bg-[#6C757D] flex justify-center items-center px-6 py-4 font-medium rounded-br-md  hover:cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
