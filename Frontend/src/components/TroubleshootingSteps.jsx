import { ChevronRight } from "lucide-react";

export default function TroubleshootingSteps({ steps = [] }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-3">
        <ChevronRight className="w-3.5 h-3.5" style={{ color: "#7C8A99" }} />
        <span className="mono text-[11px] tracking-[0.18em] uppercase" style={{ color: "#5E7180" }}>
          Troubleshooting Steps
        </span>
      </div>
      <ol className="space-y-2.5">
        {steps.map((step, i) => (
          <li
            key={i}
            className="rise flex items-start gap-3 text-[14px] leading-relaxed"
            style={{ color: "#C6D0D8", animationDelay: `${i * 80}ms` }}
          >
            <span
              className="mono text-[11px] mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "#141C24", color: "#45D9C8", border: "1px solid #1D2731" }}
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
