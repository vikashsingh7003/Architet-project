import { useLang } from "../context/LanguageContext";
import SpotlightCards from "./ui/spotlight-cards";
import { Search, Map, PenTool, CheckCircle } from "lucide-react";

const icons = [Search, Map, PenTool, CheckCircle];
const colors = ["#f59e0b", "#60a5fa", "#34d399", "#a78bfa"];

export function StatsSection() {
  const { tr } = useLang();
  const p = tr.process;

  const items = p.steps.map((step, i) => ({
    icon: icons[i % icons.length],
    title: `${step.num}. ${step.title}`,
    description: step.text,
    color: colors[i % colors.length],
  }));

  return (
    <section className="stats-section" aria-label="Our Process">
      <div className="stats-bg" />
      <div className="stats-overlay" />
      <div className="relative z-10 w-full max-w-7xl mx-auto py-20 px-4">
        <SpotlightCards 
          items={items} 
          eyebrow={p.label}
          heading=""
          className="!bg-transparent dark:!bg-transparent"
        />
      </div>
    </section>
  );
}
