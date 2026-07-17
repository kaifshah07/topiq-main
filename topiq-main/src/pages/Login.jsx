export default function Login(){

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-50
    ">


      <div className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-xl
        p-8
      ">


        <h1 className="
          text-3xl
          font-bold
          text-[#01295A]
          text-center
        ">
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



        <form className="
          mt-8
          space-y-5
        ">


          <input

            type="email"

            placeholder="Email Address"

            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-slate-200
              outline-none
              focus:border-[#FE7C02]
            "

          />



          <input

            type="password"

            placeholder="Password"

            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-slate-200
              outline-none
              focus:border-[#FE7C02]
            "

          />



          <button

            type="submit"

            className="
              w-full
              py-3
              rounded-full
              bg-[#FE7C02]
              text-white
              font-semibold
              hover:scale-[1.02]
              transition
            "

          >

            Login

          </button>


        </form>


      </div>


    </div>

  );

}