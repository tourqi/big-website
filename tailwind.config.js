export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      colors: {
        brand: "#0F172A",         // primary (misal: navy gelap)
        brandAccent: "#EAB308",   // aksen (emas hangat)
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
   },
  plugins: [],
};
