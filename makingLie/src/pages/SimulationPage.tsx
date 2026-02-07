import MiniGameBox from "../components/MiniGameBox";
import ProbabilityCard from "../components/ProbabilityCard";

const SimulationPage = () => {
  const mockData = [
    { id: 1, probability: 62, comment: "다음부터는 미리 말씀 주세요" },
    { id: 2, probability: 20, comment: "조금 더 신중하게 생각해 보세요" },
    { id: 3, probability: 95, comment: "거의 확실해요!" },
  ];

  const sortedData = [...mockData].sort(
    (a, b) => b.probability - a.probability,
  );

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] pb-20 gap-5">
      <h1 className="mt-[27px] text-4xl font-extrabold text-gray-900">시뮬레이션 결과</h1>
      {sortedData.map((item) => (
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
