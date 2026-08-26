export const SEVERITY = {
  HIGH: { color: "#FF5C5C", label: "High", fill: "92%" },
  MEDIUM: { color: "#F5A623", label: "Medium", fill: "58%" },
  LOW: { color: "#45D9C8", label: "Low", fill: "24%" },
};

export function getSeverity(level) {
  return SEVERITY[level] || SEVERITY.MEDIUM;
}
