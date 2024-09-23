import React from "react";
import { Link } from "react-router-dom";
import logo from "../NavBar/logo1.png";
import facebook from "./facebook.png";
import twitter from "./x.png";
import instagram from "./youtube.png";
import pintrest from "./pinterest.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import mpesa from "./richard-mucene-devsecops-developer-johannesburg-azure-aws-gcp-work.png";
import vodapay from "./Vodapay.png";
import mastercard from './mastercard.png'
import visa from './visa.png'
import paypal from './paypal.png'


interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="select-none py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-8">
      {/**TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24 p-8">
        {/**Left */}
        <div className="w-1/2 flex flex-col gap-2">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Richard-Mucene-DevOps-Engineer-Johannesburg"
              width={140}
              height={60}
              className="filter grayscale"
            />
          </Link>
          <p className="font-bold text-xl">Sout Africa</p>
          <p>12 Minerva Street, Kensington Johannesburg. 2094</p>
          <span className="font-semibold">e.mushene@gmail.com</span>
          <span className="font-semibold">+27 72 620 3386</span>
          <br />
          <br />
          <p className="font-bold text-xl">Kenya</p>
          <span className="font-semibold">+254 70 248 2303</span>
          <p>Nairobi Area</p>
          <div className="flex gap-6">
            <img
              src={facebook}
              alt="RICHARD-MUCENE-FACEBOOK-DEVOPS"
              className="h-6 w-6 cursor-pointer"
            />
            <img
              src={instagram}
              alt="Richard-Mucene-DevOps-instagram"
              className="h-6 w-6 cursor-pointer"
            />
            <img
              src={twitter}
              alt="Richard-Mucene-DevOps-Twitter-X"
              className="h-6 w-6 cursor-pointer"
            />
            <img
              src={pintrest}
              alt="Richard-Mucene-DevOps-PINTREST"
              className="h-6 w-6 cursor-pointer"
            />
            <img
              src={github}
              alt="Richard-Mucene-DevOps-Github"
              className="h-6 w-6 cursor-pointer"
            />
             <img
              src={linkedin}
              alt="Richard-Mucene-DevOps-Github"
              className="h-10 w-10 cursor-pointer filter grayscale"
            />
          </div>
         
        </div>
        {/**Center */}
        <div className="hidden lg:flex justify-between w-1/2 gap-8">
         <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Richard Mucene</h1>
          <div className="flex flex-col gap-6">
            <Link to={"/"}>Resume</Link>
            <Link to={"/"}>Careers</Link>
            <Link to={"/"}>Affiliates</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>Contact</Link>
          </div>
         </div>
         <div className="w-full flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Shop</h1>
          <div className="w-full flex flex-col gap-6">
            <Link to={"/"}>New Arrivals</Link>
            <Link to={"/"}>Accessories</Link>
            <Link to={"/"}>Affiliates</Link>
            <Link to={"/"}>Computer Hardware</Link>
            <Link to={"/"}>Software Development</Link>
          </div>
         </div>
         <div className="w-full flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Help</h1>
          <div className="w-full flex flex-col gap-6">
            <Link to={"/"}>Customer Services</Link>
            <Link to={"/"}>My Account</Link>
            <Link to={"/"}>Find Us</Link>
            <Link to={"/"}>Gift Card</Link>
            <Link to={"/"}>Legal & Privacy</Link>
          </div>
         </div>
        </div>
        {/**Right */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col justify-between xl:w-full gap-2 p-4 border-red-300">
          <h1 className="text-lg font-semibold"> SUBSCRIBE</h1>
          <p>
            {" "}
            Stay updated with the latest DevOps news from Richard Mucene, including home projects, vlogs, 
            trends, promotions, job opportunities, and more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-gray-700 text-white">JOIN</button>
            
          </div>
          <span className="font-semibold">Buy me Coffee</span>
            <div className="flex items-center gap-3 flex-wrap">
              <img
                src={vodapay}
                alt="RICHARD-MUCENE-FACEBOOK-DEVOPS"
                className="h-16 w-26 cursor-pointer"
              />
              <img
                src={mpesa}
                alt="Richard-Mucene-DevOps-instagram"
                className="h-16 w-26 cursor-pointer filter grayscale"
              />
              <img
                src={paypal}
                alt="Richard-Mucene-DevOps-Twitter-X"
                className="h-10 w-16 cursor-pointer filter grayscale"
              />
              <img
                src={mastercard}
                alt="Richard-Mucene-DevOps-PINTREST"
                className="h-8 w-16 cursor-pointer filter grayscale"
              />
                <img
                src={visa}
                alt="Richard-Mucene-DevOps-PINTREST"
                className="h-8 w-16 cursor-pointer filter grayscale"
              />
            </div>
        </div>
      </div>
      {/**BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-2 mb-0">
       
        <p className="text-center">Copyright 2024 Richard Mucene - All rights reserved. <br />
        All trademarks, service marks, trade names, product names, logos and trade dress appearing on my website are the property of their respective owners.
</p>

        
       
      </div>
    </div>
  );
};

export default Footer;
