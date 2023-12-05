import React from "react";

import { Card } from "./ui/card";
import { ForecastWeatherData } from "@/lib/types";
import { formatSunTimeWithAMPM } from "@/lib/dateUtils";
import IconComponent from "./ui/icon-component";

interface ForecastProps {
  data: ForecastWeatherData;
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  return (
    <Card className="relative flex h-auto w-full shrink-0 flex-col justify-between overflow-hidden p-2 lg:p-4">
      <div className="absolute " />
      <div className="inline-flex flex-row w-auto overflow-x-auto">
        {data.list.map((item, index) => (
          <div
            className="flex flex-col justify-between items-center"
            key={`${index}-${item.dt}`}
          >
            <span className="text-lg font-semibold w-24  text-center">
              {formatSunTimeWithAMPM(item.dt, data.city.timezone)}
            </span>
            <div className="flex gap-2 dark:text-neutral-500">
              <span>High: {Math.round(item.main.temp_max)}&deg;</span>
            </div>
            <IconComponent
              weatherCode={item.weather[0].id}
              x={item.sys.pod}
              className="h-9 w-9"
            />
            <div className="font-semibold">{item.weather[0].main}</div>
            <div className="flex gap-2 dark:text-neutral-500">
              <span>Low: {Math.round(item.main.temp_min)}&deg;</span>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-between text-lg font-semibold">
        <span>
          {convertToDate(data.city.timezone, item.dt, "long")}
        </span>
      </div> */}
    </Card>
  );
};

export default Forecast;
