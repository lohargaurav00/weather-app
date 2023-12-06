import { useCallback, useEffect, useState } from "react";

import { OpenWeatherData, Coordinates } from "@/lib/types";

const useCurrentWeather = ({ lat, lon }: Coordinates) => {
  const [currentWeather, setCurrentWeather] = useState<OpenWeatherData | null>(
    null
  );

  const latitude = lat || 20.903118;
  const longitude = lon || 74.774986;

  const getCurrentWeather = useCallback(async () => {
    const response = await fetch(
      `/api/get-current-weather?lat=${latitude}&lon=${longitude}`,
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
      getCurrentWeather().then((data) => {
        setCurrentWeather(data);
      });
    } catch (error: any) {
      new Error(error.message);
    }
  }, [latitude, longitude]);

  return { currentWeather };
};

export default useCurrentWeather;
