"use client"

import { motion } from "framer-motion"
import {
  ExternalLinkIcon,
  GithubIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  TagIcon,
  UsersIcon,
  UserIcon,
  GraduationCapIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const projects = [
  {
    title: "Khmer Data Annotation Tool",
    description:
      "The Khmer Data Annotation Tool is a user-friendly web application designed to simplify the process of annotating and labeling Khmer text data in Image. In our web application, they can update their image dataset (PNG, JPG), drawing boxes on the region of text, then run OCR to get the result as extracted text. Optionally, export as JSON, YOLO format",
    image: "/images/khmer-data-annotation-thumbnail.png",
    tags: ["Python", "React JS", "GO", "Tesseract", "MongoDB"],
    category: "Data Annotation",
    status: "Completed",
    year: "2025",
    featured: true,
    hasDemo: false,
    projectType: "Group",
    demoLink: null,
    codeLink: "https://github.com/PunleuTY/Khmer-Data-Annotation-Tool",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "A comprehensive data-driven project focused on identifying patterns and predicting customer churn using advanced machine learning algorithms and historical data analysis.",
    image: "/images/customer-churn-thumbnail.png",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    category: "Data Analysis",
    status: "Completed",
    year: "2024",
    featured: true,
    hasDemo: false,
    projectType: "Group",
    demoLink: null,
    codeLink: "https://github.com/Leangchhay1523/Customer_Churn_Analysis.git",
  },
  {
    title: "DVD Rental Management System",
    description:
      "DVD Rental Database (PostgreSQL) Analyzed customer behavior and rental trends using complex SQL queries on a relational database.",
    image: "/images/dvd-rental-thumbnail.png",
    tags: ["Database", "SQL", "Analytics", "Management", "PostgreSQL"],
    category: "Data Analysis",
    status: "Completed",
    year: "2025",
    featured: true,
    hasDemo: false,
    projectType: "Personal Project",
    demoLink: null,
    codeLink: "https://github.com/PunleuTY/DVD_Rental-PostgreSQL.git",
  },
  {
    title: "File & Management Tool",
    description:
      "An intelligent bash script tool that assists users in managing their files and directories with advanced automation features and command-line interface.",
    image: "/images/file-management-thumbnail.png",
    tags: ["Bash", "Shell Scripting", "File Management", "CLI"],
    category: "System Tools",
    status: "Active",
    year: "2025",
    featured: false,
    hasDemo: false,
    projectType: "Group Project",
    demoLink: null,
    codeLink: "https://github.com/Leangchhay1523/OS-Mini-Project.git",
  },
  {
    title: "Finite Automaton System",
    description:
      "An interactive web-based application tool that you can perform operations of Finite Automaton such as FA Type Detection, String Testing, FA Construction, NFA-To-DFA Conversion, DFA Minimization",
    image: "/images/finite-automaton-thumbnail.png",
    tags: ["Javascript", "React.js", "Express.js", "CSS", "HTML", "Tailwind CSS"],
    category: "System Tools",
    status: "Active",
    year: "2025",
    featured: false,
    hasDemo: false,
    projectType: "Group Project",
    demoLink: null,
    codeLink: "https://github.com/Leangchhay1523/automata-project.git",
  },
  {
    title: "Hospital Management System",
    description:
      "A full-stack Hospital Management System built with Node.js, Express, PostgreSQL, Sequelize, and React. This project handles core hospital operations including patient records, appointment scheduling, staff roles, and billing management. Designed to work with large real-world datasets, it features role-based access, API integration, and a clean MVC backend structure. Developed as part of my final project for both database and full-stack development courses.",
    image: "/images/hospital-management-thumbnail.png",
    tags: ["Javascript", "React.js", "Express.js", "PostgreSQL", "CSS", "HTML", "Tailwind CSS"],
    category: "Web-Based Application",
    status: "Completed",
    year: "2025",
    featured: false,
    hasDemo: false,
    projectType: "Group Project",
    demoLink: "#",
    codeLink: "https://github.com/PunleuTY/Hospital-Management-System-Project.git",
  },
]

const getProjectTypeConfig = (type: string) => {
  switch (type) {
    case "Personal Project":
      return {
        icon: UserIcon,
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-500/10",
        textColor: "text-emerald-400",
        shadowColor: "shadow-emerald-500/30",
        label: "Personal Project",
      }
    case "Group Project":
      return {
        icon: UsersIcon,
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-500/10",
        textColor: "text-blue-400",
        shadowColor: "shadow-blue-500/30",
        label: "Group Project",
      }
    case "Group":
      return {
        icon: GraduationCapIcon,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-500/10",
        textColor: "text-purple-400",
        shadowColor: "shadow-purple-500/30",
        label: "Group Project",
      }
    default:
      return {
        icon: UserIcon,
        color: "from-gray-500 to-gray-600",
        bgColor: "bg-gray-500/10",
        textColor: "text-gray-400",
        shadowColor: "shadow-gray-500/30",
        label: "Group Project",
      }
  }
}

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const otherProjects = projects.filter((project) => !project.featured)
  const displayedOtherProjects = showAllProjects ? otherProjects : otherProjects.slice(0, 4)

  return (
    <section id="projects" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent font-serif">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-serif">
            Exploring the intersection of data science, technology, and innovation
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="mb-20">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => {
              const typeConfig = getProjectTypeConfig(project.projectType)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`mb-16 ${index % 2 === 1 ? "md:ml-auto md:mr-0" : ""}`}
                >
                  <div
                    className={`group relative max-w-5xl ${
                      index % 2 === 1 ? "md:ml-auto" : ""
                    } hover:scale-[1.02] transition-all duration-700`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <Card className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-blue-500/20">
                      <div className={`md:flex ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center`}>
                        <div className="md:w-1/2 relative overflow-hidden">
                          <div className="aspect-video relative">
                            <img
                              src={project.image || "/placeholder.svg?height=400&width=600"}
                              alt={project.title}
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Enhanced Project Type Badge */}
                            <div className="absolute top-6 left-6">
                              <div
                                className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md ${typeConfig.bgColor} ${typeConfig.textColor} shadow-lg ${typeConfig.shadowColor} border border-white/10`}
                              >
                                <typeConfig.icon className="h-4 w-4" />
                                <span className="text-sm font-medium">{typeConfig.label}</span>
                              </div>
                            </div>

                            {/* Status Badge */}
                            <div className="absolute top-6 right-6">
                              <span
                                className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md bg-slate-700 ${
                                  project.status === "Completed"
                                    ? "bg-green-500/20 text-green-400 shadow-lg shadow-green-500/30"
                                    : project.status === "Active"
                                      ? "bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/30"
                                      : project.status === "In Progress"
                                        ? "bg-yellow-500/20 text-yellow-400 shadow-lg shadow-yellow-500/30"
                                        : "bg-gray-500/20 text-gray-400 shadow-lg shadow-gray-500/30"
                                } border border-white/10`}
                              >
                                {project.status}
                              </span>
                            </div>

                            {/* No Demo Available Badge */}
                            {!project.hasDemo && (
                              <div className="absolute bottom-6 right-6">
                                <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-gray-500/20 border text-white border-white">
                                  Code Only
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="md:w-1/2 p-8 md:p-12">
                          <div className="flex items-center gap-3 mb-4">
                            <TagIcon className="h-5 w-5 text-purple-400" />
                            <span className="text-purple-400 font-medium">{project.category}</span>
                            <CalendarIcon className="h-4 w-4 text-gray-500 ml-4" />
                            <span className="text-gray-500">{project.year}</span>
                          </div>

                          {/* Enhanced Project Type Display */}
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${typeConfig.color} text-white text-sm font-medium shadow-lg`}
                            >
                              <typeConfig.icon className="h-4 w-4" />
                              <span>{typeConfig.label}</span>
                            </div>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p className="text-gray-400 text-lg leading-relaxed mb-6">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                className="bg-gray-800/50 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-300 px-3 py-1 text-sm backdrop-blur-sm border border-white/10"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-4">
                            <Button
                              variant="outline"
                              asChild
                              className="bg-transparent hover:bg-gray-700/50 transition-all duration-300 group/btn border-white/20"
                            >
                              <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <GithubIcon className="h-5 w-5" />
                                View Code
                                <ArrowUpRightIcon className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                              </a>
                            </Button>

                            {project.hasDemo ? (
                              <Button
                                asChild
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group/btn shadow-lg"
                              >
                                <a
                                  href={project.demoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <ExternalLinkIcon className="h-5 w-5" />
                                  Live Demo
                                  <ArrowUpRightIcon className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                </a>
                              </Button>
                            ) : (
                              <Button disabled className="bg-gray-600/50 text-gray-400 cursor-not-allowed">
                                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                                No Demo Available
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
        </div>

        {/* Other Projects - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold font-mono mb-8 text-center">Other Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedOtherProjects.map((project, index) => {
            const typeConfig = getProjectTypeConfig(project.projectType)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md ${typeConfig.bgColor} ${typeConfig.textColor} shadow-lg border border-white/10`}
                      >
                        <typeConfig.icon className="h-3 w-3" />
                        <span>{project.projectType}</span>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-purple-500/20 text-purple-400 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {!project.hasDemo && (
                      <div className="absolute bottom-4 right-4">
                        <span className="px-2 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-gray-500/20 text-gray-400 border border-white/10">
                          Code Only
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-500 text-sm">{project.year}</span>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : project.status === "Active"
                              ? "bg-blue-500/20 text-blue-400"
                              : project.status === "In Progress"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>

                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gray-800/50 text-gray-400 text-xs px-2 py-1 border border-white/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge className="bg-gray-800/50 text-gray-400 text-xs px-2 py-1 border border-white/10">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" asChild className="hover:bg-gray-700/50 p-2">
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.hasDemo ? (
                        <Button variant="ghost" size="sm" asChild className="hover:bg-blue-600/20 p-2">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm" disabled className="p-2 opacity-50 cursor-not-allowed">
                          <ExternalLinkIcon className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* More Projects Button */}
        {otherProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 text-slate-50 bg-slate-700 rounded-3xl"
            >
              {showAllProjects ? "Show Less Projects" : `Show More Projects (${otherProjects.length - 4} more)`}
              <ArrowUpRightIcon
                className={`h-5 w-5 ml-2 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`}
              />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
