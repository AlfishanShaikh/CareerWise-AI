interface Career {
  title: string;
  description: string;
  skills: string[];
  courses: { name: string; provider: string }[];
  salaryRange: string;
  growthPotential: string;
}

// Simulated AI career recommendations based on skills/interests
export function generateCareerRecommendations(skills: string, education: string): Career[] {
  const skillsLower = skills.toLowerCase();
  const careers: Career[] = [];

  // Tech/Programming careers
  if (skillsLower.includes('coding') || skillsLower.includes('programming') || skillsLower.includes('software')) {
    careers.push({
      title: "Software Engineer",
      description: "Design and develop software applications, websites, and systems that power our digital world.",
      skills: ["Python", "JavaScript", "Data Structures", "Problem Solving", "Git"],
      courses: [
        { name: "Complete Web Development Bootcamp", provider: "Udemy" },
        { name: "CS50: Computer Science", provider: "Harvard (edX)" }
      ],
      salaryRange: "₹4-15 LPA",
      growthPotential: "Excellent"
    });
  }

  // AI/ML careers
  if (skillsLower.includes('ai') || skillsLower.includes('machine learning') || skillsLower.includes('data')) {
    careers.push({
      title: "AI/ML Engineer",
      description: "Build intelligent systems and algorithms that can learn and make decisions from data.",
      skills: ["Python", "Machine Learning", "TensorFlow", "Statistics", "Data Analysis"],
      courses: [
        { name: "Machine Learning Course", provider: "Andrew Ng (Coursera)" },
        { name: "Deep Learning Specialization", provider: "Coursera" }
      ],
      salaryRange: "₹6-25 LPA",
      growthPotential: "Outstanding"
    });
  }

  // Data careers
  if (skillsLower.includes('data') || skillsLower.includes('analytics') || skillsLower.includes('statistics')) {
    careers.push({
      title: "Data Analyst",
      description: "Transform raw data into meaningful insights that drive business decisions and strategy.",
      skills: ["SQL", "Python/R", "Data Visualization", "Excel", "Statistics"],
      courses: [
        { name: "Data Analysis with Python", provider: "freeCodeCamp" },
        { name: "Google Data Analytics Certificate", provider: "Coursera" }
      ],
      salaryRange: "₹3-12 LPA",
      growthPotential: "Very Good"
    });
  }

  // Design careers
  if (skillsLower.includes('design') || skillsLower.includes('creative') || skillsLower.includes('art')) {
    careers.push({
      title: "UX/UI Designer",
      description: "Create intuitive and beautiful user experiences for websites and mobile applications.",
      skills: ["Figma", "User Research", "Prototyping", "Design Thinking", "Adobe Creative Suite"],
      courses: [
        { name: "Google UX Design Certificate", provider: "Coursera" },
        { name: "Design Masterclass", provider: "Udemy" }
      ],
      salaryRange: "₹4-18 LPA",
      growthPotential: "Excellent"
    });
  }

  // Business/Marketing careers
  if (skillsLower.includes('business') || skillsLower.includes('marketing') || skillsLower.includes('communication')) {
    careers.push({
      title: "Digital Marketing Specialist",
      description: "Promote brands and products through digital channels to reach and engage target audiences.",
      skills: ["SEO", "Social Media Marketing", "Content Creation", "Analytics", "Communication"],
      courses: [
        { name: "Google Digital Marketing Course", provider: "Google Skillshop" },
        { name: "Digital Marketing Specialization", provider: "University of Illinois (Coursera)" }
      ],
      salaryRange: "₹3-15 LPA",
      growthPotential: "Very Good"
    });
  }

  // Generic fallback careers based on education level
  if (careers.length === 0) {
    if (education === 'high-school') {
      careers.push(
        {
          title: "Web Developer",
          description: "Create and maintain websites and web applications using modern technologies.",
          skills: ["HTML", "CSS", "JavaScript", "React", "Problem Solving"],
          courses: [
            { name: "freeCodeCamp Responsive Web Design", provider: "freeCodeCamp" },
            { name: "The Complete Web Developer Course", provider: "Udemy" }
          ],
          salaryRange: "₹2-8 LPA",
          growthPotential: "Excellent"
        },
        {
          title: "Content Creator",
          description: "Produce engaging content across various digital platforms to build audiences and brands.",
          skills: ["Writing", "Video Editing", "Social Media", "Creativity", "SEO"],
          courses: [
            { name: "Content Marketing Certification", provider: "HubSpot Academy" },
            { name: "YouTube Creator Course", provider: "Creator Economy Report" }
          ],
          salaryRange: "₹2-12 LPA",
          growthPotential: "Very Good"
        }
      );
    } else {
      careers.push(
        {
          title: "Business Analyst",
          description: "Bridge the gap between business needs and technology solutions through data-driven insights.",
          skills: ["Data Analysis", "Communication", "Problem Solving", "Excel", "SQL"],
          courses: [
            { name: "Business Analysis Fundamentals", provider: "Coursera" },
            { name: "Microsoft Excel Advanced", provider: "LinkedIn Learning" }
          ],
          salaryRange: "₹4-16 LPA",
          growthPotential: "Excellent"
        },
        {
          title: "Project Manager",
          description: "Lead teams and coordinate resources to deliver successful projects on time and within budget.",
          skills: ["Leadership", "Communication", "Planning", "Risk Management", "Agile"],
          courses: [
            { name: "Google Project Management Certificate", provider: "Coursera" },
            { name: "PMP Certification Prep", provider: "Project Management Institute" }
          ],
          salaryRange: "₹5-20 LPA",
          growthPotential: "Excellent"
        }
      );
    }
  }

  return careers.slice(0, 4); // Return max 4 career suggestions
}

export function generateMotivationalTips(education: string, skills: string): string[] {
  const tips = [
    "Start with small projects to build your portfolio and gain practical experience",
    "Join online communities and forums related to your field of interest",
    "Practice consistently - even 30 minutes daily can lead to significant progress",
    "Seek mentorship from professionals already working in your target field",
    "Build a strong LinkedIn profile and connect with industry professionals",
    "Attend virtual workshops, webinars, and networking events in your domain",
    "Consider internships or freelance projects to gain real-world experience",
    "Stay updated with industry trends and emerging technologies"
  ];

  // Shuffle and return 4 random tips
  const shuffled = tips.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}