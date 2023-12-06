import { useCallback, useEffect, useState } from "react";

import { ForecastWeatherData , Coordinates } from "@/lib/types";

const useForecastWeather = ({ lat, lon }: Coordinates) => {
  const [forecastWeather, setForecastWeather] =
    useState<ForecastWeatherData  | null>(null);

  const latitude = lat || 20.903118;
  const longitude = lon || 74.774986;

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
