import { ReactNode } from "react";

interface SkillInfoProps {
  icon: ReactNode;
  text: string;
}

export default function SkillInfo({ icon, text }: SkillInfoProps) {
  return (
    <div className="inline-flex min-w-32 items-center gap-2 rounded-[3px] bg-white px-4 py-2 font-medium text-red-primary-900 [box-shadow:_2px_2px_3.7px_rgb(0,0,0,0.4)]">
      <div className="">{icon}</div>
      <p>{text}</p>
    </div>
  );
}
