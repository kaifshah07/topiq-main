export default function PrimaryButton({
  text
}) {

return (

<button className="px-8 py-4 rounded-full bg-blue-700 hover:bg-orange-500 text-white font-semibold transition duration-300 shadow-xl">

{text}

</button>

);

}