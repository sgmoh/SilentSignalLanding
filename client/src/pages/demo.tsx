import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { AuthCard } from "@/components/auth-card";
import { DirectMessagePanel } from "@/components/message-panel/direct-message";
import { BulkMessagePanel } from "@/components/message-panel/bulk-message";
import { StatusPanel } from "@/components/message-panel/status-panel";
import { useAuth } from "@/lib/auth-context";

export default function Demo() {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<"direct" | "bulk">("direct");

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
        {!isAuthenticated ? (
          <Card className="mx-auto max-w-md mt-12 bg-white shadow-md border-gray-100">
            <AuthCard />
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
            {activeTab === "direct" && <DirectMessagePanel />}
            
            {/* Bulk message panel */}
            {activeTab === "bulk" && <BulkMessagePanel />}
            
            {/* Status panel (common to both tabs) */}
            <StatusPanel />
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