import { ReactNode } from "react";

interface SkillInfoProps {
  icon: ReactNode;
  text: string;
}

export default function SkillInfo({ icon, text } : SkillInfoProps) {
  return (
    <div className="inline-flex font-medium text-red-primary-900 gap-2 items-center min-w-32 py-2 px-4 bg-white rounded-[3px] [box-shadow:_2px_2px_3.7px_rgb(0,0,0,0.4)]">
      <div className="">
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
}