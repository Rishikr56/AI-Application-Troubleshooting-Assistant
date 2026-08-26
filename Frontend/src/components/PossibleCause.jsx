import { CircleAlert } from "lucide-react";

export default function PossibleCause({ text }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-2">
        <CircleAlert className="w-3.5 h-3.5" style={{ color: "#7C8A99" }} />
        <span className="mono text-[11px] tracking-[0.18em] uppercase" style={{ color: "#5E7180" }}>
          Possible Cause
        </span>
      </div>
      <p className="text-[14.5px] leading-relaxed" style={{ color: "#C6D0D8" }}>
        {text}
      </p>
    </div>
  );
}
