import logoFull from "@/assets/logo-full.jpeg";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-primary-foreground/10">
            <div>
              <img
                src={logoFull}
                alt="The Conscious Life"
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/70 max-w-md">
                A premium discovery destination for conscious brands and health-conscious consumers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:hello@theconsciouslife.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@theconsciouslife.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} The Conscious Life. All rights reserved.</p>
            <div className="flex items-center gap-6">
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