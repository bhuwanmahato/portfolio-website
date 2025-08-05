"use client";
import { Project } from "@/types/project";
import { ProjectLayout } from "./project-layout";
import React, { useState, useEffect, ReactNode } from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ThemefyContentProps {
  project: Project;
}
interface CTAButtonProps {
  children: ReactNode;
  className?: string;
}

export function ThemefyContent({ project }: ThemefyContentProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Handle scroll progress and scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const CTAButton = ({ children, className = "" }: CTAButtonProps) => (
    <a
      href="https://chromewebstore.google.com/detail/themefy/pnooehjmfoolleebkoboieekgfgbhjmf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 hover:bg-blue-700 transition-colors font-medium ${className}`}
    >
      {children} 🚀
    </a>
  );
  return (
    <ProjectLayout project={project}>
      <div className="min-h-screen md:pl-12">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="flex flex-row">
          {/* Side Navigation */}
          <nav className="hidden md:block fixed left-0 top-0 h-full w-80 overflow-y-auto z-40 border-r">
            <div className="p-6">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="flex items-center gap-3 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span>Home</span>
                  </a>
                </li>

                <li className="pt-4">
                  <h3 className="text-xl font-bold mb-2">Themefy</h3>
                  <div className=" text-sm leading-relaxed">
                    <p>
                      Themefy is my attempt to spread awareness and spark
                      curiosity about creative coding among the masses.
                    </p>
                    <p>Get a whole new browsing experience!! Try Themefy now</p>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <p className="text-xs text-muted-foreground font-semibold">
                      ROLE
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.role.map((role: string) => (
                        <Badge key={role} variant="secondary">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <p className="text-xs text-muted-foreground font-semibold">
                      TOOLS
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 pb-4">
                    <CTAButton className="text-sm">Try Themefy</CTAButton>
                  </div>
                </li>

                <hr />

                <li>
                  <Button
                    onClick={() => scrollToSection("problem")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    1. Idea
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("approach")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    2. Design Process
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("solution")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    3. Develop & Market
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("launch")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    4. Launch & Success
                  </Button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="md:ml-64 min-h-screen">
            {/* Hero Section */}
            <section id="home" className="relative">
              {/* Creative Coding Hero */}
              <div className="w-full h-screen relative flex items-center justify-center text-center">
                <video
                  src="/cc.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <h2 className="relative z-10 text-2xl md:text-5xl font-bold text-gray-900 max-w-4xl px-8">
                  Bringing creative coding to everyday browsing
                </h2>
              </div>

              {/* CTA Section */}
              <div className="bg-gray-100 py-16 text-center">
                <div className="max-w-4xl mx-auto px-8">
                  <p className="text-sm md:text-xl text-gray-700 mb-6">
                    Product Design & Development
                  </p>
                  <CTAButton className="text-sm">Try Themefy</CTAButton>
                </div>
              </div>
            </section>

            {/* Idea Section */}
            <section id="problem" className="">
              <div className="max-w-6xl mx-auto">
                <img
                  src="/themefy/1.png"
                  alt="Themefy Idea 1"
                  className="w-full "
                />
                <img
                  src="/themefy/2.png"
                  alt="Themefy Idea 2"
                  className="w-full "
                />
                <img
                  src="/themefy/3.png"
                  alt="Themefy Idea 3"
                  className="w-full "
                />
              </div>
            </section>

            {/* Design Process Section */}
            <section id="approach" className=" bg-white">
              <div className="max-w-6xl mx-auto space-y-8">
                <img
                  src="/themefy/4.png"
                  alt="Design Process 1"
                  className="w-full "
                />
                <img
                  src="/themefy/5.png"
                  alt="Design Process 2"
                  className="w-full "
                />
                <img
                  src="/themefy/6.png"
                  alt="Design Process 3"
                  className="w-full "
                />
                <img
                  src="/themefy/7.png"
                  alt="Design Process 4"
                  className="w-full "
                />
                <img
                  src="/themefy/7.1.png"
                  alt="Design Process 5"
                  className="w-full "
                />
                <img
                  src="/themefy/8.png"
                  alt="Design Process 6"
                  className="w-full "
                />
                <img
                  src="/themefy/9.png"
                  alt="Design Process 7"
                  className="w-full "
                />
                <img
                  src="/themefy/10.png"
                  alt="Design Process 8"
                  className="w-full "
                />
                <img
                  src="/themefy/11.png"
                  alt="Design Process 9"
                  className="w-full "
                />
                <img
                  src="/themefy/11.1.png"
                  alt="Design Process 10"
                  className="w-full "
                />
                <img
                  src="/themefy/11.2.png"
                  alt="Design Process 11"
                  className="w-full "
                />
                <img
                  src="/themefy/11.3.png"
                  alt="Design Process 12"
                  className="w-full "
                />
                <img
                  src="/themefy/11.4.png"
                  alt="Design Process 13"
                  className="w-full "
                />
                <img
                  src="/themefy/11.5.png"
                  alt="Design Process 14"
                  className="w-full "
                />

                {/* Video Section */}
                <div className="text-center py-8">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">
                    Check out the quick walkthrough video!!
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="text-sm md:text-base">
                      Note: This is the latest version of Themefy
                    </p>
                    <CTAButton className="text-sm">Try Themefy</CTAButton>
                  </div>
                </div>

                {/* YouTube Video */}
                <div className="overflow-hidden ">
                  <iframe
                    src="https://www.youtube.com/embed/IQoendFwPkE?si=sFkTpzb8SOw4QjB6&autoplay=0&loop=1&playlist=IQoendFwPkE"
                    className="w-full aspect-video"
                    frameBorder="0"
                    allow="autoplay; picture-in-picture"
                    allowFullScreen
                    title="Themefy Walkthrough Video"
                  />
                </div>

                <img
                  src="/themefy/12.png"
                  alt="Design Process Final"
                  className="w-full "
                />
              </div>
            </section>

            {/* Develop & Market Section */}
            <section id="solution" className="">
              <div className="max-w-6xl mx-auto space-y-8">
                <img
                  src="/themefy/12.1.png"
                  alt="Development 1"
                  className="w-full "
                />
                <img
                  src="/themefy/13.png"
                  alt="Development 2"
                  className="w-full "
                />
              </div>
            </section>

            {/* Launch & Success Section */}
            <section id="launch" className=" bg-gray-50">
              <div className="max-w-6xl mx-auto space-y-8">
                <img src="/themefy/14.png" alt="Launch 1" className="w-full " />
                <img src="/themefy/15.png" alt="Launch 2" className="w-full " />
                <img
                  src="/themefy/16.png"
                  alt="Success 1"
                  className="w-full "
                />
                <img
                  src="/themefy/18.png"
                  alt="Success 2"
                  className="w-full "
                />

                {/* Final CTA */}
                <div className="text-center py-8">
                  <CTAButton className="text-sm">Try Themefy</CTAButton>
                </div>

                <img
                  src="/themefy/thank you.png"
                  alt="Thank You"
                  className="w-full "
                />
              </div>
            </section>
          </main>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="hidden md:block fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full  hover:bg-blue-700 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 25s linear infinite;
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
        `}</style>
      </div>
    </ProjectLayout>
  );
}
