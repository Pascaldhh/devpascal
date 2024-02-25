import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

interface WorkInfoProps {
  title: string;
  image: string;
  alt: string;
  bgColor?: string
  githubUrl?: string;
  liveUrl?: string;
}
export default function WorkInfo({ title, image, alt, githubUrl, liveUrl, bgColor } : WorkInfoProps) {
  return (
    <div className="flex flex-col text-red-primary-900">
      <div className={`${bgColor ?? "text-red-primary-500"} bg-current relative after:absolute after:shadow-lg after:shadow-current after:inset-0 after:w-full after:h-full p-1.5 rounded after:rounded after:opacity-35`}>
        <div className="relative w-72 pt-[60%]">
          <Image src={image}
                 alt={alt} fill
                 className="object-cover rounded"
          />
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center gap-3">
          {liveUrl &&
            <Link href={liveUrl}
                  className="hover:text-red-primary-600"      
                  target="_blank">
              <FontAwesomeIcon icon={faUpRightFromSquare} 
                               className="size-[1.05rem]"/>
            </Link>
          }
          {githubUrl && 
            <Link href={githubUrl}
                  className="hover:text-red-primary-600"
                  target="_blank">
              <FontAwesomeIcon icon={faGithub}
                               className="size-5"/>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

