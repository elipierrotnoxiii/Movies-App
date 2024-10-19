"use client";

import {FC, PropsWithChildren, Suspense} from "react";
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers: FC<PropsWithChildren> = ({children}) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Suspense fallback={<div>Loading...</div>}>
        {children}
        </Suspense>
      </NextThemesProvider>  
    </NextUIProvider>
  )
}

export default Providers;
