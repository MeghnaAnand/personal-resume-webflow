import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Brain, 
  TestTube, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  Users,
  Database,
  Zap
} from "lucide-react";

const Index = () => {
  const skills = {
    qa: [
      "HP QC",
      "Postman", 
      "Selenium",
      "Bug Tracking",
      "Test Automation",
      "Functional Testing",
      "Non-functional Testing", 
      "Regression Testing",
      "Integration Testing",
      "Performance Testing",
      "Exploratory Testing",
      "User Acceptance Testing",
      "E2E Testing"
    ],
    ai: [
      "Lovable",
      "Cursor", 
      "Notion AI",
      "N8N",
      "Prompt Design for LLM Agents",
      "AI Avatar Roleplay",
      "AI Output Quality Evaluation",
      "Behavior Analysis",
      "Prompt Optimization"
    ],
    development: [
      "HTML/CSS",
      "PHP", 
      "SAP UI5",
      "JavaScript",
      "jQuery",
      "Python",
      "SQL",
      "VBScript",
      "TYPO3",
      "Webflow",
      "Figma"
    ],
    analytics: [
      "Python",
      "SQL", 
      "VBScript",
      "MS-Excel",
      "Seaborn",
      "Data Visualization",
      "Data Analytics"
    ],
    tools: [
      "Asana",
      "GitHub",
      "Trello", 
      "Jira",
      "Confluence",
      "Xray",
      "Agile Methodologies"
    ]
  };

  const experience = [
    {
      company: "Data & AI Stockholm",
      location: "Stockholm, Sweden", 
      role: "Testing and Data Analysis Intern",
      period: "08/2025 – Present",
      responsibilities: [
        "Developing a testing pipeline that can test and verify data during the development process."
      ]
    },
    {
      company: "Fictive Reality",
      location: "Stockholm, Sweden",
      role: "AI Prompt Designer and Website Designer Intern", 
      period: "09/2024 – 01/2025",
      responsibilities: [
        "Designed and tailored structured prompts to guide AI Avatar roleplay interactions across customer training in various fields like psychology, sales, conflict handling etc.",
        "Evaluated AI output quality, identified failure patterns, and applied iterative changes to enhance prompt clarity, tone, and coherence.",
        "Optimized behavior analysis of AI responses to identify system limitations and refined prompts to boost output accuracy and reliability, while honing skills in UI design and web development.",
        "Collaborated with developers to fine-tune AI outputs and align behaviors with scenario objectives.",
        "Web-based and mobile testing (iOS) of AI Avatars and Scenarios to ensure correct functioning of AI Avatars."
      ]
    },
    {
      company: "Axfood IT AB",
      location: "Stockholm, Sweden",
      role: "Project Management and Automation Intern",
      period: "09/2023 – 01/2024", 
      responsibilities: [
        "Formulated SAP Fiori test cases, organized and managed them in Xray, and improved communication between teams and management.",
        "Automated manual processes using macros, resulting in improved data validation and operational efficiency for over 70K local data.",
        "Tracked defects, estimated resolution timelines, and assigned/contacted responsible resources to ensure project efficiency and adherence to deadlines."
      ]
    },
    {
      company: "Career Break",
      location: "Stockholm, Sweden",
      role: "Maternity Break",
      period: "01/2021 – 08/2023",
      responsibilities: [
        "Career break for personal reasons - maternity leave."
      ]
    },
    {
      company: "Stockholm Dual Career Network",
      location: "Stockholm, Sweden", 
      role: "Event and Communication Volunteer",
      period: "10/2019 – 11/2020",
      responsibilities: [
        "Active member of SDCN, for arranging events and communication as a volunteer."
      ]
    },
    {
      company: "Pied Tanca Group AB",
      location: "Stockholm, Sweden",
      role: "PHP Consultant", 
      period: "10/2019 – 12/2019",
      responsibilities: [
        "Guided clients through the process of migrating their website to a new content management system Magento.",
        "Wrote custom PHP code to streamline website functionality."
      ]
    },
    {
      company: "SAP SE", 
      location: "Walldorf, Germany",
      role: "JavaScript Developer Intern",
      period: "03/2018 – 03/2019",
      responsibilities: [
        "Created new web application using JavaScript, jQuery, and SAP UI5.",
        "Arranged coding workshop to management interns."
      ]
    },
    {
      company: "Offenburg University of Applied Sciences",
      location: "Offenburg, Germany",
      role: "Master Thesis: CMS Back-End Developer", 
      period: "08/2018 – 03/2019",
      responsibilities: [
        "Achieved a secure access control system by applying concepts of TYPO3 Ext base and concepts of Model-View-Controller, Object-Oriented Programming, Domain Driven Design and S.O.L.I.D design principles.",
        "Developed a brand new user-friendly, filter based reliable system from scratch.",
        "Integrated concepts of context API, backend routing, password hashing and Mail API, CRUD, repositories, model, and domain in TYPO3 via PHP.",
        "Conducted in-depth research and analysis to solve the existing issue within the university.",
        "Involved in E2E testing of the application."
      ]
    },
    {
      company: "Accenture",
      location: "Bengaluru, India",
      role: "Quality Assurance Engineer",
      period: "03/2012 – 12/2014",
      responsibilities: [
        "Developed business and functional requirement documents to detail test plan, requirement traceability matrix, test cases, and test scenarios for functional testing for a Java-based web application.",
        "Executed test cases, analyzed and reported defects, followed the defects till closure.",
        "Documentation of lessons learnt test plan and project status and updates.",
        "Automated key test scenarios with Selenium, leading to faster regression cycles and improved test coverage."
      ]
    }
  ];

  const education = [
    {
      institution: "Offenburg University of Applied Sciences",
      location: "Offenburg, Germany",
      degree: "Masters in Communication and Media Engineering",
      period: "2016-2019",
      thesis: "Master Thesis: CMS Back-End Developer (08/2018 – 03/2019)"
    },
    {
      institution: "Kalinga Institute of Industrial Technology",
      location: "Bhubaneswar, India",
      degree: "Bachelors in Computer Science and Engineering",
      period: "2008-2012"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">QA Specialist & AI Prompt Designer</h1>
          <p className="text-xl mb-8 opacity-90">
            Experienced IT professional with 4+ years in software quality assurance, 
            AI prompt design, and web development across enterprise and AI-based systems.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <TestTube className="w-4 h-4 mr-2" />
              QA Specialist
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Brain className="w-4 h-4 mr-2" />
              AI Prompt Designer
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:meghnaa.anand@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Experienced QA professional with 4+ years of experience in software quality assurance across enterprise, retail, and AI-based systems. Adaptable, Collaborator, Curious, striving for a breakthrough after a maternity gap of few years in the field of tech, with experience of internships in various industries in Stockholm across various profiles.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-600" />
                  Community & Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Community Engagement</h4>
                    <p className="text-gray-700">Active member of Women in Tech Sweden, Pink Programming and prompt engineering forums</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>English (Professional)</Badge>
                      <Badge>Swedish (Beginner)</Badge>
                      <Badge>German (Intermediate)</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="qa">QA & Testing</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="tools">Tools & PM</TabsTrigger>
            </TabsList>
            
            <TabsContent value="qa" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TestTube className="w-5 h-5 mr-2 text-green-600" />
                    Quality Assurance & Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.qa.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ai" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-blue-600" />
                    AI & Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.ai.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="development" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-purple-600" />
                    Software Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.development.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-orange-600" />
                    Data Analytics & Visualization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.analytics.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-red-600" />
                    Tools & Project Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600">{job.role}</CardTitle>
                      <p className="text-lg font-semibold text-gray-800">{job.company}</p>
                      <div className="flex items-center gap-4 text-gray-600 mt-2">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.period}
                        </span>
                      </div>
                    </div>
                    <Briefcase className="w-8 h-8 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    {edu.degree}
                  </CardTitle>
                  <p className="text-lg font-semibold text-gray-800">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </span>
                  </div>
                </CardHeader>
                {edu.thesis && (
                  <CardContent>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-medium text-blue-800">Thesis:</p>
                      <p className="text-blue-700">{edu.thesis}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to collaborate on AI, QA, or development projects? Let's discuss how we can work together.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:meghnaa.anand@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
