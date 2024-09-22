"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <SessionProvider>
      <NextUIProvider
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        navigate={router.push}
        className='flex h-full w-full flex-col'>
        <NextThemesProvider attribute='class' defaultTheme='dark'>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
