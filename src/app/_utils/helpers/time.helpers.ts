import * as SunCalc from 'suncalc';

// Montevideo, Uruguay coordinates
const MONTEVIDEO_LATITUDE = -34.9011;
const MONTEVIDEO_LONGITUDE = -54.9544;

/**
 * Determines if it's currently nighttime in Montevideo based on actual sunset/sunrise times.
 * Uses astronomical calculations that automatically adjust for seasons.
 *
 * @returns true if the sun is currently down (nighttime), false otherwise
 */
export const isNightTime = (): boolean => {
  const now = new Date();

  // Get sun times for today in Montevideo
  const times = SunCalc.getTimes(now, MONTEVIDEO_LATITUDE, MONTEVIDEO_LONGITUDE);

  // Use sunset and sunrise times
  const sunset = times.sunset;
  const sunrise = times.sunrise;

  // If current time is after sunset or before sunrise, it's night
  return now > sunset || now < sunrise;
};

/**
 * Returns the appropriate theme ('light' or 'dark') based on the current time of day.
 *
 * @returns 'dark' if it's nighttime, 'light' if it's daytime
 */
export const getAutoThemeFromTime = (): 'light' | 'dark' => {
  return isNightTime() ? 'dark' : 'light';
};
