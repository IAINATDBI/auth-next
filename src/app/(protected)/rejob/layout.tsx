import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
//import '/home/super/auth-next/src/app/globals.css'
import { cn } from '@/lib/utils';
import NavBar from '@/components/other/NavBar';
import Footer from '@/components/other/Footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Auth Next',
    default: 'Auth Next',
  },
  description: 'A simple authentication service with Auth Next v5!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          fontSans.variable
        )}
      >
        <div className="flex justify-center w-full bg-white">
          <div className="w-full max-w-[1440px] px-4">
            <NavBar />
          </div>
        </div>
        <main className="flex-grow flex justify-center w-full">
          <div className="w-full max-w-[1440px] px-4">
            {children}
          </div>
        </main>
        <div className="flex justify-center w-full bg-[#ff3e4c]">
          <div className="w-full max-w-[1440px] px-4">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
