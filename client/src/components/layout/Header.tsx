import { Link } from "wouter";
import Logo from "@/components/Logo";

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm py-3 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Link to="/">
            <button className="text-black hover:text-gray-700 transition-colors">
              Back to Home
            </button>
          </Link>
        )}
        <Link to="/">
          <div className="flex items-center gap-2">
            <Logo width={40} height={40} />
            <span className="font-bold text-xl">SilentSignal</span>
          </div>
        </Link>
      </div>
    </header>
  );
}