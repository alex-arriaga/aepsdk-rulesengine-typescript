import { parseRules } from "./parser";
import { RuleSet } from "./types/rules";

export default function RulesEngine(ruleset: RuleSet) {
  const { rules } = parseRules(ruleset);

  return {
    execute: (context) =>
      rules
        .map((rule) => rule.execute(context))
        .filter((arr) => arr.length > 0),
  };
}
