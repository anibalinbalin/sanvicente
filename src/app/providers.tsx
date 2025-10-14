'use client';

import { ThemeProvider } from 'next-themes';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { useAutoTheme } from '@/app/_hooks/useAutoTheme';
import { getAutoThemeFromTime } from '@/app/_utils/helpers/time.helpers';

interface ProvidersProps {
  children: React.ReactNode;
}

// Component to initialize auto-theme system
const AutoThemeInitializer = ({ children }: { children: React.ReactNode }) => {
  useAutoTheme();
  return <>{children}</>;
};

export const Providers = ({ children }: ProvidersProps) => {
  // Get initial theme based on time of day
  const initialTheme = typeof window !== 'undefined'
    ? getAutoThemeFromTime()
    : 'light';

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme={initialTheme}
      enableSystem={false}
      value={{
        light: 'light-theme',
        dark: 'dark-theme'
      }}
      disableTransitionOnChange
    >
      <AutoThemeInitializer>
        <BalancerProvider>{children}</BalancerProvider>
      </AutoThemeInitializer>
    </ThemeProvider>
  );
};
