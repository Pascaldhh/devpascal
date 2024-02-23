"use client";

import NavBar from "@/components/shared/NavBar";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setSticky] = useState(false);

  const checkSticky = () => setSticky(window.scrollY > 50);

  useEffect(() => {
    addEventListener("scroll", checkSticky);
    return () => removeEventListener("scroll", checkSticky);
  }, []);
  
  return (
    <header className={`${isSticky ? "border-b-grey-100 " : ""}sticky top-0 border-b border-transparent border-opacity-50 rounded py-6 bg-white bg-opacity-20 backdrop-blur`}>
      <NavBar />
    </header>
  );
}