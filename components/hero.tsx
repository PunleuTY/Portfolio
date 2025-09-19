"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }[] = []

    // Increased particle count for more dynamic effect
    const particleCount = 120
    // Increased max distance for more connections
    const maxDistance = 180

    // Create particles with higher speed
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Slightly varied particle sizes
        size: Math.random() * 1.8 + 0.3,
        // Increased speed multiplier from 0.3 to 0.8
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
      })
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Brighter green color for particles
      ctx.fillStyle = "#00ff00"
      // Slightly more visible connections
      ctx.strokeStyle = "rgba(0, 255, 0, 0.15)"

      particles.forEach((particle, i) => {
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position with the increased speed
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check with bounce effect
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }

        // Connect particles with thinner lines
        ctx.lineWidth = 0.5
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Fade the lines based on distance
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(0, 255, 0, ${opacity * 0.2})`

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(drawParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    drawParticles()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-black text-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "#111" }}></canvas>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between relative z-10 font-extralight font-mono">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-bold tracking-tight mb-4 text-white md:text-7xl font-serif">TY Punleu</h1>
            <div className="inline-block text-white px-4 py-1 rounded mb-6 bg-slate-800">Data Science Student</div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              A third year student in Computer Science field who also passionate exploring technologies and learning to solve real-world problems in Cambodia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start"
          >
            <Button className="bg-slate-800 text-white rounded-3xl" asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button className="rounded-3xl bg-black text-white" variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
        <div className="relative w-64 h-80 overflow-hidden rounded-xl shadow-2xl bg-gray-900 p-1 md:w-72 md:h-96">
          <div className="w-full h-full rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1">
            <Image
              src="/images/punleu-ty.jpeg"
              alt="Punleu TY Profile"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              className="rounded-xl"
            />
          </div>
        </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="h-5 w-5 text-gray-400" />
        </a>
      </motion.div>
    </section>
  )
}
