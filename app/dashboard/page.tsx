"use client";
import React from "react";
import { BounceLoader } from "react-spinners";

import CurrentWeather from "@/components/CurrentWeather";
import Compass from "@/components/ui/compase";
import Sunset from "@/components/ui/sunset";
import FeelsLike from "@/components/ui/feels-like";
import Humidity from "@/components/ui/humidity";
import Visibility from "@/components/ui/visibility";
import Pressure from "@/components/ui/pressure";
import Header from "@/components/Header";
import Forecast from "@/components/Forecast";

import useCurrentWeather from "@/hooks/useCurrentWeather";
import useForecastWeather from "@/hooks/useForecastWeather";

const Page = () => {
  const { currentWeather } = useCurrentWeather();

  const { forecastWeather } = useForecastWeather();

  if (!currentWeather || !forecastWeather) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <BounceLoader color="#000" />
      </div>
    );
  }

  return (
    <div className="h-full  xl:h-screen bg-slate-200 ">
      <Header />
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center xl:items-start p-2 lg:p-4">
        <div className="w-full sm:w-[350px] h-full pb-2 xl:pr-4">
          <CurrentWeather data={currentWeather} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 row-span-2 gap-2 lg:gap-4">
          <Compass
            speed={currentWeather.wind.speed}
            deg={currentWeather.wind.deg}
          />
          <Sunset
            sunrise={currentWeather.sys.sunrise}
            sunset={currentWeather.sys.sunset}
            timezone={currentWeather.timezone}
          />
          <FeelsLike
            feels_like={currentWeather.main.feels_like}
            temp={currentWeather.main.temp}
          />
          <Humidity humidity={currentWeather.main.humidity} />
          <Visibility visibility={currentWeather.visibility} />
          <Pressure pressure={currentWeather.main.pressure} />
        </div>
      </div>
      <div className=" px-2  lg:px-4">
        <Forecast data={forecastWeather} />
      </div>
    </div>
  );
};

export default Page;
