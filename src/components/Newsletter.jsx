import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-white text-black rounded-md flex w-full p-2"
            />
            <button className="w-[200px] text-white font-medium py-2 px-4 rounded-md m-4 bg-gradient-to-r from-green-400 via-green-600 to-green-800">
              Notify Now
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Data</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
