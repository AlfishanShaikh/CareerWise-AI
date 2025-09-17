import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onStartAssessment?: () => void;
}

export function Navbar({ onStartAssessment }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('career-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="p-2 rounded-lg bg-primary">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CareerWise AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={scrollToForm}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Get Started
            </button>
            <Button 
              onClick={onStartAssessment || scrollToForm}
              className="h-9"
            >
              Start Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToForm();
                  setIsMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Get Started
              </button>
              <Button 
                onClick={() => {
                  onStartAssessment ? onStartAssessment() : scrollToForm();
                  setIsMenuOpen(false);
                }}
                className="w-full h-9 mt-2"
              >
                Start Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}