import MiniGameBox from "../components/MiniGameBox";
import ProbabilityCard from "../components/ProbabilityCard";

const SimulationPage = () => {
  // 1. 데이터 3개 설정
  const mockData = [
    { id: 1, probability: 62, comment: "다음부터는 미리 말씀 주세요" },
    { id: 2, probability: 20, comment: "조금 더 신중하게 생각해 보세요" },
    { id: 3, probability: 95, comment: "거의 확실해요!" },
  ];

  // 2. 높은 확률 순서대로 정렬 (내림차순)
  const sortedData = [...mockData].sort(
    (a, b) => b.probability - a.probability,
  );

  return (
    <div className="flex flex-col justify-center items-center my-10 gap-6">
      {/* 3. 정렬된 카드 렌더링 */}
      {sortedData.map((item) => (
        <ProbabilityCard
          key={item.id}
          probability={item.probability}
          comment={item.comment}
        />
      ))}

      <MiniGameBox question="그래서 병원은 어디였어요?" />
    </div>
  );
};

export default SimulationPage;
