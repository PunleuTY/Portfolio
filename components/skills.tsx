"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    color: "border-yellow-500",
    shadowColor: "shadow-yellow-500/50",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "border-blue-500",
    shadowColor: "shadow-blue-500/50",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "border-yellow-500",
    shadowColor: "shadow-yellow-500/50",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "border-blue-500",
    shadowColor: "shadow-blue-500/50",
  },
  {
    name: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "border-purple-500",
    shadowColor: "shadow-purple-500/50",
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "border-cyan-500",
    shadowColor: "shadow-cyan-500/50",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "border-orange-500",
    shadowColor: "shadow-orange-500/50",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "border-blue-500",
    shadowColor: "shadow-blue-500/50",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "border-cyan-500",
    shadowColor: "shadow-cyan-500/50",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    color: "border-green-500",
    shadowColor: "shadow-green-500/50",
  },
  {
    name: "Jupyter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    color: "border-orange-500",
    shadowColor: "shadow-orange-500/50",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "border-red-500",
    shadowColor: "shadow-red-500/50",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    color: "border-gray-500",
    shadowColor: "shadow-gray-500/50",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "border-blue-500",
    shadowColor: "shadow-blue-500/50",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Enhanced particle background effect */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        {/* Add some connecting lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Technologies
            <div className="w-32 h-1 bg-green-400 mt-2 shadow-lg shadow-green-400/50"></div>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">These are the technologies I've worked with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                bg-gray-900/50 backdrop-blur-sm border-2 ${tech.color} rounded-lg p-6 
                flex flex-col items-center justify-center 
                hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 
                min-h-[140px] relative group
                shadow-2xl ${tech.shadowColor} hover:shadow-3xl
              `}
              style={{
                boxShadow: `0 10px 30px -5px ${
                  tech.color.includes("yellow")
                    ? "#eab308"
                    : tech.color.includes("green")
                      ? "#22c55e"
                      : tech.color.includes("blue")
                        ? "#3b82f6"
                        : tech.color.includes("orange")
                          ? "#f97316"
                          : tech.color.includes("purple")
                            ? "#a855f7"
                            : tech.color.includes("cyan")
                              ? "#06b6d4"
                              : tech.color.includes("red")
                                ? "#ef4444"
                                : "#6b7280"
                }40, 0 4px 6px -2px rgba(0, 0, 0, 0.1)`,
              }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${tech.color.replace("border-", "bg-")}`}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 mb-3 relative">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain filter drop-shadow-lg border-0 leading-7 font-mono"
                    style={{
                      filter:
                        tech.name === "GitHub" || tech.name === "Express"
                          ? "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.9)) invert(1)"
                          : "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.9))",
                    }}
                  />
                </div>
                <span className="text-white font-medium text-center text-sm group-hover:text-white transition-colors duration-300 font-mono">
                  {tech.name}
                </span>
              </div>

              {/* Additional glow border effect */}
              <div
                className={`absolute inset-0 border-2 shadow-lg rounded-lg ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        ></motion.div>
      </div>
    </section>
  )
}
