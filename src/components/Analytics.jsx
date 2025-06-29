import React from "react";
import business from "../assets/business.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={business}
          alt="/"
          className="mx-auto my-4 w-[500px] justify-center"
        />
        <div className="flex-col justify-center px-4 flex">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-3xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            repellendus incidunt laudantium corporis deserunt soluta eos vel nam
            suscipit cupiditate itaque asperiores modi aliquam perferendis eum
            quibusdam quidem reprehenderit expedita.
          </p>
          <button className="text-white font-semibold py-2 px-4 rounded-md mx-auto my-4 bg-gradient-to-r from-green-400 via-green-600 to-green-800">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
