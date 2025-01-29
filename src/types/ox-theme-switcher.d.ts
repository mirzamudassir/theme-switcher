declare module 'ox-theme-switcher' {
    import { ReactNode } from 'react';
  
    export const ThemeContext: React.Context<{
      theme: 'light' | 'dark';
      toggleTheme: () => void;
    }>;
  
    export const ThemeProvider: React.FC<{ children: ReactNode }>;
    export const ThemeSwitcher: React.FC;
  }