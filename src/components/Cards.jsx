import React from "react";
import object1 from "../assets/biskutaising.jpg";
import object2 from "../assets/biskutaising2.jpg";
import object3 from "../assets/background.jpg";

const Cards = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-[1240px] flex-col justify-around sm:flex-row flex items-center mx-auto md:grid-cols-3 px-4">
        <div className="w-full justify-center flex md:my-4 my-16 mx-4 flex-col items-center shadow-gray-400 shadow-xl rounded-xl hover:scale-105 duration-300">
          <img src={object1} alt="/" className="w-20 mt-[-3rem]" />
          <h2 className="font-bold">Single User</h2>
          <p className="font-bold text-2xl my-4">$149</p>
          <div className="text-center w-full">
            <p className="py-2 border-b mx-8 mt-4">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="text-white font-semibold py-2 px-4 rounded-md mx-auto my-6 bg-gradient-to-r from-green-400 via-green-600 to-green-800">
            Start Trial
          </button>
        </div>
        <div className="w-full justify-center flex md:my-4 my-16 mx-4 flex-col items-center shadow-gray-400 shadow-xl rounded-xl hover:scale-105 duration-300">
          <img src={object1} alt="/" className="w-20 mt-[-3rem]" />
          <h2 className="font-bold">Single User</h2>
          <p className="font-bold text-2xl my-4">$149</p>
          <div className="text-center w-full">
            <p className="py-2 border-b mx-8 mt-4">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="text-white font-semibold py-2 px-4 rounded-md mx-auto my-6 bg-gradient-to-r from-green-400 via-green-600 to-green-800">
            Start Trial
          </button>
        </div>
        <div className="w-full justify-center flex md:my-4 my-16 mx-4 flex-col items-center shadow-gray-400 shadow-xl rounded-xl hover:scale-105 duration-300">
          <img src={object1} alt="/" className="w-20 mt-[-3rem]" />
          <h2 className="font-bold">Single User</h2>
          <p className="font-bold text-2xl my-4">$149</p>
          <div className="text-center w-full">
            <p className="py-2 border-b mx-8 mt-4">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="text-white font-semibold py-2 px-4 rounded-md mx-auto my-6 bg-gradient-to-r from-green-400 via-green-600 to-green-800">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
