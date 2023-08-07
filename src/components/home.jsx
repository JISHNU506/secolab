import React from "react";
import "./common.css";
import { BsSearch } from "react-icons/bs";
import seclob_services from "../assets/seclob_services 2.svg";
import enquiry from "../assets/seclob_enquiry .svg";
import Auction from "../assets/seclob_auction .svg";
import rentacar from "../assets/seclob_rentacar .svg";
import vehicle_service from "../assets/seclob_vehicleservices 2.svg";
import news from "../assets/seclob_news 2.svg";
import store from "../assets/seclob_store 2.svg";
import eats from "../assets/seclob_eats 2.svg";
import doctor from "../assets/seclob_doctorbooking 2.svg";
import layer from "../assets/seclob_lawyerbooking.svg";
import cabs from "../assets/seclob_cabs.svg";
import rooms from "../assets/seclob_rooms.svg";
import recharge from "../assets/seclob_recharge.svg";
import deliver_boy from "../assets/seclob_deliverboy.svg";
import buysell from "../assets/seclob_buy&sell.svg";
import moviesandevents from "../assets/seclob_movies&events.svg";
import jobs from "../assets/seclob_jobs.svg";
import tripcompanian from "../assets/seclob_tripcompanian.svg";

const iconsData = [
  { name: "Services", icon: seclob_services },
  { name: "Enquiry", icon: enquiry },
  { name: "Auction", icon: Auction },
  { name: "Job", icon: rentacar },
  { name: "Vehicle Service", icon: vehicle_service },
  { name: "News", icon: news },
  { name: "Store", icon: store },
  { name: "Eats", icon: eats },
  { name: "Doctor Booking", icon: doctor },
  { name: "Lawyer Booking", icon: layer },
  { name: "Jobs", icon: jobs },
  { name: "Cabs", icon: cabs },
  { name: "Rooms", icon: rooms },
  { name: "Recharge", icon: recharge },
  { name: "Delivery Boy", icon: deliver_boy },
  { name: "Buy & Sell", icon: buysell },
  { name: "Movie & Events", icon: moviesandevents },
  { name: "Trip Campanian", icon: tripcompanian },
];

function Home() {
  return (
    <section className="bg-blue-50 wave_img">
      <div className=" p-4 min-h-[350px] flex flex-col  justify-end">
        <div className="container mx-auto mt-20">
          <h1 className=" text-blue-500 text-center text-4xl font-bold mb-4">
            What are you <span className="text-green-400">Looking </span>For
            ....?
          </h1>
          <div className="flex justify-center ">
            <div className="p-2">
              <div className="flex space-x-4 bg-white shadow-xl h-auto rounded-lg w-auto p-1">
                <div className="flex items-center">
                  <BsSearch className="text-base ml-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="px-4 py-2 md:w-[600px] w-[150px]"
                  />
                </div>
                <button className="bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-300 hover:text-green-500">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 bg-custom px-4 md:w-[80%] mx-auto  rounded-[45px] my-10 ">
        <div className="grid grid-cols-6 md:grid-cols-9 gap-4">
          {iconsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center "
            >
              <div className="mb-2 text-gray-400 p-2 rounded-[50%] bg-white">
                <img src={item.icon} alt="" className="w-[40px]" />
              </div>

              <p className="text-sm text-slate-200 ">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10 px-4 md:w-[80%] mx-auto rounded-xl my-5 flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-60% mr-3  min-h-[200px] rounded-lg overflow-x-scroll flex flex-row gap-2 custom_slider cursor-pointer">
          <img
            src="https://img.freepik.com/free-vector/gradient-colorful-music-festival-twitch-banner_23-2149059687.jpg?w=2000"
            alt="Image 1"
            className=" rounded-lg md:w-[80%]"
          />
          <img
            src="https://img.freepik.com/free-vector/gradient-halftone-music-festival-facebook-cover_23-2149157969.jpg"
            alt="Image 2"
            className="rounded-lg md:w-[100%]"
          />
          <img
            src="https://img.freepik.com/free-vector/gradient-colorful-music-festival-twitch-banner_23-2149059687.jpg?w=2000"
            alt="Image 1"
            className="rounded-lg md:w-[100%]"
          />
        </div>

        <div className="md:w-40% w-full flex flex-row md:flex-col  gap-3 ">
          <div className="bg-yellow-500 h-[100px] w-full  rounded-lg mb-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId8a9tVRwLvKsjkqUq2uFwtAvT8SAu4uTxLezzGY74Zwv7QHbTNIAy-vGozscJ1ZBeBU&usqp=CAU"
              className="rounded-lg w-[100%] h-[120px]"
              alt="coupon"
            />
          </div>
          <div className="bg-green-500 h-[100px] w-full rounded-lg mt-2">
            <img
              src="https://www.niveshgurus.com/wp-content/uploads/2020/02/How-to-make-most-of-your-credit-card-reward-program_1.jpg"
              className="rounded-lg w-[100%] h-[120px]"
              alt="coupon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
