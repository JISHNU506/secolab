import React from "react";
import painter_img from "../assets/painter.svg";
import biriyani_img from "../assets/image 4.svg";
import mobile_img from "../assets/Mask group.svg";
import book_img from "../assets/libry.svg";
import electrician from "../assets/electrician 1.svg";
import Car_accessories from "../assets/car_accessories.svg";
import bullet from "../assets/bullet (1).svg";
import carwash from "../assets/carwash.svg";
import jeep from "../assets/Jeep.svg";
import bike from "../assets/bike.svg";
const iconsData = [
  { name: "Car Accessories", icon: Car_accessories },
  { name: "Bullet", icon: bullet },
  { name: "Car Wash", icon: carwash },
  { name: "Jeep", icon: jeep },
  { name: "Bike", icon: bike },
  { name: "Car Accessories", icon: Car_accessories },
  { name: "Bullet", icon: bullet },
  { name: "Car Wash", icon: carwash },
  { name: "Jeep", icon: jeep },
  { name: "Bike", icon: bike },
];

const paintersData = [
  { name: "Painter 1" },
  { name: "Painter 2" },
  { name: "Painter 3" },
  { name: "Painter 4" },
  { name: "Painter 5" },
];
const electrician_1 = [
  { name: "Painter 1" },
  { name: "Painter 2" },
  { name: "Painter 3" },
  { name: "Painter 4" },
  { name: "Painter 5" },
  { name: "Painter 1" },
  { name: "Painter 2" },
  { name: "Painter 3" },
  { name: "Painter 4" },
  { name: "Painter 5" },
];

function CardsWrapper() {
  return (
    <>
      <section className="cards-wrapper bg-[#EDFFF5] p-5 md:p-10 flex flex-wrap gap-4 items-center justify-center ">
        <div className="flex w-full justify-between px-4 md:px-24 ">
          <span className="text-blue-700 font-medium text-xl">
            Vehicle Services
          </span>
          <span className="cursor-pointer text-blue-400">View More </span>
        </div>
        {iconsData.map((card, index) => (
          <div
            key={index}
            className="card bg-[#08437e] text-white rounded-3xl p-4 w-full md:w-1/2 lg:w-1/6 flex flex-col items-center justify-center"
          >
            <img src={card.icon} alt="" className="w-[70px] h-[65px]" />
            <h2 className="text-white text-sm text-center mt-2">{card.name}</h2>
          </div>
        ))}
      </section>

      <section className="cards-wrapper bg-[#EDFFF5] p-5 md:p-10 flex flex-wrap gap-4 items-center justify-center mt-4 ">
        <div className="flex w-full justify-between px-4 md:px-24 ">
          <span className="text-blue-700 font-medium text-xl">
            Home Services
          </span>
        </div>
        {paintersData.map((painter, index) => (
          <div className="card text-white rounded-3xl p-4 w-full md:w-1/2 lg:w-1/6 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="vignette-effect absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none"></div>
            <img
              src={painter_img}
              alt={painter.name}
              className="rounded-lg "
              style={{
                opacity: 0.85,
                boxShadow: "inset 0 0 70px 50px black",
              }}
            />
            <h2 className="text-gray-600 font-medium text-sm text-center mt-2 absolute bottom-8">
              {painter.name}
            </h2>
          </div>
        ))}
      </section>

      <section className="w-[80%] mx-auto  p-5 mt-4 flex flex-row min-h-[150px]">
        <div className="flex w-1/2 bg-[#EDFFF5]  pt-5 rounded-lg px-5 mr-5 flex-col overflow-hidden">
          <span className="text-blue-700 font-medium text-xl mb-4">Eats</span>
          <div
            className="min-h-[200px] mr-3 w-[90%] mx-auto rounded-lg overflow-x-auto flex flex-row gap-2 custom_slider cursor-pointer"
            style={{ width: "800px" }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg w-[100px] h-[160px] flex-shrink-0 flex flex-col items-center overflow-hidden"
              >
                <img
                  src={electrician}
                  alt={`Image ${index + 1}`}
                  className="w-[60px] rounded-lg"
                />
                <h3 className="text-lg font-[500]">Electrician</h3>
                <p className="text-[11px] px-3 text-center mb-2">
                  Seclob Service at Kochi
                </p>
                <div className="bg-green-500 w-full py-2">
                  <p className="text-[11px]  text-center text-white">
                    20 minutes ago..
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-1/2 overflow-hidden rounded-3xl">
          <img src={book_img} alt="" className="w-full" />
        </div>
      </section>

      <section className="cards-wrapper bg-[#EDFFF5] p-5 md:p-10 flex flex-wrap gap-4 items-center justify-center mt-4 ">
        <div className="flex w-full justify-between px-4 md:px-24 ">
          <span className="text-blue-700 font-medium text-xl">Store</span>
        </div>
        {paintersData.map((painter, index) => (
          <div
            key={index}
            className="card text-white rounded-3xl p-4 w-full md:w-1/2 lg:w-1/6 flex flex-col items-center justify-center"
          >
            <img
              src={mobile_img}
              alt="phone"
              className="rounded-t-[16px] w-[300px]"
            />
            <h2 className="text-white text-lg text-center rounded-t-[25px] relative -top-10 rounded-b-[16px] w-full bg-green-400 font-medium">
              Y15s
              <p className="text-yellow-300 text-lg font-medium">
                23000/-
                <span className="relative text-white font-light ">
                  25,000
                  <hr className="absolute top-2/4 left-0 right-0 border-t-2 border-white" />
                </span>
              </p>
            </h2>
          </div>
        ))}
      </section>
      <section className="cards-wrapper bg-[#EDFFF5] p-5 md:p-10 flex flex-wrap gap-4 items-center justify-center mt-4 ">
        <div className="flex w-full justify-between px-4 md:px-24 ">
          <span className="text-blue-700 font-medium text-xl">Eats</span>
        </div>
        {paintersData.map((painter, index) => (
          <div
            key={index}
            className="card text-white rounded-3xl p-4 w-full md:w-1/2 lg:w-1/6 flex flex-col items-center justify-center"
          >
            <img
              src={biriyani_img}
              alt={painter.name}
              className="rounded-t-[16px] w-[300px]"
            />
            <h2 className="text-white text-lg text-center rounded-t-[25px] relative -top-5 rounded-b-[16px] w-full bg-green-400 font-medium">
              Biriyani
              <p className="text-yellow-300 text-lg font-medium">
                100/-
                <span className="relative text-white font-light ">
                  140
                  <hr className="absolute top-2/4 left-0 right-0 border-t-2 border-white" />
                </span>
              </p>
            </h2>
          </div>
        ))}
      </section>
      <section className="cards-wrapper bg-[#EDFFF5] p-5 md:p-10 flex flex-wrap gap-4 items-center justify-center mt-4 ">
        <div className="flex w-full justify-between px-4 md:px-24 ">
          <span className="text-blue-700 font-medium text-xl">JOB</span>
        </div>
        {paintersData.map((painter, index) => (
          <div
            key={index}
            className="card text-white rounded-3xl p-4 w-full md:w-1/2 lg:w-1/6 flex flex-col items-center justify-center relative"
          >
            <img
              src={painter_img}
              alt={painter.name}
              className="rounded-lg "
              style={{
                opacity: 0.85,
                boxShadow: "inset 0 0 70px 50px black",
              }}
            />
            <h2 className="text-gray-600 font-medium text-sm text-center mt-2 absolute bottom-8">
              {painter.name}
            </h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default CardsWrapper;
