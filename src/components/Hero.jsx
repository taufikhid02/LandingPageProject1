import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white bg-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="transition-all duration-500 text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="transition-all duration-500 md: text-4xl sm:text-6xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="transition-all duration-500 md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SAaS"]}
            typespeed={120}
            backspeed={140}
            loop
          />
        </div>
        <p className="transition-all duration-500 md:text-2xl text-xl font-bold text-gray-500 py-4 px-4">
          Monitor your data analytics to increase revenue for BTB, BTC, & SAAS
          platforms.
        </p>
        <button className="text-white font-semibold py-2 px-4 rounded-md mx-auto my-2 bg-gradient-to-r from-green-400 via-green-600 to-green-800">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
