import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight:{
          "0%":{
            opacity: "0%",
            transform :"translate(-72%, -62%) scale(0.5)",
          },
          "100%":{
            opacity: "100%",
            transform :"translate(-50%%,-40%) scale(1))",
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight:"spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
// import type { Config } from "tailwindcss";
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");
// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     fontSize: {
//       sm: "0.750rem",
//       base: "1rem",
//       xl: "1.333rem",
//       "2xl": "1.777rem",
//       "3xl": "2.369rem",
//       "4xl": "3.158rem",
//       "5xl": "4.210rem",
//     },
//     fontFamily: {
//       heading: "Quando",
//       body: "Chakra Petch",
//     },
//     fontWeight: {
//       normal: "400",
//       bold: "700",
//     },
//     extend: {
//       colors: {
//         text: {
//           default: "var(--text-default)",
//           50: "var(--text-50)",
//           100: "var(--text-100)",
//           200: "var(--text-200)",
//           300: "var(--text-300)",
//           400: "var(--text-400)",
//           500: "var(--text-500)",
//           600: "var(--text-600)",
//           700: "var(--text-700)",
//           800: "var(--text-800)",
//           900: "var(--text-900)",
//           950: "var(--text-950)",
//         },
//         background: {
//           default: "var(--background-default)",
//           50: "var(--background-50)",
//           100: "var(--background-100)",
//           200: "var(--background-200)",
//           300: "var(--background-300)",
//           400: "var(--background-400)",
//           500: "var(--background-500)",
//           600: "var(--background-600)",
//           700: "var(--background-700)",
//           800: "var(--background-800)",
//           900: "var(--background-900)",
//           950: "var(--background-950)",
//         },
//         primary: {
//           default: "var(--primary-default)",
//           50: "var(--primary-50)",
//           100: "var(--primary-100)",
//           200: "var(--primary-200)",
//           300: "var(--primary-300)",
//           400: "var(--primary-400)",
//           500: "var(--primary-500)",
//           600: "var(--primary-600)",
//           700: "var(--primary-700)",
//           800: "var(--primary-800)",
//           900: "var(--primary-900)",
//           950: "var(--primary-950)",
//         },
//         secondary: {
//           default: "var(--secondary-default)",
//           50: "var(--secondary-50)",
//           100: "var(--secondary-100)",
//           200: "var(--secondary-200)",
//           300: "var(--secondary-300)",
//           400: "var(--secondary-400)",
//           500: "var(--secondary-500)",
//           600: "var(--secondary-600)",
//           700: "var(--secondary-700)",
//           800: "var(--secondary-800)",
//           900: "var(--secondary-900)",
//           950: "var(--secondary-950)",
//         },
//         accent: {
//           default: "var(--accent-default)",
//           50: "var(--accent-50)",
//           100: "var(--accent-100)",
//           200: "var(--accent-200)",
//           300: "var(--accent-300)",
//           400: "var(--accent-400)",
//           500: "var(--accent-500)",
//           600: "var(--accent-600)",
//           700: "var(--accent-700)",
//           800: "var(--accent-800)",
//           900: "var(--accent-900)",
//           950: "var(--accent-950)",
//         },
//       },
//       animation: {
//         spotlight: "spotlight 2s ease .75s 1 forwards",
//       },
//       keyframes: {
//         spotlight: {
//           "0%": {
//             opacity: "0",
//             transform: "translate(-72%, -62%) scale(0.5)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translate(-50%,-40%) scale(1)",
//           },
//         },
//       },
//     },
//   },
//   plugins: [addVariablesForColors],
// };
// export default config;

// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
// // colors: {
// //   'text': {
// //     50: 'rgb(245, 238, 246)',
// //     100: 'rgb(236, 221, 238)',
// //     200: 'rgb(217, 187, 221)',
// //     300: 'rgb(198, 153, 204)',
// //     400: 'rgb(179, 119, 187)',
// //     500: 'rgb(160, 85, 170)',
// //     600: 'rgb(128, 68, 136)',
// //     700: 'rgb(96, 51, 102)',
// //     800: 'rgb(64, 34, 68)',
// //     900: 'rgb(32, 17, 34)',
// //     950: 'rgb(16, 9, 17)',
// //   },
// //   'background': {
// //     50: 'rgb(240, 239, 245)',
// //     100: 'rgb(225, 224, 235)',
// //     200: 'rgb(194, 192, 216)',
// //     300: 'rgb(164, 161, 196)',
// //     400: 'rgb(133, 130, 176)',
// //     500: 'rgb(103, 98, 157)',
// //     600: 'rgb(82, 79, 125)',
// //     700: 'rgb(62, 59, 94)',
// //     800: 'rgb(41, 39, 63)',
// //     900: 'rgb(21, 20, 31)',
// //     950: 'rgb(10, 10, 16)',
// //   },
// //   'primary': {
// //     50: 'rgb(235, 250, 245)',
// //     100: 'rgb(215, 244, 236)',
// //     200: 'rgb(175, 233, 217)',
// //     300: 'rgb(135, 222, 197)',
// //     400: 'rgb(95, 211, 178)',
// //     500: 'rgb(55, 200, 159)',
// //     600: 'rgb(44, 160, 127)',
// //     700: 'rgb(33, 120, 95)',
// //     800: 'rgb(22, 80, 64)',
// //     900: 'rgb(11, 40, 32)',
// //     950: 'rgb(5, 20, 16)',
// //   },
// //   'secondary': {
// //     50: 'rgb(238, 238, 247)',
// //     100: 'rgb(222, 220, 239)',
// //     200: 'rgb(189, 185, 223)',
// //     300: 'rgb(156, 150, 207)',
// //     400: 'rgb(123, 115, 191)',
// //     500: 'rgb(90, 80, 175)',
// //     600: 'rgb(72, 64, 140)',
// //     700: 'rgb(54, 48, 105)',
// //     800: 'rgb(36, 32, 70)',
// //     900: 'rgb(18, 16, 35)',
// //     950: 'rgb(9, 8, 17)',
// //   },
// //   'accent': {
// //     50: 'rgb(236, 244, 249)',
// //     100: 'rgb(216, 234, 243)',
// //     200: 'rgb(178, 213, 230)',
// //     300: 'rgb(139, 192, 218)',
// //     400: 'rgb(101, 170, 205)',
// //     500: 'rgb(62, 149, 193)',
// //     600: 'rgb(50, 119, 154)',
// //     700: 'rgb(37, 90, 116)',
// //     800: 'rgb(25, 60, 77)',
// //     900: 'rgb(12, 30, 39)',
// //     950: 'rgb(6, 15, 19)',
// //   },
// //  }
