import { motion } from "framer-motion";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



export default function ChartCard({

  title="Performance Analytics",

  description,

  data=[],

  type="line",

  dataKey="value",

  xKey="name",

  height=300,

  stats,

}) {



const renderChart = ()=>{


switch(type){


case "bar":

return (

<BarChart data={data}>

<CartesianGrid 
strokeDasharray="3 3"
/>


<XAxis

dataKey={xKey}

/>


<YAxis />


<Tooltip />


<Bar

dataKey={dataKey}

radius={[10,10,0,0]}

/>


</BarChart>

);





case "area":

return (

<AreaChart data={data}>


<CartesianGrid

strokeDasharray="3 3"

/>


<XAxis

dataKey={xKey}

/>


<YAxis />


<Tooltip />


<Area

type="monotone"

dataKey={dataKey}

/>


</AreaChart>

);







default:


return (

<LineChart data={data}>


<CartesianGrid

strokeDasharray="3 3"

/>


<XAxis

dataKey={xKey}

/>


<YAxis />


<Tooltip />


<Line

type="monotone"

dataKey={dataKey}

strokeWidth={3}

/>


</LineChart>

);



}


};







return (

<motion.div


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}


transition={{

duration:.6

}}


className="

bg-white

rounded-3xl

shadow-xl

p-6

"


>



{/* Header */}


<div

className="

flex

justify-between

items-start

mb-6

"


>


<div>


<h3

className="

text-xl

font-black

text-slate-900

"

>

{title}

</h3>


{

description &&

(

<p

className="

text-sm

text-gray-500

mt-2

"

>

{description}

</p>

)

}


</div>



</div>








{/* Stats */}



{

stats &&

(

<div

className="

grid

grid-cols-2

gap-4

mb-6

"


>


{

stats.map((item,index)=>(


<div

key={index}

className="

bg-slate-50

rounded-xl

p-4

"


>


<p

className="

text-sm

text-gray-500

"

>

{item.label}

</p>


<h4

className="

text-2xl

font-black

mt-1

"

>

{item.value}

</h4>


</div>


))


}


</div>

)

}









{/* Chart */}



<div

style={{

height

}}


>


<ResponsiveContainer

width="100%"

height="100%"

>


{

renderChart()

}


</ResponsiveContainer>



</div>







</motion.div>

);

}