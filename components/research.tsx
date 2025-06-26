"use client"

import { motion } from "framer-motion"
import { BookOpenIcon, BrainIcon, LineChartIcon, DatabaseIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const researchAreas = [
  {
    title: "Artificial Intelligence Technologies",
    description: "Exploring cutting-edge AI technologies to solve complex business problems and drive innovation.",
    icon: BrainIcon,
  },
  {
    title: "Predictive Modeling",
    description:
      "Building advanced predictive models to forecast trends, identify patterns, and enable data-driven decision making.",
    icon: LineChartIcon,
  },
  {
    title: "Natural Language Processing",
    description:
      "Developing NLP solutions to extract insights from unstructured text data and improve customer experiences.",
    icon: BookOpenIcon,
  },
  {
    title: "Big Data Analytics",
    description:
      "Leveraging big data technologies to process and analyze large-scale datasets for actionable business insights.",
    icon: DatabaseIcon,
  },
]

export default function Research() {
  return (
    <section id="research" className="section-padding bg-gray-950 text-white">
      <div className="container mx-auto">
        <h2 className="section-title">Research Interests</h2>
        <p className="section-subtitle">Areas of data science I'm passionate about exploring and contributing to</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <area.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-400">{area.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900/50 p-8 rounded-lg border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center text-white">Research Philosophy</h3>
          <p className="text-center max-w-3xl mx-auto text-gray-300">
            I believe in the power of data to transform businesses and drive innovation. My research focuses on
            developing practical AI solutions that deliver real business value, with a strong emphasis on
            interpretability, scalability, and ethical considerations in data science.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
