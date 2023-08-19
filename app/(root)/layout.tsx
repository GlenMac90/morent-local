import "../globals.css";
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "../providers/Provider";
import NavBar from "@/components/NavBar";
import { userDetails } from "@/app/test/userDetails";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Morent",
  description: "The best platform for car rental",
};

const isUserLoggedIn = await userDetails();
console.log(isUserLoggedIn);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={plusJakartaSans.className}>
          <Provider>
            <NavBar userLoggedIn={isUserLoggedIn} />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
