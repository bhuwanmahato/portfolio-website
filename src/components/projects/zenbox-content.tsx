"use client";
import { Project } from "@/types/project";
import { ProjectLayout } from "./project-layout";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ZenboxContentProps {
  project: Project;
}

export function ZenboxContent({ project }: ZenboxContentProps) {
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
                  <h3 className="text-xl font-bold mb-3">Zennbox</h3>
                  <p className=" text-sm leading-relaxed">
                    Zennbox is a cross-platform tool for storing and organizing
                    resources efficiently with advanced note-taking features,
                    designed to boost productivity and foster a focused,
                    efficient learning experience.
                  </p>
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

                <li>
                  <Button
                    onClick={() => scrollToSection("context")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    1. Context
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("research")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    2. Research & Analysis
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("design")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    3. Design
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("business")}
                    className="text-left transition-colors"
                    variant={"ghost"}
                  >
                    4. Business Model & Learnings
                  </Button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="md:ml-64 min-h-screen">
            {/* Context Section */}
            <section id="context">
              <div className="">
                <img
                  src="/zenbox/1.jpg"
                  alt="Zenbox Context 1"
                  className="w-full "
                />
                <img
                  src="/zenbox/2.jpg"
                  alt="Zenbox Context 2"
                  className="w-full "
                />
              </div>
            </section>

            {/* Research Section */}
            <section id="research" className="">
              <div className="">
                <img src="/zenbox/3.png" alt="Research 1" className="w-full " />
                <img src="/zenbox/4.jpg" alt="Research 2" className="w-full " />
                <img src="/zenbox/5.png" alt="Research 3" className="w-full " />
                <img src="/zenbox/6.jpg" alt="Research 4" className="w-full " />

                {/* Horizontal Scroll Gallery */}
                <div className="overflow-hidden bg-[#f5f9ff] p-8">
                  <div className="flex gap-6 animate-scroll-right">
                    <img
                      src="/zenbox/C1.png"
                      alt="Competitor 1"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/C2.png"
                      alt="Competitor 2"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/C3.png"
                      alt="Competitor 3"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/C4.png"
                      alt="Competitor 4"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/C5.png"
                      alt="Competitor 5"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                  </div>
                </div>

                <img
                  src="/zenbox/6.1.png"
                  alt="Research Analysis"
                  className="w-full "
                />
                <img
                  src="/zenbox/7.jpg"
                  alt="Research Insights"
                  className="w-full "
                />
                <img
                  src="/zenbox/9.png"
                  alt="Research Data"
                  className="w-full "
                />
                <img
                  src="/zenbox/10.jpg"
                  alt="Research Conclusion"
                  className="w-full "
                />
              </div>
            </section>

            {/* Design Section */}
            <section id="design" className="">
              <div className="max-w-6xl mx-auto ">
                <img
                  src="/zenbox/11.jpg"
                  alt="Design Process 1"
                  className="w-full "
                />
                <img
                  src="/zenbox/12.png"
                  alt="Design Process 2"
                  className="w-full "
                />
                <img
                  src="/zenbox/13.jpg"
                  alt="Design Process 3"
                  className="w-full "
                />
                <img
                  src="/zenbox/14.png"
                  alt="Design Process 4"
                  className="w-full "
                />
                <img
                  src="/zenbox/15.jpg"
                  alt="Design Process 5"
                  className="w-full "
                />
                <img
                  src="/zenbox/16.png"
                  alt="Design Process 6"
                  className="w-full "
                />

                {/* Design Gallery - Right Scroll */}
                <div className="  p-8  overflow-hidden bg-white">
                  <div className="flex gap-6 animate-scroll-right">
                    <img
                      src="/zenbox/D1.png"
                      alt="Design 1"
                      className="h-80 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/D2.png"
                      alt="Design 2"
                      className="h-80 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/D3.png"
                      alt="Design 3"
                      className="h-80 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/D4.png"
                      alt="Design 4"
                      className="h-80 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/D5.png"
                      alt="Design 5"
                      className="h-80 w-auto   flex-shrink-0"
                    />
                  </div>
                </div>

                {/* Prototype Gallery - Left Scroll */}
                <div className="  p-8  overflow-hidden bg-white">
                  <div className="flex gap-6 animate-scroll-left">
                    {/* originals */}
                    <img
                      src="/zenbox/P1.png"
                      alt="Prototype 1"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P2.png"
                      alt="Prototype 2"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P3.png"
                      alt="Prototype 3"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P4.png"
                      alt="Prototype 4"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P5.png"
                      alt="Prototype 5"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P6.png"
                      alt="Prototype 6"
                      className="h-96 w-auto   flex-shrink-0"
                    />

                    {/* dublicate set */}
                    <img
                      src="/zenbox/P1.png"
                      alt="Prototype 1"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P2.png"
                      alt="Prototype 2"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P3.png"
                      alt="Prototype 3"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P4.png"
                      alt="Prototype 4"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P5.png"
                      alt="Prototype 5"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                    <img
                      src="/zenbox/P6.png"
                      alt="Prototype 6"
                      className="h-96 w-auto   flex-shrink-0"
                    />
                  </div>
                </div>

                <img
                  src="/zenbox/17.png"
                  alt="Final Design 1"
                  className="w-full "
                />
                <img
                  src="/zenbox/18.jpg"
                  alt="Final Design 2"
                  className="w-full "
                />

                {/* Desktop Demo Video */}
                <div className="bg-black  p-8 flex justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-4/5 "
                  >
                    <source
                      src="/vid/desktop onboarding.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <img
                  src="/zenbox/19.jpg"
                  alt="Mobile Design 1"
                  className="w-full "
                />
                <img
                  src="/zenbox/20.jpg"
                  alt="Mobile Design 2"
                  className="w-full "
                />

                {/* Mobile Demo Video */}
                <div className="bg-black  p-8 flex justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-1/4 "
                  >
                    <source src="/vid/Collecting 1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <img
                  src="/zenbox/21.jpg"
                  alt="Features 1"
                  className="w-full "
                />
                <img
                  src="/zenbox/21.1.jpg"
                  alt="Features 2"
                  className="w-full "
                />
                <img
                  src="/zenbox/22.jpg"
                  alt="Features 3"
                  className="w-full "
                />
                <img
                  src="/zenbox/23.jpg"
                  alt="Features 4"
                  className="w-full "
                />
                <img
                  src="/zenbox/24.jpg"
                  alt="Features 5"
                  className="w-full "
                />
                <img
                  src="/zenbox/25.1.jpg"
                  alt="Features 6"
                  className="w-full "
                />

                {/* Figma Prototype */}
                <div className=" overflow-hidden ">
                  <iframe
                    className="w-full h-96 md:h-screen border border-gray-200"
                    src="https://embed.figma.com/proto/YHoPFVJn5dltqj5ckyxwF4/Themefy-Product-launch?page-id=1%3A284&node-id=2352-32023&node-type=frame&viewport=47418%2C10769%2C0.58&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2352%3A32023&show-proto-sidebar=1&embed-host=share"
                    allowFullScreen
                    title="Zenbox Figma Prototype"
                  />
                </div>
              </div>
            </section>

            {/* Business Section */}
            <section id="business" className=" bg-gray-50">
              <div className="max-w-6xl mx-auto ">
                <img
                  src="/zenbox/26.png"
                  alt="Business Model"
                  className="w-full "
                />
                <img src="/zenbox/27.jpg" alt="Learnings" className="w-full " />
                <img
                  src="/zenbox/thank you.jpg"
                  alt="Thank You"
                  className="w-full "
                />
                <img
                  src="/zenbox/thank you -1.png"
                  alt="Thank You 2"
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
          .animate-scroll-left {
            display: flex;
            animation: scroll-left 30s linear infinite;
            width: fit-content;
          }

          .animate-scroll-right {
            display: flex;
            animation: scroll-right 25s linear infinite;
            width: fit-content;
          }

          @keyframes scroll-left {
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

          /* Add fade mask for smooth edges */
        `}</style>
      </div>
    </ProjectLayout>
  );
}
