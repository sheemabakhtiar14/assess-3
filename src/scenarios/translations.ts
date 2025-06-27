import { Scenario } from "./types";
import { hindiTranslations } from "./hindi";
import { teluguTranslations } from "./telugu";
import { urduTranslations } from "./urdu";

// Interface for translated scenario data
export interface TranslatedScenario extends Omit<Scenario, "responses"> {
  responses: Array<{
    text: string;
    risk: "high" | "medium" | "low";
  }>;
}

// English scenarios (keeping original scenarios as base)
export const scenariosTranslations: Record<
  string,
  Record<string, TranslatedScenario[]>
> = {
  "13-17": {
    Hindi: hindiTranslations["13-17"],
    Telugu: teluguTranslations["13-17"],
    Urdu: urduTranslations["13-17"],
  },
  "18-30": {
    Hindi: hindiTranslations["18-30"],
    Telugu: teluguTranslations["18-30"],
    Urdu: urduTranslations["18-30"],
  },
  "31-60": {
    Hindi: hindiTranslations["31-60"],
    Telugu: teluguTranslations["31-60"],
    Urdu: urduTranslations["31-60"],
  },
  "61-90": {
    Hindi: hindiTranslations["61-90"],
    Telugu: teluguTranslations["61-90"],
    Urdu: urduTranslations["61-90"],
  },
};

export const getTranslatedScenarios = (
  ageGroup: string,
  language: string
): TranslatedScenario[] => {
  return scenariosTranslations[ageGroup]?.[language] || [];
};
