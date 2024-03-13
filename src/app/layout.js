import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/(Components)/Header";
import Providers from "./Providers";
import NavBar from "@/(Components)/NavBar";
import SearchBar from "@/(Components)/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "Movies directory based on TMDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
