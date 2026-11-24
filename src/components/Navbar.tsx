import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Why TCL", href: "/#why-matters" },
  { label: "Verticals", href: "/#verticals" },
  { label: "What Makes TCL Different", href: "/#unique" },
  { label: "Retail with a Brain", href: "/#insights" },
  { label: "Conscious Club", href: "/#conscious-club" },
  { label: "Franchise", href: "/franchise" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ------------------------- NAVBAR SCROLL EFFECT ------------------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------------- SINGLE SOURCE OF NAVIGATION --------------------- */
  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);

    // SECTION LINKS (/#section)
    if (href.startsWith("/#")) {
      const hash = href.replace("/", ""); // "#unique"
      const id = hash.replace("#", "");

      // Always update URL (so address bar changes)
      navigate(`/${hash}`, { replace: false });

      // Scroll after URL update & DOM paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) {
            const y =
              el.getBoundingClientRect().top +
              window.pageYOffset -
              80; // navbar height offset
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        });
      });

      return;
    }

    // NORMAL ROUTES
    navigate(href);
    window.scrollTo({ top: 0 });
  };

  /* ------------------------------ APPLY NOW ------------------------------- */
  const handleApplyClick = () => {
    handleNavigation("/#early-access");
  };

  /* -------------------------------- RENDER -------------------------------- */
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
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2"
          >
            <img
              src="https://setmycart.blob.core.windows.net/smcstage//12-27-2025/678db332160d47b4ad3aa6811d91aac2/WhatsApp_Image_2025-12-27_at_12.21.44_PM-removebg-preview.png"
              alt="The Conscious Life"
              className="h-10 w-10"
            />
            <span
              className={`hidden sm:block font-display text-lg transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
              }`}
            >
              The Conscious Life
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const linkClasses = `text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
              }`;

              return link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.href)}
                  className={linkClasses}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={linkClasses}
                >
                  {link.label}
                </Link>
              );
            })}

            <Button variant="hero" size="sm" onClick={handleApplyClick}>
              Apply Now
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated border-t">
            <div className="container px-6 py-6 space-y-4">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavigation(link.href)}
                    className="block w-full text-left py-3 font-medium border-b text-foreground"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => handleNavigation(link.href)}
                    className="block w-full text-left py-3 font-medium border-b text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}

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
