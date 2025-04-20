import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Github, MessageSquare, Users, Bot, Server, ShieldAlert, 
  Star, GitFork, AlertCircle, Code 
} from "lucide-react";
import { getSilentSignalInfo, fetchRepositoryStats } from "@/lib/github";

interface BotInfoProps {
  username: string;
  repo: string;
}

export function GitHubInfo({ username, repo }: BotInfoProps) {
  const botInfo = getSilentSignalInfo();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/github', username, repo],
    queryFn: () => fetchRepositoryStats(username, repo)
  });
  
  if (isLoading) {
    return (
      <Card className="p-6 bg-white/70 backdrop-blur">
        <div className="flex items-center mb-4">
          <Github className="mr-2 h-5 w-5" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="h-4 w-full mb-4" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
      </Card>
    );
  }
  
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
        {data?.description || botInfo.description}
      </p>
      
      {data && (
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="flex items-center">
            <Star className="h-3.5 w-3.5 mr-1" />
            <span>{data.stars || 0}</span>
          </Badge>
          
          <Badge variant="outline" className="flex items-center">
            <GitFork className="h-3.5 w-3.5 mr-1" />
            <span>{data.forks || 0}</span>
          </Badge>
          
          <Badge variant="outline" className="flex items-center">
            <AlertCircle className="h-3.5 w-3.5 mr-1" />
            <span>{data.issues || 0}</span>
          </Badge>
          
          <Badge variant="outline" className="flex items-center">
            <Code className="h-3.5 w-3.5 mr-1" />
            <span>{data.language || 'TypeScript'}</span>
          </Badge>
        </div>
      )}
      
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