import { useQuery } from "@tanstack/react-query";
import { fetchRepositoryStats } from "@/lib/github";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Star, GitFork, AlertCircle, Users, Code } from "lucide-react";

interface GitHubInfoProps {
  username: string;
  repo: string;
}

export function GitHubInfo({ username, repo }: GitHubInfoProps) {
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

  if (error) {
    return (
      <Card className="p-6 bg-white/70 backdrop-blur border-red-200">
        <div className="flex items-center text-red-500">
          <AlertCircle className="mr-2 h-5 w-5" />
          <span>Failed to load repository data</span>
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
      
      {data.description && (
        <p className="text-gray-600 mb-4">{data.description}</p>
      )}
      
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="flex items-center">
          <Star className="h-3.5 w-3.5 mr-1" />
          <span>{data.stars}</span>
        </Badge>
        
        <Badge variant="outline" className="flex items-center">
          <GitFork className="h-3.5 w-3.5 mr-1" />
          <span>{data.forks}</span>
        </Badge>
        
        <Badge variant="outline" className="flex items-center">
          <AlertCircle className="h-3.5 w-3.5 mr-1" />
          <span>{data.issues}</span>
        </Badge>
        
        <Badge variant="outline" className="flex items-center">
          <Users className="h-3.5 w-3.5 mr-1" />
          <span>{data.contributorCount}</span>
        </Badge>
        
        {data.language && (
          <Badge variant="outline" className="flex items-center">
            <Code className="h-3.5 w-3.5 mr-1" />
            <span>{data.language}</span>
          </Badge>
        )}
      </div>
    </Card>
  );
}