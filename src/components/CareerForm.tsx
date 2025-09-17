import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  education: string;
  skills: string;
  goals: string;
}

interface CareerFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export function CareerForm({ onSubmit, isLoading }: CareerFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    education: "",
    skills: "",
    goals: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.education || !formData.skills) {
      return;
    }
    onSubmit(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Tell Us About Yourself</h2>
        <p className="text-muted-foreground text-lg">
          Answer a few questions to get personalized career recommendations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Your Name (Optional)
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Enter your name"
            className="h-12"

            autoComplete="off"
    autoCorrect="off"
    autoCapitalize="words"
    spellCheck="false"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="education" className="text-sm font-medium text-foreground">
            Education Level *
          </Label>
          <Select value={formData.education} onValueChange={(value) => updateField("education", value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select your education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="undergraduate">Undergraduate</SelectItem>
              <SelectItem value="graduate">Graduate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills" className="text-sm font-medium text-foreground">
            Skills & Interests *
          </Label>
          <Textarea
            id="skills"
            value={formData.skills}
            onChange={(e) => updateField("skills", e.target.value)}
            placeholder="e.g., coding, AI, data analysis, creativity, communication..."
            className="min-h-24 resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="goals" className="text-sm font-medium text-foreground">
            Career Goals (Optional)
          </Label>
          <Textarea
            id="goals"
            value={formData.goals}
            onChange={(e) => updateField("goals", e.target.value)}
            placeholder="What do you want to achieve in your career?"
            className="min-h-20 resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={!formData.education || !formData.skills || isLoading}
          className="w-full h-12 text-lg font-medium"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Analyzing your profile...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              Get Career Recommendations
              <ArrowRight className="h-4 w-4" />
            </div>
          )}
        </Button>
      </form>
    </Card>
  );
}