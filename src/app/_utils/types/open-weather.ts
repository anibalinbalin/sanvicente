import { z } from 'zod';

const Weather = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const Main = z.object({
  temp: z.number(),
  feels_like: z.number().optional(),
  temp_min: z.number().optional(),
  temp_max: z.number().optional(),
  pressure: z.number().optional(),
  humidity: z.number().optional(),
});

export const OpenWeatherResponseZod = z.object({
  weather: z.array(Weather),
  main: Main,
}).passthrough();

export type OpenWeatherResponse = z.infer<typeof OpenWeatherResponseZod>;

export interface WeatherData {
  temp: number | undefined;
  icon: string | undefined;
  description: string | undefined;
}
