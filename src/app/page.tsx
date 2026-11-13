import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-4 md:space-y-10 py-12 sm:py-24 px-6 max-w-4xl mx-auto">
      <section id="hero" className="flex flex-col gap-12">
        <div className="mx-auto w-full max-w-4xl space-y-2">
          <div className="gap-8 flex flex-col md:flex-row  justify-between md:items-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-20 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex-col flex flex-1 space-y-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className=" text-2xl font-bold sm:text-3xl"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-sm md:text-base"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <span className="location-box pt-1">
                  <i className="location-icon" aria-hidden="true" />
                  {DATA.location}
                </span>
              </BlurFade>
            </div>
          </div>
        </div>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xs font-mono md:text-sm pb-4 text-muted-foreground">
              {"//"} about
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm md:text-base text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>

            <p className="text-sm md:text-base/relaxed pt-4">
              Currently, I&apos;m a full-time researcher at IIT Guwahati and
              also working on various cool projects and startups, including{" "}
              <Link
                href="https://navxenergy.com/"
                className="underline font-bold text-orange-500"
              >
                NavX Energy
              </Link>
              ,{" "}
              <Link
                href="https://getacsis.com"
                className="underline font-bold text-orange-500"
              >
                ACSIS
              </Link>
              , and{" "}
              <Link
                href="https://traceui.dev"
                className="underline font-bold text-orange-500"
              >
                Trace UI
              </Link>
            </p>
          </BlurFade>
        </section>
        <section id="whatido">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xs font-mono pb-4 md:text-sm text-muted-foreground">
              {"//"} what i do
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-row justify-between">
              {DATA.whatIdo.map((whatIdo: string, id: number) => (
                <div className="flex flex-row gap-3 items-center" key={id}>
                  {" "}
                  <i className="location-icon" aria-hidden="true" />
                  {whatIdo}
                </div>
              ))}
            </div>
          </BlurFade>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xs font-mono md:text-sm pb-4 text-muted-foreground">
                {"//"} skills & tools
              </h2>
            </BlurFade>
            <div className="stack-row">
              {DATA.skills.map((skill, id) => {
                const icon =
                  "icon" in skill
                    ? (skill as { icon: string }).icon
                    : undefined;
                const glyph =
                  "glyph" in skill
                    ? (skill as { glyph: string }).glyph
                    : undefined;
                return (
                  <BlurFade
                    key={skill.name}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <span className="stack-badge" data-tooltip={skill.name}>
                      {icon ? (
                        <Image
                          src={icon}
                          alt={skill.name}
                          width={22}
                          height={22}
                          className="image"
                          unoptimized
                        />
                      ) : (
                        <span className="badge-glyph">
                          {glyph || skill.name.slice(0, 2)}
                        </span>
                      )}
                    </span>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>
      </section>
      <div className="border border-foreground/10" />
      <section id="projects">
        <div className="space-y-4 md:space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col space-y-4 ">
              <div className="max-w-3xl space-y-2 md:space-y-4">
                <h2 className="text-xs font-mono md:text-sm text-muted-foreground">
                  {"//"} featured products
                </h2>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Products I&apos;ve designed, engineered, and shipped.
                </h2>
                <p className="text-muted-foreground text-base lg:text-base/relaxed ">
                  Product strategy, design, frontend engineering,
                  authentication, payments, and deployment - all shipped solo.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px]">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  // dates={project.dates}
                  tags={project.role}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <div className="border border-foreground/10" />
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xs font-mono md:text-sm text-muted-foreground mb-3">
              {"//"} experience
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                // href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xs font-mono md:text-sm text-muted-foreground mb-3">
              {"//"} education
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                // href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <div className="border border-foreground/10" />
      <section id="contact">
        <div className="grid gap-4 px-4 md:px-6 w-full pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-xs font-mono md:text-sm text-muted-foreground">
                {"//"} contact
              </h2>
              <h2 className="text-2xl font-bold  sm:text-3xl">
                Building something? Let&apos;s talk.
              </h2>
              <p className="mx-auto text-sm text-muted-foreground md:text-base/relaxed">
                Open to founding design / design engineering roles and
                interesting freelance builds.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
