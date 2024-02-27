import { SVGProps } from "react";

export default function DumbbellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <defs>
        <linearGradient id="dumbbell-icon-gradient">
          <stop
            className="[stop-color:_theme('colors.red.primary.400')]"
            offset="0%"
          />
          <stop
            className="[stop-color:_theme('colors.red.primary.500')]"
            offset="100%"
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#dumbbell-icon-gradient)"
        d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64H64c-17.7 0-32-14.3-32-32v-64c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c0-17.7 14.3-32 32-32h32V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32h-32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224v-64h192z"
      />
    </svg>
  );
}
