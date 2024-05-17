import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateOffer from "./CreateOffer";
import Header from "./Layouts/header";
import Sidebar from "./Layouts/sidebar";
import Main from "./main";
import OfferDetails from "./offerDetails";
import { BuyOffer } from "../BuyOffer/BuyOffer";
import { OfferStep } from "../OfferStep/OfferStep";
import Profile from "../Profile";

function Dashboard() {
  return (
    <BrowserRouter>
      <div className="w-full bg-black">
        <Header />
        <div className="flex">
          <Sidebar />
          <div
            className="bg-[#101116] w-full flex flex-col items-center mt-[103px] ml-[257px] py-5 lg:px-10  md:p-5 sm:px-3"
            id="scrollbar"
          >
            <Routes>
              <Route path="/createOffer" element={<CreateOffer />} />
              <Route path="/offerDetails" element={<OfferDetails />} />
              <Route path="/" element={<Main />} />
              <Route path="/buy-offer/:id" element={<BuyOffer />} />
              <Route path="/offer-step" element={<OfferStep />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
