/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  attribute?: string | undefined;
  children?: any;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
