export default function Login(){

  return (

    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-28 sm:px-6">

      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />


      <div className="relative w-full max-w-md rounded-[28px] border border-white/80 bg-white/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:p-8">


        <h1 className="text-center text-3xl font-bold text-[#01295A] sm:text-4xl">
          Login
        </h1>


        <p className="
          text-sm
          text-slate-500
          text-center
          mt-2
        ">
          Welcome back to TOPIQ
        </p>



        <form className="mt-8 space-y-5">


          <input

            type="email"

            placeholder="Email Address"

            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"

          />



          <input

            type="password"

            placeholder="Password"

            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"

          />



          <button

            type="submit"

            className="w-full rounded-xl bg-gradient-to-r from-[#01295A] to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"

          >

            Login

          </button>


        </form>


      </div>


    </div>

  );

}
