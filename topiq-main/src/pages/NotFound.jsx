import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-state">
      <div className="page-state__glow page-state__glow--blue" />
      <div className="page-state__glow page-state__glow--orange" />

      <div className="container relative z-10 text-center">
        <span className="section-kicker">Error 404</span>
        <p className="page-state__code" aria-hidden="true">404</p>
        <h1>That page is out of syllabus.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          The page may have moved, or the link may be incorrect. Let&apos;s get you back to learning.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary min-h-12 px-6 font-semibold">
            <Home size={18} /> Back to home
          </Link>
          <button type="button" onClick={() => window.history.back()} className="btn-secondary min-h-12 px-6 font-semibold">
            <ArrowLeft size={18} /> Go back
          </button>
        </div>
      </div>
    </section>
  );
}
