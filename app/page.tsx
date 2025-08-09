'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { Features } from '@/components/layout/Features';
import { About } from '@/components/layout/About';
import { PrivacySecurity } from '@/components/layout/PrivacySecurity';
import { HowItWorks } from '@/components/layout/HowItWorks';
import { Contact } from '@/components/layout/Contact';
import { Footer } from '@/components/layout/Footer';
import { CursorFollower3D } from '@/components/ui/CursorFollower3D';
import { ThreeDBackground } from '@/components/ui/3DBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white" style={{ backgroundColor: '#000000 !important', color: '#ffffff !important' }}>
      <ThreeDBackground />
      <CursorFollower3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <PrivacySecurity />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
