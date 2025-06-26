"use client"

import { motion } from "framer-motion"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Customer Churn Analysis",
    description:
      "A data-driven project focused on identify patterns and predicting customer churn using historical data",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    category: "Data Science",
    status: "Completed",
    demoLink: "#",
    codeLink: "https://github.com/Leangchhay1523/Customer_Churn_Analysis.git",
  },
  {
    title: "File & Management Tool",
    description: "A bash script tool assists users to manage their files and directory more quickly",
    image: "image.png",
    tags: ["Bash", "Shell Scripting", "File Management", "CLI"],
    category: "System Tools",
    status: "Active",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Natural Language Processing for Customer Support",
    description: "Created an NLP solution to automatically categorize and prioritize customer support tickets.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NLP", "BERT", "Python", "Text Classification"],
    category: "Machine Learning",
    status: "In Progress",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Developed an interactive dashboard for sales forecasting using historical data and machine learning models.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Streamlit", "Prophet", "Time Series", "Data Visualization"],
    category: "Data Visualization",
    status: "Completed",
    demoLink: "#",
    codeLink: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-black text-white">
      <div className="container mx-auto">
        <h2 className="section-title font-mono">Projects</h2>
        <p className="section-subtitle font-mono">A collection of data science projects and school projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-900 to-gray-800 group hover:scale-105 hover:shadow-blue-500/20 rounded-xl backdrop-blur-sm">
                {/* Project Status and Category Labels */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md ${
                      project.status === "Completed"
                        ? "bg-green-500/10 text-green-400 shadow-lg shadow-green-500/20"
                        : project.status === "Active"
                          ? "bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/20"
                          : "bg-yellow-500/10 text-yellow-400 shadow-lg shadow-yellow-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-purple-500/10 text-purple-400 shadow-lg shadow-purple-500/20">
                    {project.category}
                  </span>
                </div>

                <div className="aspect-video overflow-hidden relative rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                      Click to explore
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3 px-6 pt-6">
                  <CardTitle className="text-white font-mono font-semibold group-hover:text-blue-400 transition-colors duration-300 text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow px-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm shadow-sm bg-gray-950"
                        style={{
                          animationDelay: `${tagIndex * 0.1}s`,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between pt-4 px-6 pb-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-transparent text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                  >
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn backdrop-blur-sm text-white bg-gray-700"
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 relative z-10"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">Demo</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
