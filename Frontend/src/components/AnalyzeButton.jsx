import { Play, Loader2 } from "lucide-react";

export default function AnalyzeButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg py-3 font-medium text-[14px] transition-transform active:scale-[0.99] disabled:cursor-wait"
      style={{
        background: loading
          ? "#132028"
          : "linear-gradient(180deg, #4FE3D1 0%, #33B8A8 100%)",
        color: loading ? "#5E7180" : "#062024",
        boxShadow: loading ? "none" : "0 8px 20px -6px rgba(69,217,200,0.45)",
      }}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Analyzing
        </>
      ) : (
        <>
          <Play className="w-3.5 h-3.5" fill="currentColor" />
          Analyze Error
        </>
      )}
    </button>
  );
}
