import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/userContext";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { RoomProvider } from "@/context/roomContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voeja Scrum Poker",
  description: "A tool for agile estimations using Scrum Poker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased h-screen w-screen text-xl`}
      >
        <ToastProvider>
          <RoomProvider>
            <UserProvider>{children}</UserProvider>
          </RoomProvider>
        </ToastProvider>
        <Toaster />
      </body>
    </html>
  );
}
