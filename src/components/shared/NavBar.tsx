"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState} from "react";

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
  
  return (
    <nav ref={navRef} className="container group/nav">
      <div className="z-10 relative grid grid-cols-2 md:grid-cols-[repeat(3,max-content)] md:justify-between lg:grid-cols-3 items-center">
        <div className="text-nowrap">
          <Link onClick={() => setMobileOpen(false)} href="/" className="font-bold text-red-primary-500 select-none text-xl group"><span className="text-blue-800 transition-all group-[.open]/nav:text-grey-100 group-hover:-rotate-6 inline-block">dev</span><span className="transition-transform delay-150 group-hover:-rotate-6 inline-block">pascal</span></Link>
        </div>
        <ul className="group-[.open]/nav:flex group-[.open]/nav:flex-col group-[.open]/nav:top-[250%] group-[.open]/nav:absolute hidden md:flex justify-self-center items-center gap-10 font-medium">
          {Object.entries(menuItems).map(([key, value], n) => 
            <li key={n} className="select-none">
              <Link href={value} className={`bg-gradient-to-br from-50% to-[0] text-[transparent] bg-clip-text from-[--from-color] to-[--to-color] font-semibold [transition:_--from-color_150ms,--to-color_150ms] hover:[--from-color:_theme('colors.blue.800')] hover:[--to-color:_theme('colors.red.primary.500')] ${pathname == value ? " [--from-color:_theme('colors.blue.800')] [--to-color:_theme('colors.red.primary.500')]": " group-[.open]/nav:[--from-color:_theme('colors.grey.100')] group-[.open]/nav:[--to-color:_theme('colors.grey.100')]"}`}>{key}</Link>
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
      <div
        className="overflow-hidden invisible delay-300 transition-all group-[.open]/nav:delay-0 group-[.open]/nav:visible pointer-events-none select-none fixed grid grid-rows-20 inset-0 h-screen w-full">
        {[...Array(20)].map((_, n) =>
          <div key={n} className={`bg-grey-900 transition-transform duration-300 group-[.open]/nav:translate-x-0 ${n % 2 == 0 ? "translate-x-full " : "-translate-x-full "}`}></div>
        )}
      </div>
    </nav>
  );
}