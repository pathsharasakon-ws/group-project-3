tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: "#0046a7",
            secondary: "#495f8f",
            accent: "#e2156d",
            background: "#fcf4ee",
          },
          fontFamily: {
            sans: ["Prompt", "sans-serif"],
          },
          keyframes: {
            fadeInUp: {
              "0%": { opacity: "0", transform: "translateY(20px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
          },
          animation: {
            "fade-in-up": "fadeInUp 0.8s ease-out forwards",
          },
        },
      },
    };