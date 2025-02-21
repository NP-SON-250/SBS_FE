/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
      cardo: ['Cardo', 'serif'],
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        bg_light_primary: "#F5F9FD",
        desired: "#F8B042",
        glass: "rgba(255,255,255,0.25)",
        tblue:"#26599F",
        pcolor:"#545454",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".grid-areas-layout": {
          "grid-template-areas": `
            "sidebar header header header"
            "sidebar main main main"
          `,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
