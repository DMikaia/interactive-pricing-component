// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="w-full h-full flex flex-col justify-center items-center gap-2">
      {children}
    </NextUIProvider>
  );
}
