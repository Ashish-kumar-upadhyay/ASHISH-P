import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Star, Play, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import recipeAppPreview from "@/assets/recipe-app-preview.jpg";
import doctorAppPreview from "@/assets/doctor-app-preview.jpg";
import taskManagerPreview from "@/assets/task-manager-preview.jpg";
import nomaniPerfumePreview from "@/assets/nomani-perfume-preview.jpg";
import kitchenRecipeVideo from "@/assets/kitchen-recipe.mp4";
import doctorAppVideo from "@/assets/doctor.mp4";
import employeeTaskVideo from "@/assets/emoplyee tas.mp4";
import screenshot1 from "@/assets/screenshot/Screenshot 1.png";
import screenshot2 from "@/assets/screenshot/Screenshot 2.png";
import screenshot3 from "@/assets/screenshot/Screenshot 3.png";
import screenshot4 from "@/assets/screenshot/Screenshot 4.png";
import screenshot5 from "@/assets/screenshot/Screenshot 5.png";
import screenshot6 from "@/assets/screenshot/Screenshot 6.png";
import screenshot7 from "@/assets/screenshot/Screenshot 7.png";
import screenshot8 from "@/assets/screenshot/Screenshot 8.png";
import screenshot9 from "@/assets/screenshot/Screenshot 9.png";
import screenshot10 from "@/assets/screenshot/Screenshot 10.png";
import screenshot11 from "@/assets/screenshot/Screenshot 11.png";
import screenshot12 from "@/assets/screenshot/Screenshot 12.png";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Nomani Perfume (Dubai Client)",
      description: "Luxury fragrance brand site with animated visuals, multiple versions, and a premium feel. ₹40K budget project showcasing high-end e-commerce functionality with full client satisfaction.",
      techStack: ["React", "Framer Motion", "CSS3", "Responsive Design", "E-commerce"],
      category: "E-commerce",
      image: nomaniPerfumePreview,
      videoDemo: "https://v8-sage-one.vercel.app/",
      screenshots: [
        screenshot1,
        screenshot2,
        screenshot3,
        screenshot4,
        screenshot5,
        screenshot6,
        screenshot7,
        screenshot8,
        screenshot9,
        screenshot10,
        screenshot11,
        screenshot12
      ],
      isSpecialLayout: true,
      links: {
        live: "https://v8-sage-one.vercel.app/",
        github: "#"
      },
      versions: [
        { name: "v2", url: "https://v4-virid-seven.vercel.app/" },
        { name: "v3", url: "https://v6-lime.vercel.app/" },
        { name: "v4", url: "https://v5-one-pink.vercel.app/" },
        { name: "v5", url: "https://v7-phi-nine.vercel.app/" }
      ],
      featured: true
    },
    {
      title: "Kitchen Recipe App",
      description: "Recipe app with authentication, Firestore database, and image upload functionality. Features user profiles and favorite recipes management.",
      techStack: ["React", "Firebase", "Firestore", "CSS", "Authentication"],
      category: "Web App",
      image: recipeAppPreview,
      videoDemo: kitchenRecipeVideo,
      links: {
        live: "https://recpie-kitchen.vercel.app/",
        github: "https://github.com/Ashish-kumar-upadhyay/recpie-kitchen"
      }
    },
    {
      title: "Doctor Appointment App",
      description: "Doctor slot booking system with Firebase real-time data synchronization. Includes appointment management and notification system.",
      techStack: ["React", "Firebase", "JavaScript", "HTML", "CSS", "Real-time"],
      category: "Healthcare",
      image: doctorAppPreview,
      videoDemo: doctorAppVideo,
      links: {
        live: "https://doctor-slot.vercel.app/",
        github: "https://github.com/Ashish-kumar-upadhyay/Doctor-slot"
      }
    },
    {
      title: "Employee Task Manager",
      description: "Admin-employee task tracker with points system, analytics dashboard, and role-based access control for team productivity.",
      techStack: ["React", "Firebase", "Node.js", "JavaScript", "HTML", "CSS", "Analytics"],
      category: "Business",
      image: taskManagerPreview,
      videoDemo: employeeTaskVideo,
      links: {
        live: "https://update-emoplyee-task-mang.vercel.app/",
        github: "https://github.com/Ashish-kumar-upadhyay/update-emoplyee-task-mang"
      }
    }
  ];

  const categories = ["All", "E-commerce", "Web App", "Healthcare", "Business"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === "All" || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="py-20 px-4 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of digital experiences that blend creativity with functionality
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-glass border-glass-border focus:border-primary"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(category)}
                  className={selectedFilter === category 
                    ? "bg-gradient-primary text-white" 
                    : "bg-glass border-glass-border hover:bg-primary/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {project.isSpecialLayout ? (
                // Special Enhanced Layout for Nomani Perfume
                <div className="space-y-6">
                  {/* Main Featured Card - Larger */}
                  <Card className="p-8 md:p-12 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-md border-2 border-gradient-primary shadow-2xl hover:shadow-glow transition-all duration-700 ring-2 ring-primary/40">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                          {project.title}
                        </h2>
                        <Badge className="bg-gradient-primary text-white border-0 px-4 py-2 text-lg">
                          <Star className="w-4 h-4 mr-2" />
                          Premium Project
                        </Badge>
                      </div>
                      <p className="font-poppins text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                        {project.description}
                      </p>
                    </div>

                    {/* Vertical Layout - Video on Top, Gallery Below */}
                    <div className="space-y-8">
                      {/* Demo Video Box - Top */}
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="relative group"
                      >
                        <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-glass-border hover:border-primary/50 transition-all duration-500">
                          <div className="text-center mb-4">
                            <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">🎥 Live Demo</h3>
                            <p className="text-sm text-muted-foreground">Interactive website preview</p>
                          </div>
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-glass-border group-hover:border-primary/30 transition-all duration-500">
                            <div className="aspect-video w-full">
                              <iframe
                                src={project.videoDemo}
                                className="w-full h-full rounded-xl object-contain"
                                title={`${project.title} Demo`}
                                frameBorder="0"
                                allowFullScreen
                                style={{ transform: 'scale(0.95)', transformOrigin: 'center' }}
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="mt-4 flex justify-center">
                            <Button 
                              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-6"
                              onClick={() => window.open(project.links.live, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Open Live Site
                            </Button>
                          </div>
                        </Card>
                      </motion.div>

                      {/* Image Gallery Box - Bottom */}
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="relative group"
                      >
                        <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-sm border-glass-border hover:border-secondary/50 transition-all duration-500">
                          <div className="text-center mb-4">
                            <h3 className="font-playfair text-3xl font-bold mb-2 bg-gradient-to-r from-[#00FFD0] via-[#7F5AFF] to-[#FF4F8B] bg-clip-text text-transparent drop-shadow-lg">
                              📸 UI Gallery
                            </h3>
                            <p className="text-base text-muted-foreground font-semibold">Browse through {project.screenshots?.length || 0} design screenshots</p>
                          </div>
                          
                          {/* Image Gallery with Navigation */}
                          <div className="relative">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30 shadow-lg group-hover:border-secondary/50 transition-all duration-500 max-h-80 flex items-center justify-center">
                              <motion.img 
                                key={currentImageIndex}
                                src={project.screenshots?.[currentImageIndex] || project.image}
                                alt={`${project.title} Screenshot ${currentImageIndex + 1}`}
                                className="max-w-full h-56 md:h-72 object-contain rounded-lg shadow-xl border-2 border-accent/30 transition-all duration-500"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                              />
                              {/* Navigation Buttons */}
                              <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="bg-black/30 backdrop-blur-md border-white/40 text-white hover:bg-black/50 hover:scale-110 transition-all duration-300 shadow"
                                  onClick={() => {
                                    const newIndex = currentImageIndex > 0 
                                      ? currentImageIndex - 1 
                                      : (project.screenshots?.length || 1) - 1;
                                    setCurrentImageIndex(newIndex);
                                  }}
                                  disabled={!project.screenshots || project.screenshots.length <= 1}
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </Button>
                                
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="bg-black/30 backdrop-blur-md border-white/40 text-white hover:bg-black/50 hover:scale-110 transition-all duration-300 shadow"
                                  onClick={() => {
                                    const newIndex = currentImageIndex < (project.screenshots?.length || 1) - 1 
                                      ? currentImageIndex + 1 
                                      : 0;
                                    setCurrentImageIndex(newIndex);
                                  }}
                                  disabled={!project.screenshots || project.screenshots.length <= 1}
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </Button>
                              </div>
                            </div>
                            {/* Image Counter */}
                            <div className="mt-2 text-center">
                              <span className="text-sm text-secondary font-bold">
                                {currentImageIndex + 1} / {project.screenshots?.length || 1}
                              </span>
                            </div>
                            {/* Thumbnail Navigation */}
                            <div className="mt-4 flex justify-center">
                              <div className="flex gap-2 max-w-full overflow-x-auto pb-2">
                                {project.screenshots?.map((screenshot, index) => (
                                  <motion.button
                                    key={index}
                                    className={`flex-shrink-0 w-12 h-10 rounded-lg border-2 overflow-hidden transition-all duration-300 shadow ${
                                      index === currentImageIndex 
                                        ? 'border-accent scale-110 ring-2 ring-secondary' 
                                        : 'border-glass-border hover:border-accent/50'
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    whileHover={{ scale: index === currentImageIndex ? 1.12 : 1.06 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <img 
                                      src={screenshot} 
                                      alt={`Thumbnail ${index + 1}`}
                                      className="w-full h-full object-cover rounded"
                                    />
                                  </motion.button>
                                )) || []}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </div>

                    {/* Enhanced Tech Stack & Versions */}
                    <div className="mt-8 space-y-6">
                      <div className="text-center">
                        <h4 className="font-playfair text-xl font-semibold mb-4 text-primary">Technology Stack</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} className="bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border border-primary/30 px-4 py-2 text-sm hover:from-primary/30 hover:to-secondary/30 transition-all duration-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.versions && (
                        <div className="text-center">
                          <h4 className="font-playfair text-xl font-semibold mb-4 text-secondary">Project Versions</h4>
                          <div className="flex flex-wrap justify-center gap-3">
                            {project.versions.map((version) => (
                              <motion.a
                                key={version.name}
                                href={version.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 text-accent border border-accent/30 hover:from-accent/30 hover:to-primary/30 transition-all duration-300 text-sm font-medium"
                              >
                                {version.name}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              ) : (
                // Regular Layout for Other Projects
                <Card className={`p-6 md:p-8 bg-gradient-card backdrop-blur-md border-glass-border shadow-card hover:shadow-glow transition-all duration-500 ${
                  project.featured ? 'ring-2 ring-primary/30' : ''
                }`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Image/Video */}
                    <div className="lg:w-1/2 relative group">
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-glass-border">
                        {project.videoDemo && project.videoDemo.endsWith('.mp4') ? (
                          <video 
                            src={project.videoDemo}
                            className="w-full h-64 md:h-80 object-cover"
                            controls
                            autoPlay
                            muted
                            loop
                            preload="metadata"
                          />
                        ) : (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                        {!(project.videoDemo && project.videoDemo.endsWith('.mp4')) && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
                              >
                                <Play className="w-8 h-8 text-white" />
                              </motion.div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-playfair text-2xl md:text-3xl font-semibold">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge className="bg-gradient-primary text-white border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <p className="font-poppins text-muted-foreground mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-muted/50 text-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {project.versions && (
                        <div className="mb-6">
                          <p className="font-poppins text-sm text-muted-foreground mb-3">Other Versions:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.versions.map((version) => (
                              <a
                                key={version.name}
                                href={version.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm px-3 py-1 rounded-full bg-accent/20 text-accent hover:bg-accent/30 transition-colors duration-200"
                              >
                                {version.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-4">
                        <Button 
                          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                          onClick={() => window.open(project.links.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-glass-border bg-glass backdrop-blur-md hover:bg-primary/10"
                          onClick={() => window.open(project.links.github, '_blank')}
                          disabled={project.links.github === "#"}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;