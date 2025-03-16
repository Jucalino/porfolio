import "./globals.css";
import { Header } from '../components/header'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio com NextJs',
  description: 'Portfolio',
  openGraph: {
    title: 'Utilizando NextJs',
    description: 'Portfolio'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
