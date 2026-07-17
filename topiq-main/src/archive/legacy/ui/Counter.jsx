import CountUp from "react-countup";

import {useInView} from "react-intersection-observer";

export default function Counter({

end,

suffix=""

}){

const{

ref,

inView

}=useInView({

triggerOnce:true

})

return(

<div ref={ref}>

{

inView &&

<CountUp

end={end}

duration={3}

/>

}

{suffix}

</div>

)

}