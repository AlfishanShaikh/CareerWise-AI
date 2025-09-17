import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { CareerForm } from "@/components/CareerForm";
import { CareerResults } from "@/components/CareerResults";
import { generateCareerRecommendations, generateMotivationalTips } from "@/utils/careerData";
import { Sparkles } from "lucide-react";

interface FormData {
  name: string;
  education: string;
  skills: string;
  goals: string;
}

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const careers = generateCareerRecommendations(formData.skills, formData.education);
    const tips = generateMotivationalTips(formData.education, formData.skills);
    
    setResults({
      careers,
      tips,
      userName: formData.name
    });
    
    setIsLoading(false);
    setShowResults(true);
  };

  const resetForm = () => {
    setShowResults(false);
    setResults(null);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('career-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onStartAssessment={resetForm} />
        <div className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <Button 
                onClick={resetForm}
                variant="outline" 
                className="transition-all duration-200"
              >
                ← New Assessment
              </Button>
            </div>
            
            <CareerResults 
              careers={results.careers}
              tips={results.tips}
              userName={results.userName}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onStartAssessment={scrollToForm} />
      
      {/* Simple Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Career Advisor</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Find Your Perfect
              <span className="text-primary block">Career Path</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Get personalized career recommendations and skill development plans tailored for Indian students.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="career-form" className="pb-16 px-4">
        <div className="container mx-auto">
          <CareerForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 CareerWise AI. Empowering the next generation of Indian professionals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
