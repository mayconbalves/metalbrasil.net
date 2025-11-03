import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl font-metal font-black tracking-wider hover:opacity-80 transition-opacity">
                METAL BRASIL
              </h1>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-accent transition-colors font-semibold">
                LATEST NEWS
              </Link>
              <Link to="/reviews" className="hover:text-accent transition-colors font-semibold">
                REVIEWS
              </Link>
              <Link to="/videos" className="hover:text-accent transition-colors font-semibold">
                VIDEOS
              </Link>
              <Link to="/playlists" className="hover:text-accent transition-colors font-semibold">
                PLAYLISTS
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-accent/20">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent/20">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
