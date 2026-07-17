import Navbar from "./Navbar";
import Footer from "./Footer";

import Container from "../ui/Container";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* Premium Background */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-1/2 
          -translate-x-1/2 
          w-[900px] h-[500px]
          bg-blue-100/40 
          blur-[120px]
          rounded-full"
        />

        <div className="absolute bottom-0 right-0
          w-[500px] h-[500px]
          bg-orange-100/30
          blur-[120px]
          rounded-full"
        />

      </div>


      <Navbar />


      <main>
        <Container>
          {children}
        </Container>
      </main>


      <Footer />

    </div>
  );
}