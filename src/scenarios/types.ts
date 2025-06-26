export interface Scenario {
  id: string;
  theme: string;
  title: string;
  description: string;
  responses: {
    text: string;
    risk: "high" | "medium" | "low";
  }[];
}
