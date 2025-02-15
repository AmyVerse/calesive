import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Font configuration
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

// Metadata
export const metadata: Metadata = {
  title: "Calesive - Calendar Management",
  description: "A modern calendar management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={poppins.variable}>
        <body className="dark:bg-[#040712] bg-gray-300 antialiased min-h-screen font-poppins">
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar (Left Pane) */}
            <aside className="hidden md:flex md:flex-col w-64 dark:bg-gray-900 text-white">
              <Sidebar />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-auto">
              {/* Top Navbar */}
              <header className="sticky top-0 z-50">
                <Navbar />
              </header>

              {/* Dynamic Page Content */}
              <main className="flex-1 p-4">
                {children}
              </main>

              {/* Footer */}
              <footer className="dark:bg-gray-800 text-white p-4">
                <Footer />
              </footer>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
