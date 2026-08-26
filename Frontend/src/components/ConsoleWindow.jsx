export default function ConsoleWindow({ children }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "#0D1319",
        border: "1px solid #1D2731",
        boxShadow:
          "0 40px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02) inset",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "1px solid #1D2731", background: "#0F161D" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5C5C" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F5A623" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#45D9C8" }} />
        </div>
        <span className="mono text-xs" style={{ color: "#48586A" }}>
          troubleshoot.ai
        </span>
      </div>

      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}
