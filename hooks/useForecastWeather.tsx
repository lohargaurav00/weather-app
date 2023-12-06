import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ForecastWeatherData } from "@/lib/types";
import { RootState } from "@/redux/store/store";

const useForecastWeather = () => {
  const { coordinates } = useSelector((state: RootState) => state.coordinates);
  const [forecastWeather, setForecastWeather] =
    useState<ForecastWeatherData | null>(null);

  const latitude = coordinates.lat;
  const longitude = coordinates.lon;

  const getForecastWeather = useCallback(async () => {
    const response = await fetch(
      `/api/get-forecast-weather?lat=${latitude}&lon=${longitude}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    return data;
  }, [latitude, longitude]);

  useEffect(() => {
    try {
      getForecastWeather().then((data) => {
        setForecastWeather(data);
      });
    } catch (error: any) {
      new Error(error.message);
    }
  }, [latitude, longitude]);

  return { forecastWeather };
};

export default useForecastWeather;
