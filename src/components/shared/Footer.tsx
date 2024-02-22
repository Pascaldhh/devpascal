import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer() {
  return ( 
    <footer className="py-8 container-small">
      <div className="flex justify-between text-red-primary-900">
        <p className="font-medium">&copy; 2024 Pascal de Haan, All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="https://github.com/Pascaldhh/" 
                target="_blank" 
                className="transition-colors hover:text-red-primary-600">
            <FontAwesomeIcon icon={faGithub} size="xl"/>
          </Link>
          <Link href="https://linkedin.com/in/pascal-de-haan/" 
                target="_blank" 
                className="transition-colors hover:text-red-primary-600">
            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
          </Link>
          <Link href="mailto:haan.pascal@hotmail.com"
                className="transition-colors hover:text-red-primary-600">
            <FontAwesomeIcon icon={faEnvelope} size="xl"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}