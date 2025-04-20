import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 w-full h-full bg-white -z-10"></div>
      
      <main className="container px-6 py-12 mx-auto max-w-5xl flex flex-col items-center justify-center text-center relative">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-center justify-center py-12 md:py-20">
          {/* Logo Animation Container */}
          <div className="logo-container relative mb-10 md:mb-16">
            {/* SilentSignal Logo */}
            <div className="w-40 h-40 md:w-64 md:h-64 relative">
              <Logo />
            </div>
          </div>
          
          {/* Main Tagline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-6 max-w-3xl mx-auto tracking-tight">
            Your all-in-one Discord bot for server management and communication.
          </h1>
          
          {/* Call to Action Button */}
          <Button 
            className="mt-8 px-8 py-4 bg-[#E92019] hover:bg-red-700 text-white font-semibold rounded-lg text-lg transition-all"
          >
            Get Started
          </Button>
        </div>
        
        {/* Swoosh Attribution */}
        <div className="absolute bottom-6 md:bottom-10 text-sm text-gray-500 flex items-center">
          <span>Powered by our partners</span>
          <span className="font-bold ml-1 text-black italic">swoosh</span>
        </div>
      </main>
      
      {/* Bottom Grid Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#E92019]/5 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Grid Highlights */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#E92019] rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#E92019] rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#E92019] rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#E92019] rounded-full opacity-20"></div>
        
        {/* Subtle Corner Accents */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#E92019]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#E92019]/5 to-transparent"></div>
      </div>
    </div>
  );
}
