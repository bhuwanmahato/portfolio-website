"use client";
import { Project } from "@/types/project";
import { ProjectLayout } from "./project-layout";
import React, { useState, useEffect, ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CapesContentProps {
  project: Project;
}

export function CapesContent({ project }: CapesContentProps) {
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
                  <h3 className="text-xl font-bold mb-3">CAPES.APP</h3>
                  <div className="text-sm leading-relaxed">
                    <p>
                      Capes as a SaaS platform that helps creators and experts
                      manage, monetize, and build trust with their online
                      audience. I am the sole designer in a team of 7 people. I
                      drive the entire design and strategy for the product, from
                      ideation to execution.
                    </p>
                  </div>
                </li>
                <div className="flex flex-col gap-2 py-4">
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
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                      {project.links?.map((link, idx) => (
                        <Link href={link?.href} key={idx} target="_blank">
                          <Badge
                            key={idx}
                            className="flex gap-2 px-2 py-1 text-[10px]"
                          >
                            {link.icon}
                            {link.type}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <hr />

                {/* <li>
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
                    className="text-left  transition-colors"
                    variant={"ghost"}
                  >
                    2. Design Process
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("solution")}
                    className="text-left  transition-colors"
                    variant={"ghost"}
                  >
                    3. Develop & Market
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("launch")}
                    className="text-left  transition-colors"
                    variant={"ghost"}
                  >
                    4. Launch & Success
                  </Button>
                </li> */}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="md:ml-64 min-h-screen">
            {/* Hero Section */}
            {/* <section id="home" className="relative">
              <div className="w-full h-screen relative flex items-center justify-center text-center">
                <video
                  src="/cc.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              </div>
            </section> */}
            <section id="context">
              <div className="">
                <img
                  src="/capes.jpg"
                  alt="Zenbox Context 1"
                  className="w-full "
                />
              </div>
              {/* CTA Section */}
              <div className=" py-16 text-center">
                <div className="max-w-4xl mx-auto px-8">
                  {/* <p className="text-xl mb-6"></p> */}
                  <a
                    href="https://capes.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="text-left transition-colors"
                      variant={"default"}
                    >
                      Check out Capes <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
                </div>
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
