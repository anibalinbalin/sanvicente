'use client';

import { ThemeProvider } from 'next-themes';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { useAutoTheme } from '@/app/_hooks/useAutoTheme';

interface ProvidersProps {
  children: React.ReactNode;
}

// Component to initialize auto-theme system
const AutoThemeInitializer = ({ children }: { children: React.ReactNode }) => {
  useAutoTheme();
  return <>{children}</>;
};

export const Providers = ({ children }: ProvidersProps) => {
  // Use consistent initial theme for both server and client to avoid hydration mismatch
  // The useAutoTheme hook will update to the correct theme after hydration
  const initialTheme = 'light';

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
