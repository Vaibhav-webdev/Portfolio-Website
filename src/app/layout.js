import { Toaster } from "sonner"
import "./globals.css"
// import SessionProviderWrapper from "./components/SessionProviderWrapper"
import Providers from "./providers"
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', // optional but recommended
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // jitne weights chahiye
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // optional
  variable: '--font-inter', // optional but recommended
});

export const metadata = {
  title: "Vaibhav Shukla",
  description: "Portfolio Website of Vaibhav Shukla a full stack web developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.className}>
      <body className={inter.variable}>
        {/* <SessionProviderWrapper> */}
          <Providers>
              {children}
              <Toaster
              position="top-center"/>
          </Providers>
        {/* </SessionProviderWrapper> */}
      </body>
    </html>
  )
}
