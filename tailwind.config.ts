import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        skeleton: "#D8DCE0",
        skeletonDark: "#505458",
        "background-layer": "rgba(0, 0, 0, .38)",
        sliderOpacity: {
          from: "rgba(0, 0, 0, .38)",
          to: "transparent",
        },
        dark: {
          10: "#1E1D2B",
          20: "#252736",
          30: "#353647",
          40: "#717375",
          50: "#BABEC1",
          60: "#BABEC1",
          70: "#D8DCE0",
          80: "#E4E9EC",
          90: "#EBF0F4",
          100: "#FFFFFF",
          background: "#252736",
        },
        neutral: {
          10: "#FFFFFF",
          20: "#EBF0F4",
          30: "#E4E9EC",
          40: "#D8DCE0",
          50: "#BABEC1",
          60: "#989B9E",
          70: "#717375",
          80: "#5D5F61",
          90: "#3D3F40",
          100: "#000000",
          background: "#FCFCFC",
        },
        primary: {
          main: "#087df1",
          surface: "#52a4f5",
          border: "#3997f4",
          focus: "#0664c1",
          hover: "#cee5fc",
          pressed: "#054b91",
        },
        secondary: {
          main: "#C2A15D",
          surface: "#F3ECDF",
          border: "#EBE0C9",
          focus: "rgba(194, 161, 93, 0.2)",
          hover: "#A2864D",
          pressed: "#61502E",
        },
        tertiary: {
          main: "#FCEE21",
          surface: "#FCEE21",
          border: "#FCEE21",
          focus: "#FCEE21",
          hover: "#FCEE21",
          pressed: "#FCEE21",
          text: "#B0A502",
        },
        danger: {
          main: "#CB3A31",
          surface: "#FFF4F2",
          border: "#EEB4B0",
          hover: "#BD251C",
          pressed: "#731912",
        },
        warning: {
          main: "#CD7B2E",
          surface: "#FFF9F2",
          border: "#EECEB0",
          hover: "#BF6919",
          pressed: "#734011",
        },
        success: {
          main: "#43936C",
          surface: "#F7F7F7",
          border: "#B8DBCA",
          hover: "#367A59",
          pressed: "#20573D",
        },
        info: {
          main: "#3267E3",
          surface: "#F0F3FF",
          border: "#B1C5F6",
          hover: "#114CD6",
          pressed: "#11317D",
        },
        divider: {
          border: "#DEDEDE",
          darkBorder: "#505458",
        },
        darkDivider: {
          border: "#DEDEDE",
        },
        typography: {
          primary: "#000000",
          secondary: "#5D5F61",
        },
        others: {
          text: "#044639",
        },
        gradient: {
          primary: {
            from: "#406765",
            to: "#1A4846",
          },
          primaryDark: {
            from: "#1A4846",
            to: "#163C3A",
          },
          secondary: {
            from: "#CDB278",
            to: "#C3A25D",
          },
          secondaryDark: {
            from: "#C3A25D",
            to: "#A2874D",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
