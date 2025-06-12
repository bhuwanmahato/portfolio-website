"use client";
import { Project } from "@/types/project";
import { ProjectLayout } from "./project-layout";
import React, { useState, useEffect, ReactNode } from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MoveTogetherContentProps {
  project: Project;
}
interface CTAButtonProps {
  children: ReactNode;
  className?: string;
}

export function MoveTogetherContent({ project }: MoveTogetherContentProps) {
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
      <div className="min-h-screen pl-12">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="flex flex-row">
          {/* Side Navigation */}
          <nav className="fixed left-0 top-0 h-full w-80 overflow-y-auto z-40 border-r">
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
                  <h3 className="text-xl font-bold mb-3">Move Together</h3>
                  <div className=" text-sm leading-relaxed">
                    <p>
                      A Community based group treatment for patients with
                      long-term health conditions that are either newly
                      developed, ongoing, or prophylactic by providing constant
                      support in their recovery.
                    </p>
                  </div>
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
                  <div className="flex gap-4 pb-4"></div>
                </li>

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
                </li> */}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="ml-64 min-h-screen">
            <section id="context" className="content-section">
              <div className="section-content">
                <img
                  src="/moveTogether/1.jpg"
                  className="gallery-image"
                  alt="Move Together Context 1"
                />
                <img
                  src="/moveTogether/2.jpg"
                  className="gallery-image"
                  alt="Move Together Context 2"
                />
                <img
                  src="/moveTogether/3.jpg"
                  className="gallery-image"
                  alt="Move Together Context 3"
                />
                <img
                  src="/moveTogether/4.jpg"
                  className="gallery-image"
                  alt="Move Together Context 4"
                />
                <img
                  src="/moveTogether/5.jpg"
                  className="gallery-image"
                  alt="Move Together Context 5"
                />
                <img
                  src="/moveTogether/6.jpg"
                  className="gallery-image"
                  alt="Move Together Context 6"
                />
                <img
                  src="/moveTogether/7.jpg"
                  className="gallery-image"
                  alt="Move Together Context 7"
                />
                <img
                  src="/moveTogether/8.jpg"
                  className="gallery-image"
                  alt="Move Together Context 8"
                />
              </div>
            </section>

            <section id="problem" className="content-section">
              <div className="section-content">
                <img
                  src="/moveTogether/9.jpg"
                  className="gallery-image"
                  alt="Move Together Problem 1"
                />
                <img
                  src="/moveTogether/10.jpg"
                  className="gallery-image"
                  alt="Move Together Problem 2"
                />
              </div>
            </section>

            <section id="solution" className="content-section">
              <div className="section-content">
                <img
                  src="/moveTogether/11.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 1"
                />
                <img
                  src="/moveTogether/12.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 2"
                />
                <img
                  src="/moveTogether/13.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 3"
                />
                <img
                  src="/moveTogether/14.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 4"
                />

                <div className="video-wrapper bg-gray-100 p-4 rounded-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-1/4 mx-auto block rounded-lg"
                  >
                    <source
                      src="/assets/vid/moveTogether.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <img
                  src="/moveTogether/15.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 5"
                />
                <img
                  src="/moveTogether/16.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 6"
                />
                <img
                  src="/moveTogether/17.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 7"
                />
                <img
                  src="/moveTogether/18.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 8"
                />
                <img
                  src="/moveTogether/20.jpg"
                  className="gallery-image"
                  alt="Move Together Solution 9"
                />
                <img
                  src="/moveTogether/thank you -1.jpg"
                  className="gallery-image"
                  alt="Move Together Thank You"
                />
              </div>
            </section>
          </main>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full  hover:bg-blue-700 transition-colors z-50"
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
