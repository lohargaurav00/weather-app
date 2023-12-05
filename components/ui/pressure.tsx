import React from "react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

interface PressureProps {
  pressure: number;
}
const Pressure: React.FC<PressureProps> = ({ pressure }) => {
  return (
    <Card className="flex h-52 sm:h-48 flex-col justify-between overflow-hidden">
      <CardHeader>
        <CardTitle className="inline-flex gap-2 items-center justify-start font-semibold text-lg">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m12 14 4-4" />
              <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </svg>
          </i>
          Pressure
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{pressure} hPa</p>
      </CardContent>
      <CardFooter>
        <p>
          {pressure < 1000
            ? "Low pressure. Expect changes in the weather."
            : pressure >= 1000 && pressure <= 1010
            ? "Normal pressure. Typical weather conditions."
            : "High pressure. Expect stable and clear weather."}
        </p>
      </CardFooter>
    </Card>
  );
};

export default Pressure;
