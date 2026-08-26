export default function ScanningState() {
  return (
    <div
      className="relative mt-6 h-24 rounded-lg overflow-hidden"
      style={{ background: "#080C10", border: "1px solid #1D2731" }}
    >
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #45D9C8, transparent)",
          animation: "scanSweep 1.6s linear infinite",
          boxShadow: "0 0 12px 1px #45D9C8",
        }}
      />
      <div
        className="flex items-center justify-center h-full mono text-xs"
        style={{ color: "#3E4C59" }}
      >
        reading trace, matching known failure patterns
        <span className="cursor-blink">_</span>
      </div>
    </div>
  );
}
