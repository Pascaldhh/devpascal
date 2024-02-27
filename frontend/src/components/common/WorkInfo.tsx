import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

interface WorkInfoProps {
  title: string;
  image: string;
  alt: string;
  bgColor?: string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}
export default function WorkInfo({
  title,
  image,
  alt,
  githubUrl,
  liveUrl,
  bgColor,
  className,
}: WorkInfoProps) {
  return (
    <div className={className}>
      <div className="flex flex-col text-red-primary-900">
        <div
          className={`${bgColor ?? "text-red-primary-500"} relative rounded bg-current p-1.5 after:absolute after:inset-0 after:h-full after:w-full after:rounded after:opacity-35 after:shadow-lg after:shadow-current lg:p-2.5`}
        >
          <div className="relative w-72 pt-[60%] lg:w-96 2xl:w-[28.5rem]">
            <Image
              src={image}
              alt={alt}
              fill
              className="rounded object-cover"
            />
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex items-center gap-3">
            {liveUrl && (
              <Link
                href={liveUrl}
                className="hover:text-red-primary-600"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="size-[1.05rem]"
                />
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                className="hover:text-red-primary-600"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="size-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
