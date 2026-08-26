import { getSeverity } from "../constants/severity";

export default function SeverityMeter({ level }) {
  const sev = getSeverity(level);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <span className="mono text-[11px] tracking-[0.18em] uppercase" style={{ color: "#5E7180" }}>
          Severity
        </span>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: sev.color, boxShadow: `0 0 8px ${sev.color}` }}
          />
          <span className="mono text-[12px] font-semibold" style={{ color: sev.color }}>
            {sev.label.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="h-1.5 w-full rounded-full overflow-hidden mb-7" style={{ background: "#141C24" }}>
        <div
          className="h-full rounded-full"
          style={{ width: sev.fill, background: sev.color, transition: "width 0.6s ease" }}
        />
      </div>
    </div>
  );
}
