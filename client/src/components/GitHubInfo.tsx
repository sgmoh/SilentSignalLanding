import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, MessageSquare, Users, Bot, Server, ShieldAlert } from "lucide-react";
import { getSilentSignalInfo } from "@/lib/github";

interface BotInfoProps {
  username: string;
  repo: string;
}

export function GitHubInfo({ username, repo }: BotInfoProps) {
  const botInfo = getSilentSignalInfo();
  
  return (
    <Card className="p-6 bg-white/70 backdrop-blur hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <Github className="mr-2 h-5 w-5" />
        <a 
          href={`https://github.com/${username}/${repo}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          {username}/{repo}
        </a>
      </div>
      
      <p className="text-gray-600 mb-4">
        {botInfo.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge variant="outline" className="flex items-center">
          <MessageSquare className="h-3.5 w-3.5 mr-1" />
          <span>Direct Messages</span>
        </Badge>
        
        <Badge variant="outline" className="flex items-center">
          <Users className="h-3.5 w-3.5 mr-1" />
          <span>Bulk Messaging</span>
        </Badge>
        
        <Badge variant="outline" className="flex items-center">
          <Bot className="h-3.5 w-3.5 mr-1" />
          <span>Bot Integration</span>
        </Badge>
        
        <Badge variant="outline" className="flex items-center">
          <Server className="h-3.5 w-3.5 mr-1" />
          <span>Server Management</span>
        </Badge>
        
        <Badge variant="outline" className="flex items-center">
          <ShieldAlert className="h-3.5 w-3.5 mr-1" />
          <span>Rate Control</span>
        </Badge>
      </div>
    </Card>
  );
}