import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../NavBar/logo.png";
import facebook from "../NavBarIcons/facebook-richard-mucene.png";
import twitter from "../NavBarIcons/twitter-X-richard-mucene.png";
import instagram from "../NavBarIcons/instagram-richard-mucene.png";
import pintrest from "./pinterest.png";
import github from "../NavBarIcons/github-richard-mucene.png";
import linkedin from "../NavBarIcons/linkedin-richard-mucene.png";
import mpesa from "./richard-mucene-devsecops-developer-johannesburg-azure-aws-gcp-work.png";
import vodapay from "./Vodapay.png";
import mastercard from "./mastercard.png";
import visa from "./visa.png";
import paypal from "./paypal.png";
import { database } from "../../firebase-config"; // Adjust the import as necessary
import { ref, set } from "firebase/database"; // Import ref and set

interface Props {}

const Footer = (props: Props) => {
  const [email, setEmail] = useState(""); // State to hold email input
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  // Function to handle email submission
  const handleJoin = async () => {
    if (email) {
      const emailRef = ref(
        database,
        "subscribers/" + email.replace(/\./g, ",")
      );
      await set(emailRef, { email });
      setEmail(""); // Clear the input after submission
      setSuccessMessage("Successfully subscribed!"); // Set success message
      setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="select-none px-2 py-2 sm:py-24 sm:px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 mt-2 sm:mt-4">
      {/**TOPc */}
      <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-24 sm:p-8 p-2 min-w-fit">
        {/**Left fd*/}
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
          <p className="font-bold sm:text-xl">South Africa</p>
          <p className="text-xs sm:text-lg">
            12 Minerva Street, Kensington Johannesburg. 2094
          </p>
          <span className="font-semibold text-xs sm:text-lg">
            e.mushene@gmail.com
          </span>
          <span className="font-semibold text-xs sm:text-lg">
            +27 72 620 3386
          </span>
          <br />
          <br />
          <p className="font-bold text-xl">Kenya</p>
          <span className="font-semibold text-xs sm:text-lg">
            +254 70 248 2303
          </span>
          <p className="text-xs sm:text-lg">Nairobi Area</p>
          <div className="flex gap-2 items-center min-w-fit">
            <a
              href="https://www.facebook.com/baba.gillian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="RICHARD-MUCENE-FACEBOOK-DEVOPS"
                className="h-6 w-6 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/swordinc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Richard-Mucene-DevOps-instagram"
                className="h-6 w-6 cursor-pointer"
              />
            </a>

            <a
              href="https://x.com/swordinc"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={twitter}
                alt="Richard-Mucene-DevOps-Twitter-X"
                className="h-6 w-6 cursor-pointer"
              />
            </a>

            <img
              src={pintrest}
              alt="Richard-Mucene-DevOps-PINTREST"
              className="h-6 w-6 cursor-pointer"
            />
            <a
              href="https://github.com/emushene"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={github}
                alt="Richard-Mucene-DevOps-Github"
                className="h-6 w-6 cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-mucene-307b0757/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={linkedin}
                alt="Richard-Mucene-DevOps-Github"
                className="h-6 w-6 cursor-pointer"
              />
            </a>
          </div>
        </div>
        {/**Center */}
        <div className="hidden lg:flex justify-between w-1/2 sm:gap-8">
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
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col justify-between xl:w-fit gap-2 sm:p-4 ">
          <h1 className="text-lg font-semibold">SUBSCRIBE</h1>
          <p className="text-xs sm:text-sm">
            Stay updated with the latest DevOps news from Richard Mucene,
            including home projects, vlogs, trends, promotions, job
            opportunities, and more!
          </p>
          <div className="flex">
            <input
              type="text"
              value={email} // Bind the input value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              placeholder="Email Address"
              className="p-2 md:p-4 w-3/4 md:text-lg"
            />
            <button
              onClick={handleJoin}
              className="w-1/4 bg-gray-800 text-white hover:opacity-65"
            >
              JOIN
            </button>
          </div>
          {successMessage && (
            <p className="mt-2 text-green-400">{successMessage}</p> // Success message
          )}
          <span className="font-semibold text-sm md:text-lg">
            Buy me Coffee
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            <img
              src={vodapay}
              alt="richard-mucene-vodacom"
              className="md:h-12 md:w-28 cursor-pointer h-8 w-16"
            />
            <img
              src={mpesa}
              alt="richard-mucene-mpesa"
              className="md:h-10 md:w-26 cursor-pointer h-8 w-10"
            />
            <img
              src={paypal}
              alt="Richard-Mucene-DevOps-Twitter-X"
              className="md:h-10 md:w-16 cursor-pointer h-4 w-8"
            />
            <img
              src={mastercard}
              alt="Richard-Mucene-DevOps-PINTREST"
              className="md:h-8 md:w-16 cursor-pointer h-4 w-8"
            />
            <img
              src={visa}
              alt="Richard-Mucene-DevOps-PINTREST"
              className="md:h-8 md:w-16 cursor-pointer h-4 w-8"
            />
          </div>
        </div>
      </div>
      {/**BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <p className="text-xs sm:text-sm text-center">
          Copyright 2024 Richard Mucene - All rights reserved. <br />
          All trademarks, service marks, trade names, product names, logos and
          trade dress appearing on my website are the property of their
          respective owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
