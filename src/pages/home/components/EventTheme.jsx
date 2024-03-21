import { faEye, faDroplet, faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const EventTheme = ({ color, setColor, typeface, setTypeface }) => {
  const themes = ["Minimal", "Modern", "Rustic", "Chalkboard"];

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 text-center rounded-md min-h-48">
        <h1 className="text-4xl font-bold mb-4 text-white">YOU ARE INVITED</h1>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`mx-2 px-4 py-2 rounded-md ${
              index === 0
                ? "bg-gray-200 text-gray-800"
                : "bg-white text-gray-600"
            }`}
          >
            {theme}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 mb-4 bg-gray-100 p-5 w-full">
        <div className="flex gap-10 items-center justify-between">
          <label htmlFor="capacity" className="text-gray-700 mr-2">
            <FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon> Color
          </label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className=" rounded-md py-2 px-3 focus:outline-none bg-transparent"
          >
            <option value="unlimited">Blue</option>
            <option value="limited">Gray</option>
          </select>
        </div>
        <div className="w-full border-t-2 bg-gray-500"></div>
        <div className="flex gap-10 items-center justify-between">
          <label htmlFor="capacity" className="text-gray-700 mr-2">
            <FontAwesomeIcon icon={faFont}></FontAwesomeIcon> Typeface
          </label>
          <select
            id="typeface"
            value={typeface}
            onChange={(e) => setTypeface(e.target.value)}
            className=" rounded-md py-2 px-3 focus:outline-none bg-transparent"
          >
            <option value="unlimited">Default</option>
            <option value="limited">Sans-Serif</option>
          </select>
        </div>
      </div>
    </div>
  );
};
