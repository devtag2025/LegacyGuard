const SIGNAL_MATRIX = [
  {
    key: "propertyOwnership",
    weight: "HIGH",
    route: "adviser",
    test: (a) => a.property && a.property !== "no",
    flag: "Your situation includes property ownership — this is one of the most significant factors in how an estate is passed on.",
  },
  {
    key: "hasDependents",
    weight: "HIGH",
    route: "adviser",
    test: (a) => a.children && a.children !== "no",
    flag: "You have children or dependents — guardianship and inheritance structure need careful consideration.",
  },
  {
    key: "previousRelationshipKids",
    weight: "CRITICAL",
    route: "adviser",
    test: (a) => ["yes_previous", "yes_both"].includes(a.children),
    flag: "Children from a previous relationship introduce important legal considerations that a standard will may not address.",
  },
  {
    key: "establishedAssets",
    weight: "MEDIUM",
    route: "adviser",
    test: (a) => ["established", "significant"].includes(a.assets),
    flag: "Your asset profile may bring inheritance tax thresholds into scope — worth reviewing before finalising.",
  },
  {
    key: "familyComplexity",
    weight: "HIGH",
    route: "adviser",
    test: (a) => a.familyComplexity && a.familyComplexity !== "straightforward",
    flag: "Some family complexity was noted — this is worth exploring to make sure everyone is protected as intended.",
  },
  {
    key: "wantsProperAdvice",
    weight: "MEDIUM",
    route: "adviser",
    test: (a) => ["family_protected", "proper_advice"].includes(a.priority),
    flag: "You've indicated that proper protection matters to you — an adviser can help ensure that's achieved.",
  },
];

/**
 * classify(answers)
 * @param {Object} answers 
 * @returns {{ route: "adviser"|"simple-will", flags: string[], signals: string[] }}
 */
export function classify(answers) {
  const triggeredSignals = SIGNAL_MATRIX.filter((s) => s.test(answers));
  const flags = triggeredSignals.map((s) => s.flag);
  const signals = triggeredSignals.map((s) => s.key);

  const uniqueFlags = [...new Set(flags)];

  const route = triggeredSignals.length > 0 ? "adviser" : "simple-will";

  return { route, flags: uniqueFlags, signals };
}