import { useLang } from "../context/LanguageContext";
import CardFlip from "./CardFlip";

export function StatsSection() {
  const { tr } = useLang();
  const p = tr.process;

  return (
    <section className="stats-section" aria-label="Our Process">
      <div className="stats-bg" />
      <div className="stats-overlay" />
      <div className="stats-inner">
        <p className="stats-label">{p.label}</p>
        <div className="stats-grid">
          {p.steps.map((step, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <CardFlip
                title={`${step.num}. ${step.title}`}
                subtitle={step.title}
                description={step.text}
                features={["Consultation", "Design", "Execution"]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
