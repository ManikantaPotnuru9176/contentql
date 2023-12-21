"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CustomThemeController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={"light"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
