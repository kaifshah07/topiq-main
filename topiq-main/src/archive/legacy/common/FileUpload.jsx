import {
  useState
} from "react";


import {
  motion
} from "framer-motion";


import {
  FaCloudUploadAlt,
  FaTimes,
  FaFile,
  FaImage
} from "react-icons/fa";





export default function FileUpload({

  label="Upload File",

  value=[],

  onChange,

  multiple=false,

  accept="image/*",

  maxSize=5,

  error,

  helperText,

}) {



const [dragActive,setDragActive]=useState(false);







const handleFiles=(files)=>{


const selected=[...files];


const validFiles=selected.filter(file=>{


const size=file.size / 1024 / 1024;


return size <= maxSize;


});



const updated = multiple

?

[...value,...validFiles]

:

validFiles.slice(0,1);



onChange(updated);



};







const handleDrop=(e)=>{


e.preventDefault();


setDragActive(false);


handleFiles(e.dataTransfer.files);


};









return (

<div className="w-full">







{/* Label */}



<label

className="

block

mb-2

text-sm

font-bold

text-slate-700

"

>

{label}

</label>









{/* Upload Box */}



<motion.div


whileHover={{

scale:1.01

}}



onDragOver={(e)=>{

e.preventDefault();

setDragActive(true);

}}



onDragLeave={()=>setDragActive(false)}



onDrop={handleDrop}



className={`

border-2

border-dashed

rounded-3xl

p-8

text-center

transition

cursor-pointer


${

dragActive

?

"border-orange-500 bg-orange-50"

:

"border-gray-300 bg-gray-50"

}


`}


>



<input


type="file"


multiple={multiple}


accept={accept}


hidden


id="file-upload"



onChange={(e)=>

handleFiles(e.target.files)

}


/>






<label

htmlFor="file-upload"


className="

cursor-pointer

flex

flex-col

items-center

gap-4

"


>


<div

className="

w-16

h-16

rounded-2xl

bg-orange-100

text-orange-500

flex

items-center

justify-center

text-3xl

"


>


<FaCloudUploadAlt />

</div>





<h3

className="

font-bold

text-slate-800

"

>

Drag & Drop files here

</h3>




<p

className="

text-sm

text-gray-500

"

>

or click to browse

</p>



<p

className="

text-xs

text-gray-400

"

>

Maximum size {maxSize}MB

</p>




</label>






</motion.div>









{/* Preview */}



{

value.length>0 &&

(

<div

className="

mt-5

space-y-3

"

>


{

value.map((file,index)=>(


<div


key={index}


className="

flex

items-center

justify-between

bg-white

border

rounded-xl

p-4

shadow-sm

"


>


<div

className="

flex

items-center

gap-4

"

>


{


file.type?.startsWith("image")

?

(

<div

className="

w-12

h-12

rounded-xl

overflow-hidden

bg-gray-100

"


>

<img

src={URL.createObjectURL(file)}

className="

w-full

h-full

object-cover

"

/>

</div>

)


:

(

<div

className="

w-12

h-12

rounded-xl

bg-blue-100

text-blue-500

flex

items-center

justify-center

"

>


<FaFile />

</div>


)

}





<div>


<p

className="

font-semibold

text-sm

"

>

{file.name}

</p>


<p

className="

text-xs

text-gray-500

"

>

{

(file.size/1024/1024).toFixed(2)

}

MB

</p>


</div>



</div>







<button


onClick={()=>{


const updated=value.filter(

(_,i)=>i!==index

);


onChange(updated);


}}



className="

text-red-500

hover:bg-red-50

p-2

rounded-lg

"


>


<FaTimes />

</button>






</div>


))


}



</div>

)

}









{

error &&

(

<p

className="

mt-2

text-sm

text-red-500

font-medium

"

>

{error}

</p>

)

}







{

helperText && !error &&

(

<p

className="

mt-2

text-xs

text-gray-500

"

>

{helperText}

</p>

)

}







</div>

);

}