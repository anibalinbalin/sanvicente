'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { getAutoThemeFromTime } from '@/app/_utils/helpers/time.helpers';

const THEME_MODE_KEY = 'theme-mode'; // 'auto' or 'manual'
const CHECK_INTERVAL = 10 * 60 * 1000; // 10 minutes in milliseconds

/**
 * Custom hook that manages automatic theme switching based on time of day.
 *
 * Behavior:
 * - In "auto" mode: Automatically switches theme based on sunset/sunrise times
 * - In "manual" mode: User has manually selected a theme, auto-switching is disabled
 * - Checks every 10 minutes for theme changes
 */
export const useAutoTheme = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const checkAndUpdateTheme = () => {
      const mode = localStorage.getItem(THEME_MODE_KEY) || 'auto';

      // Only auto-switch if in auto mode
      if (mode === 'auto') {
        const autoTheme = getAutoThemeFromTime();

        // Only update if different from current theme
        if (theme !== autoTheme) {
          setTheme(autoTheme);
        }
      }
    };

    // Initial check
    checkAndUpdateTheme();

    // Set up interval to check every 10 minutes
    const interval = setInterval(checkAndUpdateTheme, CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, [theme, setTheme]);
};

/**
 * Sets the theme mode to manual, disabling automatic theme switching.
 * Call this when the user manually selects a theme via the theme toggle.
 */
export const setManualMode = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(THEME_MODE_KEY, 'manual');
  }
};

/**
 * Sets the theme mode to auto, enabling automatic theme switching based on time.
 */
export const setAutoMode = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(THEME_MODE_KEY, 'auto');
  }
};

/**
 * Gets the current theme mode.
 * @returns 'auto' or 'manual'
 */
export const getThemeMode = (): 'auto' | 'manual' => {
  if (typeof window === 'undefined') return 'auto';
  return (localStorage.getItem(THEME_MODE_KEY) as 'auto' | 'manual') || 'auto';
};
