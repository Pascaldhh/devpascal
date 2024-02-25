import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <main>
      <section id="contact">
        <div className="lg: container pt-4 lg:pt-12">
          <div className="lg:flex lg:justify-between">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1>Contact</h1>
              <p className="mt-4 max-w-md font-medium">
                Drop me a message below, and let&apos;s start building something
                amazing together!
              </p>
              <form className="mt-8 flex w-full flex-col items-center gap-y-7 md:max-w-xl">
                <input
                  type="text"
                  className="w-full rounded px-5 py-3 font-medium shadow-[0_3px_8px_0] shadow-grey-800/20 placeholder:text-grey-200"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="w-full rounded px-5 py-3 font-medium shadow-[0_3px_8px_0] shadow-grey-900/20 placeholder:text-grey-200"
                  placeholder="Email"
                />
                <textarea
                  className="w-full resize-none rounded px-5 py-3 font-medium shadow-[0_3px_8px_0] shadow-grey-900/20 placeholder:text-grey-200"
                  placeholder="Message"
                  rows={5}
                ></textarea>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
            <div className="">
              <div className="mt-16">
                <h2>Contact information</h2>
                <div className="mt-2 flex flex-col gap-2 font-medium">
                  <Link
                    href="mailto:haan.pascal@hotmail.com"
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 text-center">
                      <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </div>
                    <p className="text-lg">haan.pascal@hotmail.com</p>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="w-8 text-center">
                      <FontAwesomeIcon icon={faLocationDot} size="lg" />
                    </div>
                    <p className="text-lg">Drenthe, Netherlands</p>
                  </div>
                </div>
              </div>
              <div className="mb-14 mt-12">
                <h2>Social networks</h2>
                <div className="mt-2 flex gap-4">
                  <Link
                    href="https://github.com/Pascaldhh/"
                    target="_blank"
                    className="transition-colors hover:text-red-primary-600"
                  >
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/pascal-de-haan/"
                    target="_blank"
                    className="transition-colors hover:text-red-primary-600"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
