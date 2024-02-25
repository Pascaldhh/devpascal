import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      purple: colors.purple,
      red: {
        primary: {
          "100": "#FFECEB",
          "200": "#F9B5B5",
          "300": "#F58A82",
          "400": "#E3564C",
          "500": "#C83126",
          "600": "#A7170D",
          "700": "#870D05",
          "800": "#680D06",
          "900": "#3D0400",
        },
        "100": "#FFEBEB",
        "200": "#FCB0B0",
        "300": "#F57676",
        "400": "#E33E3E",
        "500": "#CD2323",
        "600": "#B20F0F",
        "700": "#8D0606",
        "800": "#680202",
        "900": "#3D0000",
      },
      green: {
        "100": "#EBFFEB",
        "200": "#AFF9AF",
        "300": "#79EC79",
        "400": "#44DD44",
        "500": "#26C726",
        "600": "#0EAE0E",
        "700": "#078D07",
        "800": "#036503",
        "900": "#003D00",
      },
      orange: {
        "100": "#FFF3EB",
        "200": "#F7CBAB",
        "300": "#F2AF7D",
        "400": "#EA8943",
        "500": "#D66F24",
        "600": "#BD570D",
        "700": "#994305",
        "800": "#6F3002",
        "900": "#3D1A00",
      },
      blue: {
        "100": "#EBF6FF",
        "200": "#B1DEFF",
        "300": "#7CC0F2",
        "400": "#42A2E8",
        "500": "#2386CD",
        "600": "#1170B4",
        "700": "#06558E",
        "800": "#023C67",
        "900": "#00233D",
      },
      grey: {
        "100": "#E8E8E8",
        "200": "#B1B8BE",
        "300": "#8F9BA5",
        "400": "#6A7D8B",
        "500": "#546A7A",
        "600": "#3E5363",
        "700": "#2E4656",
        "800": "#243B4C",
        "900": "#182B39",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
