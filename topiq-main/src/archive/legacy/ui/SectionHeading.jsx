export default function SectionHeading({
  subtitle,
  title,
  description
}) {
  return (

<div className="text-center max-w-3xl mx-auto mb-16">

<p className="text-blue-600 uppercase font-semibold tracking-widest mb-3">

{subtitle}

</p>

<h2 className="text-5xl font-black mb-6">

{title}

</h2>

<p className="text-lg text-gray-600">

{description}

</p>

</div>

  );
}