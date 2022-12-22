module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_52: "#f9fdff",
        deep_orange_50: "#fbeee6",
        gray_51: "#fff9f6",
        red_101: "#ecd6c8",
        gray_50: "#fff9f5",
        red_100: "#ffe0ce",
        white_A700_ab: "#ffffffab",
        deep_orange_900: "#883301",
        deep_orange_300: "#ff9e65",
        deep_orange_400: "#ff8b46",
        gray_600: "#6e6e6e",
        gray_700: "#626262",
        gray_601: "#7b7b7b",
        bluegray_300_33: "#91aebb33",
        gray_400: "#c4c4c4",
        gray_401: "#c0c0c0",
        bluegray_900_33: "#12344433",
        orange_A700: "#fd650b",
        gray_602: "#787878",
        gray_900: "#191919",
        bluegray_100: "#d6d6d6",
        yellow_50: "#fff7f0",
        gray_900_9e: "#1919199e",
        gray_300: "#dbdbdb",
        bluegray_600: "#406f85",
        bluegray_102: "#cfcfcf",
        bluegray_101: "#d9d9d9",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius4: "4px",
        radius8: "8px",
        radius10: "10px",
        radius14: "14px",
        radius16: "16px",
        radius20: "20px",
        radius30: "30px",
        radius40: "40px",
        radius50: "50%",
      },
      boxShadow: {
        bs: "0px 30px  30px 0px #91aebb33",
        bs1: "0px 30px  60px 0px #12344433",
      },
      fontFamily: { markoone: "Marko One", manrope: "Manrope" },
      letterSpacing: {
        ls1: "-1px",
        ls04: "-0.4px",
        ls044: "-0.44px",
        ls048: "-0.48px",
        ls056: "-0.56px",
        ls072: "-0.72px",
        ls092: "-0.92px",
        ls108: "-1.08px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
