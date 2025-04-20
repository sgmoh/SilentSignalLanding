import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, MessageSquare, Users, Server, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Demo() {
  const [token, setToken] = useState("");
  const [showToken, setShowToken] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"direct" | "bulk">("direct");

  const handleAuthentication = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token.trim()) {
      return;
    }
    
    setLoading(true);
    
    // Simulate token validation - in a real app, this would validate with Discord
    setTimeout(() => {
      setAuthenticated(true);
      setLoading(false);
    }, 1500);
  };

  const toggleTokenVisibility = () => {
    setShowToken(!showToken);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      {/* Fixed grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
      
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
        <h1 className="font-semibold">SilentSignal Demo</h1>
      </header>
      
      {/* Main content */}
      <main className="flex-grow container mx-auto p-6 max-w-5xl">
        {!authenticated ? (
          <Card className="mx-auto max-w-md mt-12 bg-white shadow-md border-gray-100">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Bot Authentication</h2>
              
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-4">
                  Enter your Discord bot token to use Silent Signal's messaging features.
                  For this demo, any text will work.
                </p>
                
                <form onSubmit={handleAuthentication} className="space-y-4">
                  <div>
                    <Label htmlFor="bot-token">Bot Token</Label>
                    <div className="relative">
                      <Input
                        type={showToken ? "text" : "password"}
                        id="bot-token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        className="font-mono text-sm"
                        placeholder="Enter your Discord bot token"
                      />
                      <button 
                        type="button"
                        onClick={toggleTokenVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black"
                      >
                        {showToken ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Your bot must have the message intent enabled in the Discord Developer Portal.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#E92019] hover:bg-red-700 text-white"
                    disabled={loading}
                  >
                    {loading ? "Connecting..." : "Connect Bot"}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Interface tabs */}
            <div className="border-b border-gray-200">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("direct")}
                  className={`py-3 px-4 font-medium text-sm inline-flex items-center gap-2 ${
                    activeTab === "direct"
                      ? "text-[#E92019] border-b-2 border-[#E92019]"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  Direct Message
                </button>
                <button
                  onClick={() => setActiveTab("bulk")}
                  className={`py-3 px-4 font-medium text-sm inline-flex items-center gap-2 ${
                    activeTab === "bulk"
                      ? "text-[#E92019] border-b-2 border-[#E92019]"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  <Users className="h-4 w-4" />
                  Bulk Messaging
                </button>
              </div>
            </div>
            
            {/* Direct message panel */}
            {activeTab === "direct" && (
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Send Direct Message</h2>
                  
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="user-id">User ID</Label>
                      <Input
                        id="user-id"
                        placeholder="Discord User ID (e.g. 123456789012345678)"
                        className="font-mono"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#E92019]/30 focus:border-[#E92019]"
                        placeholder="Enter your message here..."
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">
                        Max 2000 characters
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="bg-[#E92019] hover:bg-red-700 text-white"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {/* Bulk message panel */}
            {activeTab === "bulk" && (
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Send Bulk Messages</h2>
                  
                  <div className="mb-4">
                    <Label>Select Server</Label>
                    <div className="mt-2 p-4 border border-dashed rounded-md flex items-center justify-center text-gray-500">
                      <Server className="h-5 w-5 mr-2" />
                      <span>Select a server to view members</span>
                    </div>
                  </div>
                  
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="bulk-message">Message</Label>
                      <textarea
                        id="bulk-message"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#E92019]/30 focus:border-[#E92019]"
                        placeholder="Enter your message here..."
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">
                        Max 2000 characters
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="bg-[#E92019] hover:bg-red-700 text-white"
                      >
                        Send Bulk Messages
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {/* Status panel (common to both tabs) */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Message Status</h2>
                <div className="text-center py-8 text-gray-500">
                  <p>No messages sent yet</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="py-4 px-6 text-center text-sm text-gray-500">
        <p>SilentSignal Demo &copy; {new Date().getFullYear()} &middot; Powered by our partners <span className="font-bold italic text-black">swoosh</span></p>
      </footer>
    </div>
  );
}