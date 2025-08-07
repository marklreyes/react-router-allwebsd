import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=32.7157&longitude=-117.1611&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles";

  try {
    const response = await fetch(WEATHER_URL);

    if (!response.ok) {
      throw new Error(`Weather API responded with ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Validate the response structure
    if (!data || !data.current) {
      throw new Error('Invalid weather data structure received');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300' // 5 minutes cache
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Weather fetch error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching weather data' })
    };
  }
};
