import AnimatedSection from "../../../animations/AnimatedSection";
import CTAContent from "./CTAContent";
import CTAIllustration from "./CTAIllustration";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-slate-50/60 py-24 border-t border-slate-200/80 flex items-center justify-center">
      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] [background-image:linear-gradient(to_right,#01295A_1px,transparent_1px),linear-gradient(to_bottom,#01295A_1px,transparent_1px)] [background-size:42px_42px] pointer-events-none" />
      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-fullflex flex-col items-center">
        <AnimatedSection animation="fadeUp" className="w-full">
          <div className="grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="w-full">
              <CTAContent />
            </div>
            <div className="flex items-center justify-center w-full">
              <CTAIllustration />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}