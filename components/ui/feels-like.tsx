import React from "react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
interface FeelsLikeProps {
  feels_like: number;
  temp: number;
}
const FeelsLike: React.FC<FeelsLikeProps> = ({ feels_like, temp }) => {
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
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
            </svg>
          </i>
          Feels like
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{Math.floor(feels_like)}&deg;</p>
      </CardContent>
      <CardFooter>
        <p>
          {feels_like < temp
            ? "Feels colder than the actual temperature."
            : feels_like > temp
            ? "Feels warmer than the actual temperature."
            : "Feels like the actual temperature."}
        </p>
      </CardFooter>
    </Card>
  );
};

export default FeelsLike;
