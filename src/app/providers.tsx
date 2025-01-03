'use client';

import { ThemeProvider } from 'next-themes';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem={false}
      value={{
        light: 'light-theme',
        dark: 'dark-theme'
      }}
      disableTransitionOnChange
    >
      <BalancerProvider>{children}</BalancerProvider>
    </ThemeProvider>
  );
};
