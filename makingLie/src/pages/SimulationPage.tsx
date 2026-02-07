import MiniGameBox from "../components/MiniGameBox";
import ProbabilityCard from "../components/ProbabilityCard";

interface ScenarioItem {
  percent: string; // "40%"
  reaction: string;
}

const SimulationPage = () => {
  const stored = localStorage.getItem("resultData");

  if (!stored) return null;

  const parsed = JSON.parse(stored);
  const scenario: ScenarioItem[] = parsed.scenario ?? [];

  const mappedData = scenario
    .map((item, index) => ({
      id: index,
      probability: Number(item.percent.replace("%", "")), // ⭐ 핵심
      comment: item.reaction,
    }))
    .sort((a, b) => b.probability - a.probability);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] pb-20 gap-5">
      <h1 className="mt-[27px] text-4xl font-extrabold text-gray-900">
        시뮬레이션 결과
      </h1>

      {mappedData.map((item) => (
        <ProbabilityCard
          key={item.id}
          probability={item.probability}
          comment={item.comment}
        />
      ))}

      <MiniGameBox question="그래서 병원은 어디였어요?" />
    </main>
  );
};

export default SimulationPage;
