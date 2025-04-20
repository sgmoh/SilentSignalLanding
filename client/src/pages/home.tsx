import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { GitHubInfo } from "@/components/GitHubInfo";
import { getSilentSignalInfo } from "@/lib/github";

export default function Home() {
  const botInfo = getSilentSignalInfo();
  
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
          
          {/* Bot Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            A powerful Discord messaging solution that lets you directly communicate with your community members through secure bot integration.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mt-4 mb-10">
            <div className="bg-white/50 backdrop-blur p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800">Direct Messaging</h3>
              <p className="text-sm text-gray-600">Send private messages to specific users with ease</p>
            </div>
            <div className="bg-white/50 backdrop-blur p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800">Bulk Messaging</h3>
              <p className="text-sm text-gray-600">Reach multiple users at once with customized delays</p>
            </div>
            <div className="bg-white/50 backdrop-blur p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800">Status Tracking</h3>
              <p className="text-sm text-gray-600">Monitor message delivery with detailed reporting</p>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <Button 
            className="mt-4 px-8 py-4 bg-[#E92019] hover:bg-red-700 text-white font-semibold rounded-lg text-lg transition-all"
          >
            Get Started
          </Button>
          
          {/* GitHub Repository Info */}
          <div className="mt-12 w-full max-w-md">
            <GitHubInfo username="sgmoh" repo="silent-signal" />
          </div>
        </div>
        
        {/* Swoosh Attribution */}
        <div className="absolute bottom-6 md:bottom-10 text-sm text-gray-500 flex items-center">
          <span>Powered by our partners</span>
          <span className="font-bold ml-1 text-black italic">swoosh</span>
        </div>
      </main>
      
      {/* Bottom Grid Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#E92019]/5 to-transparent"></div>
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
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
