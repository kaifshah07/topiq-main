import Reveal from "../animations/Reveal";
import Container from "./Container";


export default function Section({

  children,

  id = "",

  className = "",

  container = true,

  size = "default",

  reveal = true,

  background = "white",

  padding = "default",

}) {



  const backgrounds = {


    white: `
      bg-white
    `,


    light: `
      bg-slate-50
    `,


    dark: `
      bg-[#01295A]
    `,


    gradient: `
      bg-gradient-to-br
      from-[#01295A]
      via-[#063B7A]
      to-[#02142F]
    `,


    orange: `
      bg-orange-50
    `,


  };





  const paddings = {


    small: `
      py-16
    `,


    default: `
      py-28
    `,


    large: `
      py-36
    `,


  };






  const content = container ? (

    <Container size={size}>

      {children}

    </Container>


  ) : (

    children

  );






  return (

    <section

      id={id}


      className={`

        relative

        overflow-hidden

        ${backgrounds[background]}

        ${paddings[padding]}

        ${className}

      `}


    >


      {
        reveal ? (

          <Reveal>

            {content}

          </Reveal>

        )

        :

        (

          content

        )

      }


    </section>


  );

}