// pages/api/weather/[...params].ts
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const lat = req.nextUrl.searchParams.get("lat");
    const lon = req.nextUrl.searchParams.get("lon");

    if (!lat || !lon) {
      return new Response(JSON.stringify({ message: "Invalid parameters" }), {
        status: 400,
      });
    }
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
