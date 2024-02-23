"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState} from "react";
import Footer from "@/components/shared/Footer";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  
  const toggleMobileOpen = () => setMobileOpen(prev => !prev);
  
  useEffect(() => {
    const nav  = navRef.current;
    if(nav == null) return;
    nav.classList.toggle("open", mobileOpen);
  }, [navRef, mobileOpen]);
  
  const menuItems = {
    Home: "/",
    About: "/about",
    Work: "/work",
    Resume: "/resume",
    Contact: "/contact"
  };
  
  const animationDuration = "duration-[350ms]";
  const animationDelays = [
    `group-[.open]/nav:delay-[225ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[285ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[345ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[405ms] ${animationDuration}`,
    `group-[.open]/nav:delay-[465ms] ${animationDuration}`
  ];
  
  return (
    <nav ref={navRef} className="group/nav">
      <div className="container z-20 relative grid grid-cols-2 md:grid-cols-[repeat(3,max-content)] md:justify-between lg:grid-cols-3 items-center">
        <div className="text-nowrap">
          <Link onClick={() => setMobileOpen(false)} href="/" className="font-bold text-red-primary-500 select-none text-xl group"><span className="text-blue-800 transition-all group-[.open]/nav:text-grey-100 group-hover:-rotate-6 inline-block">dev</span><span className="transition-transform delay-150 group-hover:-rotate-6 inline-block">pascal</span></Link>
        </div>
        <ul className="overflow-hidden md:overflow-auto container md:px-0 md:mx-0 w-full md:w-auto flex invisible pointer-events-none md:pointer-events-auto group-[.open]/nav:pointer-events-auto group-[.open]/nav:visible md:visible flex-col md:flex-row text-lg md:text-base top-[300%] md:top-0 absolute md:static justify-self-start items-start md:flex md:justify-self-center md:items-center gap-10 font-medium">
          {Object.entries(menuItems).map(([routeName, route], n) => 
            <li key={n} className="group-[.open]/nav:w-full select-none">
              <Link onClick={() => setMobileOpen(false)} href={route} className={`flex items-center justify-between gap-5 transition-colors font-semibold hover:text-red-primary-500 ${pathname == route ? "text-red-primary-500": "group-[.open]/nav:text-grey-100 group-[.open]/nav:hover:text-red-primary-500 text-red-primary-900"}`}>
                <p className={`block transition-transform md:transition-none ${animationDelays[n]} -translate-x-44 group-[.open]/nav:translate-x-0 md:translate-x-0`}>{routeName}</p>
                <hr className={`block md:hidden opacity-0 group-[.open]/nav:opacity-100 ${animationDelays[n]} transition-opacity w-full border-dashed border-t-[2px] border-b-0 border-l-0 border-r-0`}/>
                <FontAwesomeIcon icon={faCircleArrowRight} 
                                 size="lg"
                                 className={`block md:hidden transition-[transform,_opacity] opacity-0 ${animationDelays[n]} translate-x-44 group-[.open]/nav:translate-x-0 group-[.open]/nav:opacity-100`}/>
              </Link>
            </li>
          )}
        </ul>
        <div className="justify-self-end flex gap-3">
          <button className="transition-colors text-red-primary-900 hover:text-red-primary-600 group-[.open]/nav:text-grey-100 group-[.open]/nav:hover:text-red-primary-600">
            <FontAwesomeIcon icon={faMoon}
                             size="lg"/>
          </button>
          <button onClick={toggleMobileOpen} className="flex md:hidden flex-col justify-center gap-[3px] transition-all group-[.open]/nav:rotate-45 group-[.open]/nav:delay-0 delay-200 text-red-primary-900 hover:text-red-primary-600 group-[.open]/nav:text-grey-100 group-[.open]/nav:hover:text-red-primary-600">
            <div className="rounded w-4 h-[3px] bg-current transition-all group-[.open]/nav:translate-y-1.5 group-[.open]/nav:opacity-0"></div>
            <div className="relative rounded w-6 h-[3px] bg-current">
              <div className="absolute rounded w-6 h-[3px] bg-current transition-transform group-[.open]/nav:-rotate-90 group-[.open]/nav:delay-0"></div>
            </div>
            <div
              className="rounded w-3 h-[3px] bg-current transition-all group-[.open]/nav:-translate-y-1.5 group-[.open]/nav:opacity-0"></div>
          </button>
        </div>
      </div>
      <div className="z-10 overflow-hidden invisible delay-300 transition-all group-[.open]/nav:delay-0 group-[.open]/nav:visible group-[.open]/nav:pointer-events-auto pointer-events-none select-none fixed grid grid-rows-20 inset-0 h-dynamic-screen w-full">
        {[...Array(20)].map((_, n) =>
          <div key={n} className={`bg-grey-900 transition-transform duration-300 group-[.open]/nav:translate-x-0 ${n % 2 == 0 ? "translate-x-full " : "-translate-x-full "}`}></div>
        )}
        <div className="w-full group-[.open]/nav:block absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-grey-100">
          <Footer classNameIcons="transition-all group-[.open]/nav:delay-[465ms] duration-[350ms] group-[.open]/nav:translate-y-0 group-[.open]/nav:opacity-100 translate-y-12 opacity-0" 
                  classNameCopy="transition-all group-[.open]/nav:delay-[500ms] duration-[350ms] group-[.open]/nav:translate-y-0 group-[.open]/nav:opacity-100 translate-y-12 opacity-0"/>
        </div>
      </div>
    </nav>
  );
}