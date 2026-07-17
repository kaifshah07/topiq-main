import { motion } from "framer-motion";


export default function Reveal({

    children,

    delay = 0,

    direction = "up",

    duration = 0.6,

    once = true

}) {



const animations = {


up:{
    hidden:{
        opacity:0,
        y:40
    },

    visible:{
        opacity:1,
        y:0
    }
},


down:{
    hidden:{
        opacity:0,
        y:-40
    },

    visible:{
        opacity:1,
        y:0
    }
},


left:{
    hidden:{
        opacity:0,
        x:-50
    },

    visible:{
        opacity:1,
        x:0
    }
},


right:{
    hidden:{
        opacity:0,
        x:50
    },

    visible:{
        opacity:1,
        x:0
    }
},


fade:{
    hidden:{
        opacity:0
    },

    visible:{
        opacity:1
    }
}


};







return (

<motion.div


variants={animations[direction]}


initial="hidden"


whileInView="visible"


viewport={{

once:once,

amount:0.2

}}



transition={{

duration:duration,

delay:delay,

ease:"easeOut"

}}



>

{children}


</motion.div>

);


}