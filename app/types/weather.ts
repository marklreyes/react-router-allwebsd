export interface WeatherData {
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
