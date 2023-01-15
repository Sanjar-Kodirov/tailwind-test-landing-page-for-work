module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        10: "0.625rem",
        63: "3.975rem",
        12: "0.75rem",
      },
      colors: {
        "warna-primary": "#14213D",
        "warna-teks": "#303948",
        "warna-teks-2": "#59616D",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "35px",
        lg: "0.5rem",
        large: "70px",
      },
      fontSize: {
        16: "1rem",
        18: "1.125rem",
        22: "1.375rem",
        36: "2.25rem",
        50: "3.125rem",
      },
      lineHeight: {
        23: "1.4375rem",
        26: "1.625rem",
        31: "1.9375rem",
        51: "3.1875rem",
        71: "4.4375rem",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
    },
  },
  plugins: [],
};
