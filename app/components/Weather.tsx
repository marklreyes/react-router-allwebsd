import { useState, useEffect } from "react";
import { TbLoader3 } from "react-icons/tb";
import { GiSadCrab, GiThink } from "react-icons/gi";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog,  WiHumidity, WiStrongWind } from "react-icons/wi";
import { useTheme } from "~/context/ThemeContext";

interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    wind_speed_10m: number;
		rain: number;
		weather_code: number;
  };
  current_units: {
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    wind_speed_10m: string;
		rain: string;
		weather_code: string;
  };
}

const getWeatherIcon = (code: number) => {
  switch (code) {
    case 0:
    case 1:
      return <WiDaySunny className="text-3xl" />;
    case 2:
    case 3:
      return <WiCloudy className="text-3xl" />;
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
      return <WiRain className="text-3xl" />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <WiSnow className="text-3xl" />;
    case 95:
    case 96:
    case 99:
      return <WiThunderstorm className="text-3xl" />;
    case 45:
    case 48:
      return <WiFog className="text-3xl" />;
    default:
      return <WiDaySunny className="text-3xl" />;
  }
};

export default function Weather() {
	const { theme } = useTheme();

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const url = "https://api.open-meteo.com/v1/forecast?latitude=32.7157&longitude=-117.1611&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&temperature_unit=fahrenheit";
  const REFRESH_INTERVAL = 300000; // 5 minutes in milliseconds


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
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

    // Initial fetch
    fetchWeather();

    // Set up interval for subsequent fetches
    const intervalId = setInterval(fetchWeather, REFRESH_INTERVAL);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div className={`${theme.primary} ${theme.text}`}><TbLoader3 />Loading weather...</div>;
  if (error) return <div className={`${theme.primary} ${theme.text}`}><GiSadCrab />Error: {error}</div>;
  if (!weather) return null;

  return (
		<div className={`${theme.primary} ${theme.text} mx-auto mb-8 `}>
      <h5 className={`${theme.text} text-xl mb-1 font-semibold`}>
        Currently in San Diego:
      </h5>
			<div className={`${theme.primary} ${theme.text} pt-2`}>
      	<p className="text-2xl font-semibold text-[#2F241D] flex items-center gap-2">
        {getWeatherIcon(weather.current.weather_code)}
					<span>
						{Math.round(weather.current.temperature_2m)}{weather.current_units.temperature_2m}
					</span>
				</p>
				<p className="flex items-center justify-between text-[#2F241D]">
					<span className="flex items-center gap-2">
						<GiThink />Feels like:
					</span>
					<span>{Math.round(weather.current.apparent_temperature)}{weather.current_units.apparent_temperature}</span>
				</p>
				<p className="flex items-center justify-between text-[#2F241D]">
					<span className="flex items-center gap-2">
						<WiRain />Rain:
					</span>
					<span>{weather.current.rain}{weather.current_units.rain}</span>
				</p>
				<p className="flex items-center justify-between text-[#2F241D]">
					<span className="flex items-center gap-2">
						<WiHumidity />Humidity:
					</span>
					<span>{weather.current.relative_humidity_2m}{weather.current_units.relative_humidity_2m}</span>
				</p>
				<p className="flex items-center justify-between text-[#2F241D]">
					<span className="flex items-center gap-2">
						<WiStrongWind />Wind:
					</span>
					<span>{Math.round(weather.current.wind_speed_10m)}{weather.current_units.wind_speed_10m}</span>
				</p>
			</div>
    </div>
  );
}
