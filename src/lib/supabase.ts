import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ieiykubhwsfaalrgqwou.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllaXlrdWJod3NmYWFscmdxd291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMTIzMTIsImV4cCI6MjA2NjU4ODMxMn0.azBT_VCg2-A7_QA2mxFg85DjQ0wMtmM_tF-wKnRC1K4";

// Singleton pattern to avoid multiple client instances
let supabaseInstance: SupabaseClient | null = null;

const getSupabaseClient = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey);
  }
  return supabaseInstance;
};

export const supabase = getSupabaseClient();

// Type for the assessment data we'll store
export interface AssessmentData {
  name: string;
  age: number;
  language: string;
  high_risk: number;
  medium_risk: number;
  low_risk: number;
  over_all_risk: string;
}

// Function to save assessment results to Supabase
export async function saveAssessmentResults(data: AssessmentData) {
  try {
    const { data: result, error } = await supabase
      .from("scam_assessment_results")
      .insert([data])
      .select();

    if (error) {
      console.error("Error saving to Supabase:", error);
      throw error;
    }

    console.log("Assessment saved successfully!");
    return result;
  } catch (error) {
    console.error("Failed to save assessment:", error);
    throw error;
  }
}
