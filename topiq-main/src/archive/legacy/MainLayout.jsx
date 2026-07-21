import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/layout/CTASection";

export default function MainLayout({
  children,
  showCTA = true,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Navbar />

      <main className="flex-1 pt-0">
        {children}
      </main>

      {showCTA && <CTASection />}

      <Footer />

    </div>
  );
}