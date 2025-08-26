"use client"

import { useState, useEffect } from "react"
import { MenuIcon, XIcon, LinkedinIcon, GithubIcon, MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Social sidebar */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2 bg-gray-700">
          <a
            href="https://www.linkedin.com/in/ty-punleu-41a40a337/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:bg-blue-700 transition-colors bg-gray-700"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/PunleuTY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:bg-gray-700 transition-colors bg-gray-700"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:punleutyy@gmail.com"
            className="text-white p-3 hover:bg-red-700 transition-colors bg-slate-700"
            aria-label="Email"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled ? "bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 font-mono">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              {/* Hexagonal background with gradient */}
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                <div className="absolute inset-0.5 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TP</span>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 blur-sm opacity-50 -z-10"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-300"
            >
              {isMobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
