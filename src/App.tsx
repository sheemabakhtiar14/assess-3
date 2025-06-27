import React, { useState, useEffect } from "react";
import { Shield, Users, AlertTriangle, CheckCircle, Check } from "lucide-react";
import { Scenario } from "./scenarios/types";
import { scenarios13_17 } from "./scenarios/scenarios13-17";
import { scenarios18_30 } from "./scenarios/scenarios18-30";
import { scenarios31_60 } from "./scenarios/scenarios31-60";
import { scenarios61_90 } from "./scenarios/scenarios61-90";
import { saveAssessmentResults, AssessmentData } from "./lib/supabase";

interface UserInfo {
  name: string;
  age: number;
  language: string;
}

interface Response {
  scenarioId: string;
  selectedOption: number;
  riskLevel: "high" | "medium" | "low";
}

function App() {
  const [phase, setPhase] = useState<"intro" | "survey" | "report">("intro");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    age: 0,
    language: "English",
  });
  const [currentScenario, setCurrentScenario] = useState(0);
  const [responses, setResponses] = useState<Response[]>([]);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.age > 0) {
      // Set scenarios based on age
      if (userInfo.age >= 13 && userInfo.age <= 17) {
        setScenarios(scenarios13_17);
      } else if (userInfo.age >= 18 && userInfo.age <= 30) {
        setScenarios(scenarios18_30);
      } else if (userInfo.age >= 31 && userInfo.age <= 60) {
        setScenarios(scenarios31_60);
      } else if (userInfo.age >= 61 && userInfo.age <= 90) {
        setScenarios(scenarios61_90);
      } else {
        // For ages outside our ranges, use the closest age group
        if (userInfo.age < 13) {
          setScenarios(scenarios13_17);
        } else {
          setScenarios(scenarios61_90);
        }
      }
      setPhase("survey");
    }
  };

  const handleResponseSelect = async (optionIndex: number) => {
    const scenario = scenarios[currentScenario];
    const selectedResponse = scenario.responses[optionIndex];

    setSelectedOption(optionIndex);

    // Wait briefly before proceeding to next scenario
    setTimeout(async () => {
      const newResponse: Response = {
        scenarioId: scenario.id,
        selectedOption: optionIndex,
        riskLevel: selectedResponse.risk,
      };

      const updatedResponses = [...responses, newResponse];
      setResponses(updatedResponses);

      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedOption(null);
      } else {
        // Assessment completed - save to Supabase
        setIsSaving(true);
        setSaveError(null);

        try {
          // Calculate risk counts for the completed assessment
          const riskCounts = { high: 0, medium: 0, low: 0 };
          updatedResponses.forEach((response) => {
            riskCounts[response.riskLevel]++;
          });

          // Calculate overall risk using the same logic as the report
          let overallRisk: "high" | "medium" | "low";
          if (riskCounts.high === 0 && riskCounts.medium === 0) {
            overallRisk = "low";
          } else if (riskCounts.high > 0) {
            overallRisk = "high";
          } else {
            overallRisk = "medium";
          }

          // Prepare data for Supabase
          const assessmentData: AssessmentData = {
            name: userInfo.name,
            age: userInfo.age,
            language: userInfo.language,
            high_risk: riskCounts.high,
            medium_risk: riskCounts.medium,
            low_risk: riskCounts.low,
            over_all_risk: overallRisk,
          };

          // Save to Supabase
          await saveAssessmentResults(assessmentData);
          console.log("Assessment data saved successfully!");
        } catch (error) {
          console.error("Failed to save assessment data:", error);
          setSaveError("Failed to save your results. Please try again.");
        } finally {
          setIsSaving(false);
        }

        setPhase("report");
        setSelectedOption(null);
      }
    }, 500);
  };

  const calculateRiskReport = () => {
    const riskCounts = { high: 0, medium: 0, low: 0 };
    responses.forEach((response) => {
      riskCounts[response.riskLevel]++;
    });

    const total = responses.length;
    const highPercentage = (riskCounts.high / total) * 100;
    const mediumPercentage = (riskCounts.medium / total) * 100;
    const lowPercentage = (riskCounts.low / total) * 100;

    let overallRisk: "high" | "medium" | "low";
    let riskDescription: string;
    let recommendations: string[];

    // Show low risk only if no medium or high risk responses were selected
    if (riskCounts.high === 0 && riskCounts.medium === 0) {
      overallRisk = "low";
      riskDescription =
        "Excellent! You demonstrate strong digital safety awareness and critical thinking.";
      recommendations = [
        "Keep up your vigilant approach to online safety",
        "Share your knowledge with friends and family",
        "Stay informed about emerging digital threats",
        "Continue to trust your instincts and verify before acting",
      ];
    } else if (riskCounts.high > 0) {
      overallRisk = "high";
      riskDescription =
        "Your responses indicate vulnerability to online scams and digital threats.";
      recommendations = [
        "Always verify the authenticity of online offers and accounts",
        "Never share personal information with unverified sources",
        "Take time to research before making quick decisions online",
        "Consult with trusted adults or friends before engaging with suspicious content",
      ];
    } else {
      // Has medium risk responses but no high risk
      overallRisk = "medium";
      riskDescription =
        "You show some caution online but could benefit from enhanced digital awareness.";
      recommendations = [
        "Continue to verify sources but be more thorough in your checks",
        "Trust your instincts when something seems too good to be true",
        "Develop a habit of cross-referencing information from multiple sources",
        "Stay updated on common online scam tactics",
      ];
    }

    return {
      riskCounts,
      percentages: {
        high: highPercentage,
        medium: mediumPercentage,
        low: lowPercentage,
      },
      overallRisk,
      riskDescription,
      recommendations,
    };
  };

  const resetSurvey = () => {
    setPhase("intro");
    setUserInfo({ name: "", age: 0, language: "English" });
    setCurrentScenario(0);
    setResponses([]);
    setScenarios([]);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen transition-all duration-500 dark bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50 shadow-xl">
        <div className="max-w-6xl mx-auto px-6 py-5 header-container">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Shield className="h-7 w-7 text-white header-icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent header-title">
                Digital Habits Assessment
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10 main-container">
        {phase === "intro" && (
          <div className="max-w-2xl mx-auto animate-fade-in-up welcome-container">
            <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 border border-white/20 dark:border-slate-700/30 relative overflow-hidden animate-glow welcome-card">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

              <div className="text-center mb-12 relative z-10 welcome-text-section">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-float welcome-icon">
                  <Users className="h-12 w-12 text-white welcome-inner-icon" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 welcome-title">
                  Welcome
                </h2>
                <p className="text-slate-300 text-xl leading-relaxed max-w-lg mx-auto welcome-subtitle">
                  Discover how well you navigate the digital world
                </p>
              </div>

              <form
                onSubmit={handleUserInfoSubmit}
                className="space-y-8 relative z-10 form-container"
              >
                <div className="space-y-3 form-group">
                  <label className="block text-lg font-semibold text-slate-200 form-label">
                    What's your name?
                  </label>
                  <input
                    type="text"
                    required
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    className="w-full px-6 py-5 border-2 border-slate-600/50 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 bg-slate-800/50 text-white placeholder-slate-400 transition-all duration-300 text-lg backdrop-blur-sm hover:bg-slate-800/70 form-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-3 form-group">
                  <label className="block text-lg font-semibold text-slate-200 form-label">
                    How old are you?
                  </label>
                  <input
                    type="number"
                    required
                    min="13"
                    max="90"
                    value={userInfo.age || ""}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        age: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-6 py-5 border-2 border-slate-600/50 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 bg-slate-800/50 text-white placeholder-slate-400 transition-all duration-300 text-lg backdrop-blur-sm hover:bg-slate-800/70 form-input"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="space-y-3 form-group">
                  <label className="block text-lg font-semibold text-slate-200 form-label">
                    Preferred Language
                  </label>
                  <select
                    value={userInfo.language}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, language: e.target.value })
                    }
                    className="w-full px-6 py-5 border-2 border-slate-600/50 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 bg-slate-800/50 text-white transition-all duration-300 text-lg backdrop-blur-sm hover:bg-slate-800/70 form-input"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Telugu">Telugu</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-[1.02] text-lg relative overflow-hidden group welcome-submit-button"
                >
                  <span className="relative z-10">Begin Your Assessment →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </form>
            </div>
          </div>
        )}

        {phase === "survey" && scenarios.length > 0 && (
          <div className="max-w-5xl mx-auto animate-fade-in-up scenario-container">
            {/* Progress Bar */}
            <div className="mb-8 md:mb-12">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 md:mb-6 space-y-2 sm:space-y-0">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Assessment Progress
                  </h3>
                  <p className="text-slate-400 text-base md:text-lg">
                    Question {currentScenario + 1} of {scenarios.length}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {Math.round(
                      ((currentScenario + 1) / scenarios.length) * 100
                    )}
                    %
                  </div>
                  <div className="text-slate-400 text-sm">Complete</div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-slate-700/50 rounded-full h-3 md:h-4 shadow-inner backdrop-blur-sm">
                  <div
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 md:h-4 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
                    style={{
                      width: `${
                        ((currentScenario + 1) / scenarios.length) * 100
                      }%`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario Card */}
            <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl md:rounded-[2rem] shadow-2xl p-6 md:p-12 border border-white/20 dark:border-slate-700/30 relative overflow-hidden scenario-card">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-10">
                  <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-300/30 text-purple-200 text-xs md:text-sm font-bold rounded-full mb-6 md:mb-8 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                    {scenarios[currentScenario].theme}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight scenario-title">
                    {scenarios[currentScenario].title}
                  </h3>
                  <div className="prose dark:prose-invert max-w-none">
                    {scenarios[currentScenario].description
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-base md:text-xl scenario-description"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="space-y-4 md:space-y-5 response-container">
                  <h4 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center scenario-question">
                    <span className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 md:mr-4 text-xs md:text-sm font-bold scenario-question-icon">
                      ?
                    </span>
                    What would you do?
                  </h4>
                  {scenarios[currentScenario].responses.map(
                    (response, index) => (
                      <button
                        key={index}
                        onClick={() => handleResponseSelect(index)}
                        className={`w-full text-left p-4 md:p-8 border-2 rounded-2xl md:rounded-3xl transition-all duration-300 group relative overflow-hidden response-button ${
                          selectedOption === index
                            ? "border-green-400 bg-green-500/20 transform scale-[1.02] shadow-2xl shadow-green-500/20"
                            : "border-slate-600/50 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/10 hover:transform hover:scale-[1.01] backdrop-blur-sm"
                        }`}
                      >
                        <div className="flex items-start relative z-10">
                          <span
                            className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-sm md:text-lg font-bold mr-4 md:mr-6 mt-1 transition-all duration-300 response-letter ${
                              selectedOption === index
                                ? "bg-green-500 text-white shadow-lg animate-pulse"
                                : "bg-slate-700/50 text-slate-300 group-hover:bg-blue-500 group-hover:text-white backdrop-blur-sm"
                            }`}
                          >
                            {selectedOption === index ? (
                              <Check className="h-4 w-4 md:h-6 md:w-6" />
                            ) : (
                              String.fromCharCode(65 + index)
                            )}
                          </span>
                          <span
                            className={`text-slate-300 group-hover:text-white text-base md:text-xl leading-relaxed response-text ${
                              selectedOption === index
                                ? "text-green-100 font-medium"
                                : ""
                            }`}
                          >
                            {response.text}
                          </span>
                        </div>
                        {selectedOption !== index && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        )}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === "report" && responses.length > 0 && (
          <div className="max-w-6xl mx-auto report-container">
            {(() => {
              const report = calculateRiskReport();
              return (
                <div className="space-y-6">
                  {/* Header Card */}
                  <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 border border-white/20 dark:border-slate-700/30 text-center report-card">
                    <div className="report-text-section">
                      <div
                        className={`w-28 h-28 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300 report-icon ${
                          report.overallRisk === "high"
                            ? "bg-gradient-to-br from-red-500 to-red-600"
                            : report.overallRisk === "medium"
                            ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                            : "bg-gradient-to-br from-green-500 to-green-600"
                        }`}
                      >
                        {report.overallRisk === "high" ? (
                          <AlertTriangle className="h-14 w-14 text-white report-icon-inner" />
                        ) : report.overallRisk === "medium" ? (
                          <Shield className="h-14 w-14 text-white report-icon-inner" />
                        ) : (
                          <CheckCircle className="h-14 w-14 text-white report-icon-inner" />
                        )}
                      </div>
                      <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 report-title">
                        Your Digital Safety Report
                      </h2>
                      <p className="text-slate-300 text-xl mb-8 report-subtitle">
                        Based on your responses to {responses.length} scenarios
                      </p>

                      {/* Risk Level Badge */}
                      <div
                        className={`inline-flex items-center px-8 py-4 rounded-2xl text-2xl font-bold report-badge ${
                          report.overallRisk === "high"
                            ? "bg-red-500/20 text-red-200 border border-red-400/30"
                            : report.overallRisk === "medium"
                            ? "bg-yellow-500/20 text-yellow-200 border border-yellow-400/30"
                            : "bg-green-500/20 text-green-200 border border-green-400/30"
                        }`}
                      >
                        Overall Risk Level:{" "}
                        {report.overallRisk.charAt(0).toUpperCase() +
                          report.overallRisk.slice(1)}
                      </div>
                    </div>
                  </div>

                  {/* Risk Level Summary */}
                  <div
                    className={`bg-white/10 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 border-2 risk-summary-container ${
                      report.overallRisk === "high"
                        ? "border-red-400/30 bg-red-500/5"
                        : report.overallRisk === "medium"
                        ? "border-yellow-400/30 bg-yellow-500/5"
                        : "border-green-400/30 bg-green-500/5"
                    }`}
                  >
                    <h3
                      className={`text-3xl font-bold mb-6 risk-summary-title ${
                        report.overallRisk === "high"
                          ? "text-red-200"
                          : report.overallRisk === "medium"
                          ? "text-yellow-200"
                          : "text-green-200"
                      }`}
                    >
                      Assessment Results
                    </h3>
                    <p
                      className={`text-xl leading-relaxed risk-item-text ${
                        report.overallRisk === "high"
                          ? "text-red-300"
                          : report.overallRisk === "medium"
                          ? "text-yellow-300"
                          : "text-green-300"
                      }`}
                    >
                      {report.riskDescription}
                    </p>
                  </div>

                  {/* Response Breakdown */}
                  <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 border border-white/20 dark:border-slate-700/30 report-card">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center risk-summary-title">
                      Response Breakdown
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 risk-summary-grid">
                      <div className="bg-red-500/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-400/30 text-center transform hover:scale-105 transition-transform duration-300 risk-item">
                        <div className="text-6xl font-bold text-red-400 mb-4">
                          {report.riskCounts.high}
                        </div>
                        <div className="text-2xl font-bold text-red-300 mb-2 risk-item-text">
                          High Risk
                        </div>
                        <div className="text-lg text-red-400 risk-item-text">
                          {report.percentages.high.toFixed(1)}%
                        </div>
                      </div>
                      <div className="bg-yellow-500/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-yellow-400/30 text-center transform hover:scale-105 transition-transform duration-300 risk-item">
                        <div className="text-6xl font-bold text-yellow-400 mb-4">
                          {report.riskCounts.medium}
                        </div>
                        <div className="text-2xl font-bold text-yellow-300 mb-2 risk-item-text">
                          Medium Risk
                        </div>
                        <div className="text-lg text-yellow-400 risk-item-text">
                          {report.percentages.medium.toFixed(1)}%
                        </div>
                      </div>
                      <div className="bg-green-500/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-green-400/30 text-center transform hover:scale-105 transition-transform duration-300 risk-item">
                        <div className="text-6xl font-bold text-green-400 mb-4">
                          {report.riskCounts.low}
                        </div>
                        <div className="text-2xl font-bold text-green-300 mb-2 risk-item-text">
                          Low Risk
                        </div>
                        <div className="text-lg text-green-400 risk-item-text">
                          {report.percentages.low.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 border border-white/20 dark:border-slate-700/30 report-card recommendations-container">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center recommendation-title">
                      🛡️ Personalized Recommendations
                    </h3>
                    <div className="grid gap-6 recommendations-grid">
                      {report.recommendations.map((recommendation, index) => (
                        <div
                          key={index}
                          className="flex items-start p-6 bg-blue-500/10 rounded-2xl border border-blue-400/30 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-300 recommendation-card"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-slate-300 text-xl leading-relaxed recommendation-text">
                            {recommendation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="text-center bg-white/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 border border-white/20 dark:border-slate-700/30 report-card">
                    <h3 className="text-2xl font-bold text-white mb-6 recommendation-title">
                      Ready for another assessment?
                    </h3>
                    <button
                      onClick={resetSurvey}
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-[1.05] text-xl primary-button"
                    >
                      Take Assessment Again →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
