import { CircleCheck } from "lucide-react";

export default function RecommendedAction({ text }) {
  return (
    <div
      className="rounded-lg px-4 py-3.5 flex items-start gap-3"
      style={{ background: "rgba(69,217,200,0.06)", borderLeft: "3px solid #45D9C8" }}
    >
      <CircleCheck className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#45D9C8" }} />
      <div>
        <span
          className="mono text-[11px] tracking-[0.18em] uppercase block mb-1"
          style={{ color: "#45D9C8" }}
        >
          Recommended Action
        </span>
        <p className="text-[14px] leading-relaxed" style={{ color: "#DCE4EA" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
