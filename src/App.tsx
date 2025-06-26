import React, { useState, useEffect } from "react";
import { Shield, Users, AlertTriangle, CheckCircle, Check } from "lucide-react";
import { Scenario } from "./scenarios/types";
import { scenarios13_17 } from "./scenarios/scenarios13-17";
import { scenarios18_30 } from "./scenarios/scenarios18-30";
import { scenarios31_60 } from "./scenarios/scenarios31-60";
import { scenarios61_90 } from "./scenarios/scenarios61-90";

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

  const handleResponseSelect = (optionIndex: number) => {
    const scenario = scenarios[currentScenario];
    const selectedResponse = scenario.responses[optionIndex];

    setSelectedOption(optionIndex);

    // Wait briefly before proceeding to next scenario
    setTimeout(() => {
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
    <div className="min-h-screen transition-all duration-500 dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-700/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Habits Assessment
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {phase === "intro" && (
          <div className="max-w-lg mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                  Welcome
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Help us understand your digital habits by sharing some basic
                  information
                </p>
              </div>

              <form onSubmit={handleUserInfoSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Age
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
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Preferred Language
                  </label>
                  <select
                    value={userInfo.language}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, language: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white transition-all duration-300"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Telugu">Telugu</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Assessment
                </button>
              </form>
            </div>
          </div>
        )}

        {phase === "survey" && scenarios.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Progress
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {currentScenario + 1} of {scenarios.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
                  style={{
                    width: `${
                      ((currentScenario + 1) / scenarios.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Scenario Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-200 dark:border-purple-700 text-purple-800 dark:text-purple-200 text-sm font-semibold rounded-full mb-6">
                    {scenarios[currentScenario].theme}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {scenarios[currentScenario].title}
                  </h3>
                  <div className="prose dark:prose-invert max-w-none">
                    {scenarios[currentScenario].description
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    What would you do?
                  </h4>
                  {scenarios[currentScenario].responses.map(
                    (response, index) => (
                      <button
                        key={index}
                        onClick={() => handleResponseSelect(index)}
                        className={`w-full text-left p-6 border-2 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                          selectedOption === index
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20 transform scale-[1.02]"
                            : "border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-lg hover:transform hover:scale-[1.01]"
                        }`}
                      >
                        <div className="flex items-start relative z-10">
                          <span
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 transition-all duration-300 ${
                              selectedOption === index
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 group-hover:bg-blue-500 group-hover:text-white"
                            }`}
                          >
                            {selectedOption === index ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              index + 1
                            )}
                          </span>
                          <span
                            className={`text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white text-lg leading-relaxed ${
                              selectedOption === index
                                ? "text-green-700 dark:text-green-300"
                                : ""
                            }`}
                          >
                            {response.text}
                          </span>
                        </div>
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === "report" && responses.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {(() => {
              const report = calculateRiskReport();
              return (
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-center mb-10">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${
                        report.overallRisk === "high"
                          ? "bg-gradient-to-br from-red-500 to-red-600"
                          : report.overallRisk === "medium"
                          ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                          : "bg-gradient-to-br from-green-500 to-green-600"
                      }`}
                    >
                      {report.overallRisk === "high" ? (
                        <AlertTriangle className="h-10 w-10 text-white" />
                      ) : report.overallRisk === "medium" ? (
                        <Shield className="h-10 w-10 text-white" />
                      ) : (
                        <CheckCircle className="h-10 w-10 text-white" />
                      )}
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                      Your Digital Safety Report
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Based on your responses to {responses.length} scenarios
                    </p>
                  </div>

                  {/* Risk Level Summary */}
                  <div
                    className={`p-8 rounded-2xl mb-10 border-2 ${
                      report.overallRisk === "high"
                        ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                        : report.overallRisk === "medium"
                        ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                        : "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        report.overallRisk === "high"
                          ? "text-red-800 dark:text-red-200"
                          : report.overallRisk === "medium"
                          ? "text-yellow-800 dark:text-yellow-200"
                          : "text-green-800 dark:text-green-200"
                      }`}
                    >
                      Overall Risk Level:{" "}
                      {report.overallRisk.charAt(0).toUpperCase() +
                        report.overallRisk.slice(1)}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        report.overallRisk === "high"
                          ? "text-red-700 dark:text-red-300"
                          : report.overallRisk === "medium"
                          ? "text-yellow-700 dark:text-yellow-300"
                          : "text-green-700 dark:text-green-300"
                      }`}
                    >
                      {report.riskDescription}
                    </p>
                  </div>

                  {/* Response Breakdown */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Response Breakdown
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border-2 border-red-200 dark:border-red-800">
                        <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                          {report.riskCounts.high}
                        </div>
                        <div className="text-lg font-semibold text-red-700 dark:text-red-300 mb-1">
                          High Risk
                        </div>
                        <div className="text-sm text-red-600 dark:text-red-400">
                          {report.percentages.high.toFixed(1)}%
                        </div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800">
                        <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                          {report.riskCounts.medium}
                        </div>
                        <div className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 mb-1">
                          Medium Risk
                        </div>
                        <div className="text-sm text-yellow-600 dark:text-yellow-400">
                          {report.percentages.medium.toFixed(1)}%
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border-2 border-green-200 dark:border-green-800">
                        <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {report.riskCounts.low}
                        </div>
                        <div className="text-lg font-semibold text-green-700 dark:text-green-300 mb-1">
                          Low Risk
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          {report.percentages.low.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Recommendations
                    </h3>
                    <ul className="space-y-4">
                      {report.recommendations.map((recommendation, index) => (
                        <li
                          key={index}
                          className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
                        >
                          <CheckCircle className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            {recommendation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={resetSurvey}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Take Assessment Again
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
