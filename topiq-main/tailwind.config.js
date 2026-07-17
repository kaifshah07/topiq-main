/** @type {import('tailwindcss').Config} */

export default {

  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme:{

    extend:{


      colors:{

        primary:"#01295A",
        secondary:"#FE7C02",

      },


      fontFamily:{

        sans:[
          "Inter",
          "sans-serif"
        ],

      },


      boxShadow:{


        premium:
        "0 20px 50px rgba(15,23,42,0.12)",


      },


      borderRadius:{


        premium:"24px",


      },


    },

  },


  plugins:[],

}