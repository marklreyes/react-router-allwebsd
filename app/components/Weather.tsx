import { useState, useEffect } from "react";
import { TbLoader3 } from "react-icons/tb";
import { GiSadCrab, GiThink } from "react-icons/gi";
import { SiTheweatherchannel } from "react-icons/si";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog,  WiHumidity, WiStrongWind, WiTime8 } from "react-icons/wi";
import { useTheme } from "~/context/ThemeContext";

interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    wind_speed_10m: number;
		rain: number;
		weather_code: number;
		time: string
  };
  current_units: {
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    wind_speed_10m: string;
		rain: string;
		weather_code: string;
		time: string

  };
}

const getWeatherIcon = (code: number) => {
  switch (code) {
    case 0:
    case 1:
      return <WiDaySunny />;
    case 2:
    case 3:
      return <WiCloudy />;
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
      return <WiRain />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <WiSnow />;
    case 95:
    case 96:
    case 99:
      return <WiThunderstorm />;
    case 45:
    case 48:
      return <WiFog />;
    default:
      return <WiDaySunny />;
  }
};

const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short"

  }).format(date);
};

export default function Weather() {
  const { theme } = useTheme();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const NETLIFY_FUNCTION_URL = "/.netlify/functions/fetch-weather";
  const REFRESH_INTERVAL = 900000; // 15 minutes

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(NETLIFY_FUNCTION_URL);
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
    const intervalId = setInterval(fetchWeather, REFRESH_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div className={`${theme.primary} ${theme.text}`}><TbLoader3 />Loading weather...</div>;
  if (error) return <div className={`${theme.primary} ${theme.text}`}><GiSadCrab />Error: {error}</div>;
  if (!weather) return null;

  return (
		<div className={`${theme.primary} ${theme.text} mx-auto`}>
			<h5 className={`${theme.text} text-xl mb-1 font-semibold flex items-center gap-2`}>
				<SiTheweatherchannel className="text-2xl" />Currently in San Diego
			</h5>
			<div className={`${theme.primary} ${theme.text} pt-2`}>
				<p className={`${theme.text} text-3xl font-semibold flex items-center justify-center gap-2`}>
					{getWeatherIcon(weather.current.weather_code)}
					<span>
						{Math.round(weather.current.temperature_2m)}{weather.current_units.temperature_2m}
					</span>
				</p>
				<p className={`${theme.text} flex items-center justify-between`}>
					<span className="flex items-center gap-2">
						<GiThink />Feels like:
					</span>
					<span>{Math.round(weather.current.apparent_temperature)}{weather.current_units.apparent_temperature}</span>
				</p>
				<p className={`${theme.text} flex items-center justify-between`}>
					<span className="flex items-center gap-2">
						<WiRain />Rain:
					</span>
					<span>{weather.current.rain}{" "}{weather.current_units.rain}</span>
				</p>
				<p className={`${theme.text} flex items-center justify-between`}>
					<span className="flex items-center gap-2">
						<WiHumidity />Humidity:
					</span>
					<span>{weather.current.relative_humidity_2m}{weather.current_units.relative_humidity_2m}</span>
				</p>
				<p className={`${theme.text} flex items-center justify-between`}>
					<span className="flex items-center gap-2">
						<WiStrongWind />Wind:
					</span>
					<span>{Math.round(weather.current.wind_speed_10m)}{" "}{weather.current_units.wind_speed_10m}</span>
				</p>
				<p className={`${theme.text} flex items-center justify-between`}>
					<span className="flex items-center gap-2">
						<WiTime8 />Updated:
					</span>
					<span>{formatDateTime(weather.current.time)}</span>
				</p>
			</div>
    </div>
  );
}
