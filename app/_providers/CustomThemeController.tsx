"use client";

export default function CustomThemeController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={"light"}>
      <body>{children}</body>
    </html>
  );
}
