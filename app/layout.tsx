import React, { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar'; // Adjust this import path depending on where your Navbar file lives
import Footer from '@/components/layout/Footer'; // Adjust this import path depending on where your Navbar file lives
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'DidYet - The Future of Workflow Intelligence',
  description: 'Premium, modern SaaS-style platform built for fast, precision workflows.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#0F172A] text-white antialiased selection:bg-[#22E3A9]/30 selection:text-white overflow-x-hidden flex flex-col">
        
        {/* Dynamic Grid Pattern Background Layer */}
        <div 
          className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.25]" 
          aria-hidden="true" 
        />

        {/* Premium Ambient Light Glowing Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          {/* Top Teal Blob */}
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-[#22E3A9]/15 to-[#14D9C4]/5 rounded-full blur-[140px]" />
          
          {/* Middle/Bottom Right Emerald Blur */}
          <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-[#14D9C4]/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>
    <div className="w-full bg-red-600 text-white font-bold text-center py-2 px-4 text-xs md:text-sm tracking-wide shadow-md uppercase relative z-50">
          This site is under development and all the information shown here is wrong.
        </div>
        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Viewport */}
        <div className="relative z-10 flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}