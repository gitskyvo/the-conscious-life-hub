import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.jpeg";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <img
          src={logoIcon}
          alt="The Conscious Life"
          className="w-16 h-16 mx-auto mb-8 opacity-60"
        />
        <h1 className="font-display text-6xl text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <Button asChild variant="hero" size="lg">
          <Link to="/">
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;