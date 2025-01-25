// app/layout.js
import { NextUIProvider } from "@nextui-org/react";
import './globals.css';

export const metadata = {
  title: 'Digital Name Card - Pongwara Jantee',
  description: 'Digital name card for Pongwara Jantee, Managing Director at Bulls Group.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}