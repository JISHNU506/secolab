import React from "react";
import books_icon from "../assets/book_icon.svg";
import mobile_icon from "../assets/mobile_icon.svg";
import logo_dark from "../assets/logo_length 1.svg";
import date from "../assets/scheduled 1.svg";
import cont1 from "../assets/Group 44.svg";
import servicewarrenty from "../assets/security 1.svg";
import pricingtag from "../assets/pricing 1.svg";
import onlinepayment from "../assets/payments 1.svg";
import twentyforintoseven from "../assets/support 1.svg";

const iconsData = [
  { name: "On Demand/Scheduled", icon: date },
  { name: "Verified Partners ", icon: cont1 },
  { name: "Service Warranty", icon: servicewarrenty },
  { name: "Transparent Pricing", icon: pricingtag },
  { name: "Online Payments", icon: onlinepayment },
  { name: "24 x 7 Support", icon: twentyforintoseven },
];

function Footer() {
  return (
    <>
      <section className="py-10 px-10 bg-slate-100">
        <h2 className="text-blue-950 text-xl font-medium ml-20 mb-5">
          Why SecLob ?
        </h2>
        <div className="flex flex-row justify-around">
          {iconsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2 text-gray-400 p-5 rounded-[50%] bg-white">
                <img src={item.icon} className="h-10 w-10" alt="" />
              </div>

              <p className="text-sm text-black">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="container mx-auto md:px-20 px-5  ">
        <h2 className="cursor-pointer flex justify-around my-12 font-medium text-gray-400 text-md">
          <span>About us</span>
          <span>|</span> <span>About us</span>
          <span>|</span> <span>contactus </span>
          <span>|</span>
          <span>Terms And Conditions</span>
          <span>|</span>
          <span>Privacy And Policy</span>
          <span>|</span>
          <span> F A Q </span>
          <span>|</span>
          <span>Blog</span> <span>|</span>
          <span>Services</span>{" "}
        </h2>
        <p className="text-base mb-4 ">
          Welcome to Justdial, your 'one stop shop' where you are assisted with
          day-to-day and exclusive planning and purchasing activities. We take
          pride in our iconic customer support number, 8888888888 and the fact
          that we own a strong hold on local business information pan India.
        </p>
        <p className="text-base mb-4">
          Our service extends from providing address and contact details of
          business establishments around the country, to making orders and
          reservations for leisure, medical, financial, travel and domestic
          purposes. We enlist business information across varied sectors like
          Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care,
          Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over
          the country. Holding information right from major cities like Mumbai,
          Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach
          stretches out to other smaller cities across the country too.
        </p>
        <p className="text-base">
          Our 'Free Listing' feature gives a platform to showcase varied
          specialities. We then furnish you with the information via phone, SMS,
          web, App and WAP as well as, create a space for you to share your
          experiences through our 'Rate & Review' feature. Through the 'Best
          Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you
          are offered the best bargains in the market.
        </p>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-10 md:px-20 py-20 mx-auto">
          <div class="flex flex-wrap -m-2">
            <h2 className="text-blue-950 text-3xl font-medium ml-7 mb-5">
              Some of our services that will prove useful to you on a day-to-day
              basis are:
            </h2>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4 "
                  src={mobile_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Shop Online
                  </h2>
                  <p class="text-gray-500  text-[14px] ">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Books
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Flowers
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Flowers
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    {" "}
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={mobile_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Shop Online
                  </h2>
                  <p class="text-gray-500  text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Books
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    {" "}
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Flowers
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Books
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    {" "}
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={mobile_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Shop Online
                  </h2>
                  <p class="text-gray-500  text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Books
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Flowers
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex items-center  p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16  rounded-full mr-4"
                  src={books_icon}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Order Flowers
                  </h2>
                  <p class="text-gray-500 text-[14px]">
                    This online shopping feature brings forth a plethora of
                    gadgets like phones, refrigerators, washing machines,
                    cameras, etc. for you to choose from and make a smart buy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-base mb-2 container mx-auto md:px-20 px-5 ">
          Some of the other services that can be of assistance to you for
          leisure, health and home convenience are - Courier Service, Laundry
          Service, AC Repair, Thyrocare, Metropolis, Order Mineral Water, Book a
          Table, Doctor's Appointment, Order Food Online, etc.
        </p>
        <p className="text-base mb-2 container mx-auto md:px-20 px-5 ">
          With an endless number of things under the sun, you can be sure this
          will be your 'One Stop Shop' to find everything and more.
        </p>
      </section>

      <footer className="flex flex-col py-10 justify-center items-center ">
        <img src={logo_dark} alt="" className="w-[100px] md:w-[200px]" />
        <h2 className="px-4 text-sm  py-3 md:w-[600px] text-center  text-gray-500">
          Seclob brings the best of Home Maintenance and Repairs, Utility,
          Lifestyle, Health, Beauty Services, and Local Shopping to the
          customer, right where they are, all through an easy to use platform.{" "}
        </h2>
      </footer>
      <div className="flex flex-row text-white bg-[#9C9B9B] w-full py-4 px-20 mx-auto justify-center items-center">
        Copyright 2022 Seclob Technologies Pvt.Ltd. All Rights Reserved |
        Designed & Developed by ERE Business Solutions
      </div>
    </>
  );
}

export default Footer;
