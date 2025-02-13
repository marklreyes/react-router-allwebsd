import { useState, useEffect } from "react";
import { TbLoader3 } from "react-icons/tb";
import { GiSadCrab } from "react-icons/gi";

interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    wind_speed_10m: number;
	rain: number;
  };
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const url = "https://api.open-meteo.com/v1/forecast?latitude=32.7157&longitude=-117.1611&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&temperature_unit=fahrenheit";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
			url
        );

        if (!response.ok) {
          throw new Error("Weather data not available");
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch weather");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="text-white"><TbLoader3 />Loading weather...</div>;
  if (error) return <div className="text-white"><GiSadCrab />Error: {error}</div>;
  if (!weather) return null;

  return (
    <div className="w-[330px] mt-16 mx-auto">
      <h5 className="text-white text-xl mb-4 font-semibold">
        San Diego Weather:
      </h5>
      <div className="bg-[#FFC426] p-4 rounded-lg shadow">
        <p className="text-lg font-semibold text-[#3D2F26]">
          {Math.round(weather.current.temperature_2m)}°F
        </p>
        <p className="text-[#3D2F26]">Feels like: {Math.round(weather.current.apparent_temperature)}°F</p>
        <p className="text-[#3D2F26]">Rain: {weather.current.rain}%</p>
        <p className="text-[#3D2F26]">Humidity: {weather.current.relative_humidity_2m}%</p>
        <p className="text-[#3D2F26]">Wind: {Math.round(weather.current.wind_speed_10m)} mph</p>
      </div>
    </div>
  );
}
