import { ReactNode } from "react";

interface SkillInfoProps {
  icon: ReactNode;
  text: string;
}

export default function SkillInfo({ icon, text } : SkillInfoProps) {
  return (
    <div>
      <div className="inline-flex min-w-32 py-2 px-4 bg-white rounded-[3px] shadow-2xl shadow-blue-100">
        <div className="">
          {icon}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}