import { forwardRef } from "react";

const ErrorInput = forwardRef(function ErrorInput(
  { value, onChange, onSubmit, onViewSample, shake },
  ref
) {
  return (
    <div
      className={`rounded-lg overflow-hidden ${shake ? "shake" : ""}`}
      style={{
        background: "#080C10",
        border: `1px solid ${shake ? "#FF5C5C" : "#1D2731"}`,
        transition: "border-color 0.2s ease",
      }}
    >
      <div className="flex items-start gap-2 px-4 pt-3">
        <span className="mono text-sm select-none" style={{ color: "#45D9C8" }}>
          &gt;
        </span>
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) onSubmit();
          }}
          placeholder="MongoServerError: Authentication failed"
          rows={4}
          className="mono w-full bg-transparent resize-none outline-none text-[13.5px] leading-relaxed pb-3 pr-2"
          style={{ color: "#DCE4EA" }}
        />
      </div>
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderTop: "1px solid #161E26" }}
      >
        <span className="mono text-[11px]" style={{ color: "#3E4C59" }}>
          ⌘/Ctrl + Enter to run
        </span>
        <button
          type="button"
          onClick={onViewSample}
          className="mono text-[11px] hover:underline"
          style={{ color: "#4B5A67" }}
        >
          view sample output
        </button>
      </div>
    </div>
  );
});

export default ErrorInput;
