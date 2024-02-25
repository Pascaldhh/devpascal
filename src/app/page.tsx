import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faLaravel, faWordpress, faReact, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import CircleDownIcon from "@/components/icons/CircleDownIcon";
import SchoolIcon from "@/components/icons/SchoolIcon";
import RobotIcon from "@/components/icons/RobotIcon";
import DumbbellIcon from "@/components/icons/DumbbellIcon";
import SkillsSlider from "@/components/sliders/SkillsSlider";
import SkillInfo from "@/components/common/SkillInfo";
import NextjsIcon from "@/components/icons/NextjsIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import SwiftIcon from "@/components/icons/SwiftIcon";
import FlutterIcon from "@/components/icons/FlutterIcon";
import MauiIcon from "@/components/icons/MauiIcon";
import AspNetIcon from "@/components/icons/AspNetIcon";
import WorkSlider from "@/components/sliders/WorkSlider";
import WorkInfo from "@/components/common/WorkInfo";

export default function HomePage() {
  const skillsInfo = {
    Laravel: <FontAwesomeIcon icon={faLaravel} size="xl" className="text-red-400"/>,
    "ASP.NET Core": <AspNetIcon className="size-[24px]"/>,
    Wordpress: <FontAwesomeIcon icon={faWordpress} size="xl" className="text-grey-900"/>,
    React: <FontAwesomeIcon icon={faReact} size="xl" className="text-blue-500"/>,
    Nextjs: <NextjsIcon className="size-[24px] text-grey-900"/>,
    TailwindCSS: <TailwindIcon className="size-[24px] text-blue-400"/>,
    Bootstrap: <FontAwesomeIcon icon={faBootstrap} size="xl" className="text-purple-700"/>,
    SwiftUI: <SwiftIcon className="size-[24px] text-grey-900"/>,
    Flutter: <FlutterIcon className="size-[24px]"/>,
    ".NET Maui": <MauiIcon className="size-[24px]"/>
  }
  
  return (
    <main>
      <section id="call-to-action" className="container-small">
        <div className="h-dynamic-hero flex justify-center items-center">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center md:flex-1 -mt-4 md:-mt-8 gap-5">
            <div className="mx-auto md:order-2 md:mx-0">
              <div className="w-[40vmin] h-[40vmin] md:w-[310px] md:h-[310px] lg:w-[40vmin] lg:h-[40vmin] min-w-[15rem] min-h-[15rem] size-full relative">
                <Image src="/img/profile-picture.jpg"
                       fill alt="Image of me" 
                       className="object-cover object-top rounded-[3px] block"/>
              </div>
            </div>
            <div className="text-center md:order-1 md:text-left">
              <h1 className="leading-none">Pascal de Haan</h1>
              <p className="font-semibold text-2xl md:text-3xl lg:text-[2.1rem] md:mt-1">Full stack developer</p>
              <div className="flex flex-col items-center md:items-start xl:items-center xl:flex-row xl:justify-between gap-4 mt-4 md:mt-7">
                <div className="flex gap-4">
                  <Link href="/work" className="btn btn-primary">View work</Link>
                  <Link href="/resume" className="btn btn-secondary">Resume</Link>
                </div>
                <div className="flex gap-4 text-blue-900">
                  <Link href="https://github.com/Pascaldhh/"
                        target="_blank"
                        className="transition-colors hover:text-blue-600">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                  <Link href="https://linkedin.com/in/pascal-de-haan/"
                        target="_blank"
                        className="transition-colors hover:text-blue-600">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </Link>
                  <Link href="mailto:haan.pascal@hotmail.com"
                        className="transition-colors hover:text-blue-600">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-dynamic-bottom flex justify-center items-center">
          <Link href="#about">
            <CircleDownIcon className="size-[32px] animate-bounce"/>
          </Link>
        </div>
      </section>
      <section id="about" className="text-center pt-6">
        <h2 className="container">About me</h2>
        <div className="flex flex-col gap-8 md:gap-12 mt-8 md:mt-12 text-base font-medium">
          <div className="container-small-left flex flex-col md:flex-row md:text-right md:gap-x-10 gap-x-6 gap-y-2 items-center">
            <SchoolIcon className="size-24 md:shrink-0"/>
            <div className="hidden md:flex lg:w-full w-[70%] justify-center">
              <hr className="lg:w-[60%] w-full border-dashed border-blue-800 border-t-[3.5px] border-b-0 border-l-0 border-r-0"/>
            </div>
            <p>I&apos;m a passionate full-stack developer and current HBO-ICT student at
              Windesheim in the Netherlands.</p>
          </div>
          <div className="container-small-right flex flex-col md:flex-row md:text-left md:gap-x-10 lg:gap-x-6 gap-y-2 items-center">
            <RobotIcon className="size-24 md:order-3 md:shrink-0"/>
            <div className="hidden md:flex lg:w-full w-[70%] justify-center md:order-2">
              <hr className="lg:w-[60%] w-full border-dashed border-blue-800 border-t-[3.5px] border-b-0 border-l-0 border-r-0"/>
            </div>
            <p className="md:order-1">Programming is more than just a career for me; it&apos;s a hobby that I love
              exploring at work, school, and in my free time.</p>
          </div>
          <div className="container-small-left flex flex-col md:flex-row md:text-right md:gap-x-10 gap-x-6 gap-y-2 items-center">
            <DumbbellIcon className="size-24 md:shrink-0"/>
            <div className="hidden md:flex lg:w-full w-[70%] justify-center">
              <hr className="lg:w-[60%] w-full border-dashed border-blue-800 border-t-[3.5px] border-b-0 border-l-0 border-r-0"/>
            </div>
            <p>I hit the gym three times a week. Outside the tech world, I enjoy the challenge of solving Rubik&apos;s
              cubes.</p>
          </div>
        </div>
        <Link href="/about" className="btn btn-primary mt-10 inline-block">Find out more</Link>
      </section>
      <section id="skills" className="pt-[5.8rem]">
        <div className="relative bg-gradient-to-b from-red-primary-400 to-red-primary-500 py-8">
          <div className="md:container-small md:flex md:items-center md:gap-6">
            <h2 className="heading-white text-center md:order-2">Skills</h2>
            <SkillsSlider className="md:order-1">
              {Object.entries(skillsInfo).map(([skill, icon], n) =>
                <SkillInfo key={n}
                           icon={icon}
                           text={skill}/>
              )}
            </SkillsSlider>
            <div className="pointer-events-none absolute left-0 top-0 z-10 w-32 h-full bg-gradient-to-r from-red-primary-500"></div>
            <div className="pointer-events-none absolute right-0 top-0 z-10 w-32 h-full bg-gradient-to-l from-red-primary-500"></div>
          </div>
        </div>
      </section>
      <section id="work" className="pt-[5.8rem]">
        <div className="text-center">
          <h2>Checkout my work</h2>
          <WorkSlider className="mt-8 mb-10">
            <WorkInfo title="Portfolio" 
                      image="/img/project/portfolio.png"
                      alt="Portfolio website screenshot"
                      bgColor="text-red-primary-600"
                      githubUrl="https://github.com/Pascaldhh/DevPascal"
                      liveUrl="https://devpascal.nl/" 
            />
            <WorkInfo title="Enveus"
                      image="/img/project/enveus.png"
                      alt="Enveus website screenshot"
                      bgColor="text-grey-700"
                      githubUrl="https://github.com/Pascaldhh/Nextjs-multipage-with-scrollanimations"
                      liveUrl="http://demo.devpascal.nl/" 
            />
            <WorkInfo title="Sudoku"
                      image="/img/project/sudoku.jpeg"
                      bgColor="text-orange-700"
                      alt="Sudoku java app screenshot"
                      githubUrl="https://github.com/Pascaldhh/Sudoku"
            />
            <WorkInfo title="Enveus of creation"
                      image="/img/project/enveus-of-creation.png"
                      bgColor="text-blue-700"
                      alt="Enveus of creation website screenshot"
                      githubUrl="https://github.com/Pascaldhh/Nextjs-onepage"
                      liveUrl="http://demo2.devpascal.nl/" 
            />
          </WorkSlider>
          <Link href="/work" className="btn btn-primary">See all work</Link>
        </div>
      </section>
      <section id="contact" className="pt-[5.8rem]">
        <div className="relative bg-gradient-to-b from-red-primary-400 to-red-primary-500 py-12">
          <div className="container text-center">
            <h2 className="heading-white mb-8">Like what you see?</h2>
            <Link href="/contact" className="btn btn-primary">Contact</Link>
          </div>
        </div>
      </section>
    </main>
);
}
