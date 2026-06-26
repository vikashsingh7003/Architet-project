import { useLang } from "../context/LanguageContext";
import { Button } from "./ui/button";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = window.innerWidth <= 1024 ? 80 : 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

export function QuoteSection() {
  const { tr } = useLang();
  const q = tr.quote;
  
  return (
    <section className="quote-section" aria-label="Quote and call to action" style={{ minHeight: "80vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "url('/assets/images/quote_bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="quote-overlay" aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1 }} />
      {/* Top Left Text */}
      <div className="absolute top-6 left-6 z-10">
        <div className="relative flex flex-col gap-1">
          <p className="font-bold text-sm text-white">
            APA Via
          </p>
          <p className="font-medium text-xs text-white/70">
            Design without limits
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full flex items-center justify-center py-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[helvetica] text-white tracking-widest text-center uppercase">
              INFINITE POSSIBILITIES
            </h2>
          </div>
          
          <p className="max-w-2xl text-center font-medium text-lg text-white/80 leading-relaxed whitespace-pre-wrap">
            {q.title}
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <Button asChild className="rounded-full border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-black hover:border-white font-semibold px-8 transition-all shadow-lg" size="lg">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("about");
                }}
              >
                {q.btn}
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-black hover:border-white font-semibold px-8 transition-all shadow-lg"
              size="lg"
              variant="outline"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                {tr.nav.contact}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="absolute right-0 bottom-6 left-0 z-10 flex justify-center">
        <p className="px-4 py-1 font-medium text-xs text-white/70">
          Architecture & Design
        </p>
      </div>
    </section>
  );
}

