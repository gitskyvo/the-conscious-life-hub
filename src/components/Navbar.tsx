import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "What We Offer", href: "/#unique" },
  { label: "For Brands", href: "/#why-matters" },
  { label: "Insights", href: "/#insights" },
  { label: "Franchise", href: "franchise" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        // Use a timeout to allow the navigation to complete before scrolling
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const handleApplyClick = () => {
    if (location.pathname === "/franchise") {
       window.location.href = "https://forms.google.com/your-form-url";
    } else {
       handleNavigation("/#early-access");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
            <img src="https://setmycart.blob.core.windows.net/smcstage//12-27-2025/678db332160d47b4ad3aa6811d91aac2/WhatsApp_Image_2025-12-27_at_12.21.44_PM-removebg-preview.png" alt="The Conscious Life" className="h-10 w-10" />
            <span className="font-display text-lg text-foreground hidden sm:block">
              The Conscious Life
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm font-medium transition-colors ${
                      location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                      location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button
              variant="hero"
              size="sm"
              onClick={handleApplyClick}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated border-t border-border/50">
            <div className="container px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavigation(link.href)}
                    className="block w-full text-left py-3 text-foreground font-medium border-b border-border/30"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="block w-full text-left py-3 text-foreground font-medium border-b border-border/30"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button
                variant="hero"
                className="w-full mt-4"
                onClick={handleApplyClick}
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;