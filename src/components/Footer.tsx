import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-primary-foreground/10">
            <div>
              <img
                src="https://setmycart.blob.core.windows.net/smcstage//12-27-2025/d1b3dcbdb0184affb67e4789c4a58907/WhatsApp_Image_2025-12-27_at_12.21.45_PM-removebg-preview.png"
                alt="The Conscious Life"
                className="h-12 mb-4"
              />
              <p className="text-primary-foreground/70 max-w-md">
                A premium discovery destination for conscious brands and health-conscious consumers.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="mailto:info@theconsciouslife.in"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@theconsciouslife.in</span>
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5" />
                  <span>India</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/theconsciouslife/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/theconsciouslifetcl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} The Conscious Life. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/franchise" className="hover:text-primary-foreground transition-colors">
                Partner With Us
              </Link>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;