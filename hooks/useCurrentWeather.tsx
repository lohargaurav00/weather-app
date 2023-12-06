import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "@/redux/store/store";
import { OpenWeatherData} from "@/lib/types";

const useCurrentWeather = () => {
  const { coordinates } = useSelector((state: RootState) => state.coordinates);
  const [currentWeather, setCurrentWeather] = useState<OpenWeatherData | null>(
    null
  );

  const latitude = coordinates.lat;
  const longitude = coordinates.lon;

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
