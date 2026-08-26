import { useRef, useState } from "react";
import "./styles/globals.css";

import { analyzeError, API_URL } from "./api/analyzeError";
import { SAMPLE_ERROR_TEXT, SAMPLE_RESULT } from "./constants/sampleResult";

import ConsoleWindow from "./components/ConsoleWindow";
import ErrorInput from "./components/ErrorInput";
import AnalyzeButton from "./components/AnalyzeButton";
import ScanningState from "./components/ScanningState";
import ErrorBanner from "./components/ErrorBanner";
import ResultPanel from "./components/ResultPanel";

export default function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [result, setResult] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  async function handleAnalyze() {
    if (!input.trim()) {
      triggerShake();
      return;
    }

    setStatus("loading");
    setErrMsg("");
    setResult(null);

    try {
      const data = await analyzeError(input);
      console.log("in app js file", data);
      setResult(data);
      setStatus("done");
    } catch (e) {
      setErrMsg(
        "Couldn't reach the backend. Wire up API_URL in src/api/analyzeError.js to your Gemini analysis route.",
      );
      setStatus("error");
    }
  }

  function triggerShake() {
    setShake(true);
    inputRef.current?.focus();
    setTimeout(() => setShake(false), 420);
  }

  function handleViewSample() {
    setInput(SAMPLE_ERROR_TEXT);
    setResult(SAMPLE_RESULT);
    setStatus("done");
    setErrMsg("");
  }

  return (
    <div
      className="min-h-screen w-full flex items-start justify-center px-4 py-12 sm:py-20"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #121B22 0%, #090D11 60%, #060809 100%)",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-2 mb-4 px-1">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#45D9C8", boxShadow: "0 0 8px #45D9C8" }}
          />
          <span
            className="mono text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "#5E7180" }}
          >
            Diagnostic Console
          </span>
        </div>

        <ConsoleWindow>
          <h1
            className="text-2xl sm:text-[26px] font-semibold leading-snug mb-1"
            style={{ color: "#EAF1F6" }}
          >
            What broke?
          </h1>
          <p className="text-sm mb-6" style={{ color: "#6B7B8C" }}>
            Paste the error exactly as it appeared. The more context, the better
            the read.
          </p>

          <ErrorInput
            ref={inputRef}
            value={input}
            onChange={setInput}
            onSubmit={handleAnalyze}
            onViewSample={handleViewSample}
            shake={shake}
          />

          <AnalyzeButton
            onClick={handleAnalyze}
            loading={status === "loading"}
          />

          {status === "loading" && <ScanningState />}
          {status === "error" && <ErrorBanner message={errMsg} />}
          {status === "done" && result && <ResultPanel result={result} />}
        </ConsoleWindow>

        <p
          className="mono text-center text-[11px] mt-5"
          style={{ color: "#3E4C59" }}
        >
          POST {"{ error }"} → {API_URL} → returns severity, cause, steps,
          action
        </p>
      </div>
    </div>
  );
}
