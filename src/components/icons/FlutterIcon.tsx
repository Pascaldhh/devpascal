import { SVGProps } from "react";

export default function FlutterIcon (props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 202" {...props}>
      <defs>
        <linearGradient id="b">
          <stop offset="20%" stopOpacity={0.55}/>
          <stop offset="85%" stopColor="#616161" stopOpacity={0.01}/>
        </linearGradient>
        <linearGradient id="a" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="20%" stopOpacity={0.15}/>
          <stop offset="85%" stopColor="#616161" stopOpacity={0.01}/>
        </linearGradient>
      </defs>
      <path
        fill="#42A5F5"
        fillOpacity={0.8}
        d="M37.7 128.9 9.8 101l90.6-90.6h55.8M156.2 94h-55.8l-20.9 20.9 27.9 27.9"
      />
      <path fill="#0D47A1" d="m79.5 170.7 20.9 20.9h55.8l-48.8-48.8"/>
      <path
        fill="#42A5F5"
        d="m51.662 142.816 27.86-27.86 27.86 27.86-27.86 27.86z"
      />
      <path
        fill="url(#a)"
        d="M59.8 162.5h39.4v5.5H59.8z"
        transform="rotate(-45.001 79.53 142.782)"
      />
      <path fill="url(#b)" d="m79.5 170.7 41.4-14.3-13.5-13.6"/>
    </svg>
  );
};