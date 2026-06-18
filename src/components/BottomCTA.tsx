import { ChevronIcon } from "./ArrowIcon";
import { ContactForm } from "./ContactForm";
import { useLang } from "../context/LanguageContext";

export function BottomCTA() {
  const { tr } = useLang();
  const c = tr.cta;
  return (
    <section id="contact" className="bottom-cta-section" aria-labelledby="bottom-cta-heading">
      <div className="bottom-cta-left">
        <p className="bottom-cta-label reveal">{c.label}</p>
        <h2 id="bottom-cta-heading" className="bottom-cta-heading reveal reveal-delay-1">{c.heading}</h2>
        <p className="bottom-cta-text reveal reveal-delay-2">{c.text}</p>
        <div className="reveal reveal-delay-3">
          <a href="tel:+00000000000" className="btn btn-cta" style={{ padding: "9px 20px" }}>
            <ChevronIcon />{tr.callBtn}
          </a>
        </div>
      </div>
      <div className="bottom-cta-right reveal reveal-delay-1">
        <ContactForm />
      </div>
    </section>
  );
}
