import { TriangleAlert } from "lucide-react";

export default function ErrorBanner({ message }) {
  return (
    <div
      className="rise mt-6 flex items-start gap-3 rounded-lg px-4 py-3"
      style={{ background: "#1A1112", border: "1px solid #3A1E20" }}
    >
      <TriangleAlert className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#FF5C5C" }} />
      <p className="text-[13px] leading-relaxed" style={{ color: "#E8B4B4" }}>
        {message}
      </p>
    </div>
  );
}
