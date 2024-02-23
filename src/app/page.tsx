import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faLaravel, faWordpress, faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CircleDownIcon from "@/components/icons/CircleDownIcon";
import SchoolIcon from "@/components/icons/SchoolIcon";
import RobotIcon from "@/components/icons/RobotIcon";
import DumbbellIcon from "@/components/icons/DumbbellIcon";
import SkillsSlider from "@/components/sliders/SkillsSlider";
import SkillInfo from "@/components/common/SkillInfo";



export default function HomePage() {
  const skillsInfo = {
    Laravel: <FontAwesomeIcon icon={faLaravel}/>,
    Wordpress: <FontAwesomeIcon icon={faWordpress}/>,
    React: <FontAwesomeIcon icon={faReact}/>,
    Nextjs: <></>,
    TailwindCSS: <></>,
    Bootstrap: <></>,
    SwiftUI: <></>,
  }
  
  return (
    <main>
      <section id="call-to-action" className="container-small">
        <div className="h-dynamic-hero flex justify-center items-center">
          <div className="flex flex-col -mt-4 gap-5">
            <div className="mx-auto">
              <div className="w-[40vmin] h-[40vmin] min-w-[15rem] min-h-[15rem] size-full relative">
                <Image src="/img/profile-picture.jpg"
                       fill alt="Image of me" 
                       className="object-cover object-top rounded-[3px] block"/>
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-[2.5rem] leading-none bg-gradient-to-br from-red-primary-400 to-red-primary-500 bg-clip-text text-transparent">Pascal de Haan</h1>
              <p className="font-semibold text-2xl">Full stack developer</p>
              <div className="flex flex-col gap-4 items-center mt-4">
                <div className="flex gap-2">
                  <Link href="/work" className="btn btn-primary">View work</Link>
                  <Link href="/resume" className="btn btn-secondary">Resume</Link>
                </div>
                <div className="flex gap-3 text-blue-900">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
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
      <section id="about" className="text-center mt-6 container">
        <h2 className="font-bold text-4xl leading-none bg-gradient-to-br to-red-primary-400 from-red-primary-500 bg-clip-text text-transparent">About me</h2>
        <div className="flex flex-col gap-8 mt-8 text-base font-medium">
          <div className="flex flex-col gap-y-2 items-center">
            <SchoolIcon className="size-24"/>
            <p>I&apos;m a passionate full-stack developer and current HBO-ICT student at
              Windesheim in the Netherlands.</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <RobotIcon className="size-24"/>
            <p>Programming is more than just a career for me; it&apos;s a hobby that I love exploring at work, school, and in my free time.</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <DumbbellIcon className="size-24"/>
            <p>I hit the gym three times a week. Outside the tech world, I enjoy the challenge of solving Rubik&apos;s cubes.</p>
          </div>
        </div>
        <Link href="/about" className="btn btn-primary mt-10 inline-block">Find out more</Link>
      </section>
      <section id="skills" className="mt-14">
        <div className="bg-gradient-to-b from-red-primary-400 to-red-primary-500 py-8">
          <h2 className="font-bold text-4xl text-center bg-gradient-to-br from-white to-grey-100 bg-clip-text text-transparent">Skills</h2>
          <SkillsSlider className="mt-6">
            {Object.entries(skillsInfo).map(([skill, icon], n) => 
              <SkillInfo key={n} 
                         icon={icon} 
                         text={skill} />
            )}
          </SkillsSlider>
        </div>
      </section>
    </main>
  );
}
