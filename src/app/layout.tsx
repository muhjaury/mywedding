import WidgetProvider from "@/context";
import "./global.scss";

export const metadata = {
  title: "My Wedding",
  description: "Created by Muhammad Jaury",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <WidgetProvider>
        <body>{children}</body>
      </WidgetProvider>
    </html>
  );
}
