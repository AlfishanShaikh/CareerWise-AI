import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  BookOpen, 
  Target, 
  TrendingUp, 
  ExternalLink,
  Star,
  CheckCircle
} from "lucide-react";

interface Career {
  title: string;
  description: string;
  skills: string[];
  courses: { name: string; provider: string }[];
  salaryRange: string;
  growthPotential: string;
}

interface CareerResultsProps {
  careers: Career[];
  tips: string[];
  userName?: string;
}

export function CareerResults({ careers, tips, userName }: CareerResultsProps) {
  const greeting = userName ? `${userName}` : "there";

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Great news, {greeting}! 🎉
        </h2>
        <p className="text-xl text-muted-foreground">
          Here are career paths that match your interests and goals
        </p>
      </div>

      {/* Career Recommendations */}
      <div className="grid md:grid-cols-2 gap-6">
        {careers.map((career, index) => (
          <Card key={index} className="p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{career.title}</h3>
                <p className="text-muted-foreground mb-4">{career.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">💰 Salary Range</p>
                    <p className="text-sm text-muted-foreground">{career.salaryRange}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">📈 Growth</p>
                    <p className="text-sm text-muted-foreground">{career.growthPotential}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Required */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-accent" />
                <h4 className="font-medium text-foreground">Skills to Learn</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} className="bg-accent text-accent-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <h4 className="font-medium text-foreground">Recommended Courses</h4>
              </div>
              <div className="space-y-2">
                {career.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-sm text-foreground">{course.name}</p>
                      <p className="text-xs text-muted-foreground">{course.provider}</p>
                    </div>
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">
              Learn More About This Path
            </Button>
          </Card>
        ))}
      </div>

      {/* Motivational Tips */}
      <Card className="p-6 bg-primary text-primary-foreground">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-4">Your Next Steps</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
              <p>{tip}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <p className="opacity-90 italic">
            "Every expert was once a beginner. Your journey starts with a single step!"
          </p>
        </div>
      </Card>
    </div>
  );
}