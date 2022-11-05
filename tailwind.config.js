/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        waffle_cone: "url('/src/assets/img/waffle_cone.jpg')",
        sign_one: "url('/src/assets/img/scoop_sign_1.jpg')",
        sign_two: "url('/src/assets/img/scoop_sign_2.jpg')",
      },
    },
  },
  plugins: [],
};
