"use client";
import React from "react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import CurrentWeather from "@/components/CurrentWeather";
import Compass from "@/components/ui/compase";
import Sunset from "@/components/ui/sunset";
import FeelsLike from "@/components/ui/feels-like";
import Humidity from "@/components/ui/humidity";
import Visibility from "@/components/ui/visibility";
import Pressure from "@/components/ui/pressure";
import Header from "@/components/Header";
import Forecast from "@/components/Forecast";

import data from "@/coverage/currentData.json";
import forecastData from "@/coverage/forecastData.json";

const page = () => {
  return (
    <div className="h-full  xl:h-screen bg-slate-200 ">
      <Header/>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center xl:items-start p-2 lg:p-4">
        <div className="w-full sm:w-[350px] h-full pb-2 xl:pr-4">
          <CurrentWeather data={data} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 row-span-2 gap-2 lg:gap-4">
          <Compass speed={data.wind.speed} deg={data.wind.deg} />
          <Sunset
            sunrise={data.sys.sunrise}
            sunset={data.sys.sunset}
            timezone={data.timezone}
          />
          <FeelsLike feels_like={data.main.feels_like} temp={data.main.temp} />
          <Humidity humidity={data.main.humidity} />
          <Visibility visibility={data.visibility} />
          <Pressure pressure={data.main.pressure} />
        </div>
      </div>
      <div className=" px-2  lg:px-4">
        <Forecast data={forecastData} />
      </div>
    </div>
  );
};

export default page;
