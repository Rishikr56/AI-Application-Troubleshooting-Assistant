import SeverityMeter from "./SeverityMeter";
import PossibleCause from "./PossibleCause";
import TroubleshootingSteps from "./TroubleshootingSteps";
import RecommendedAction from "./RecommendedAction";

export default function ResultPanel({ result }) {
  return (
    <div className="rise mt-7">
      <div
        className="h-px w-full mb-6"
        style={{
          background:
            "linear-gradient(90deg, transparent, #1D2731 15%, #1D2731 85%, transparent)",
        }}
      />

      <SeverityMeter level={result?.severity} />
      <PossibleCause text={result?.cause} />
      <TroubleshootingSteps steps={result?.steps} />
      <RecommendedAction text={result?.action} />
    </div>
  );
}
