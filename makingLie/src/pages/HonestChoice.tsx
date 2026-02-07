import RecommendedMessageBox from "../components/RecommendedMessageBox";
import HonestBenefitsCard from "../components/HonestBenefitsCard";
import SituationInsightCard from "../components/SituationInsightCard";
import BackToStartButton from "../components/BackToStartButton";
import UseExcuseButton from "../components/UseExcuseButton";

const HonestChoice = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] pb-20">
      {/* 1. 헤더 영역 */}
      <header className="flex flex-col items-center mb-[30px] mt-5 text-center">
        <div className="text-[64px] mb-4 select-none">🍀</div>
        <h1 className="text-[42px] font-bold text-gray-900 mb-3 tracking-tight">
          오늘은 쫌 솔직해지세요. 제발.
        </h1>
        <h3 className="text-[20px] font-medium text-gray-500 tracking-tight">
          정직한 대화가 장기적으로 더 좋은 관계를 만듭니다.
        </h3>
      </header>

      {/* 2. 추천 메시지 카드 (녹색 테두리) */}
      <div className="mb-8">
        <RecommendedMessageBox message="일정 조율이 필요해 다음으로 미루고 싶습니다" />
      </div>

      {/* 3. 솔직한 대화의 장점 (3단 카드) */}
      <div className="mb-8">
        <HonestBenefitsCard />
      </div>

      {/* 4. 상황별 조언 카드 (파랑/분홍 2열 배치) */}
      <div className="w-[806px] flex flex-row gap-6 mb-8">
        <div className="flex-1">
          <SituationInsightCard
            variant="blue"
            emoji="💼"
            title="직장에서"
            description="솔직한 커뮤니케이션은 상사와 신뢰 관계를 구축하고, 장기적으로 더 나은 평가를 받을 수 있습니다."
          />
        </div>
        <div className="flex-1">
          <SituationInsightCard
            variant="pink"
            emoji="🤝"
            title="관계에서"
            description="거짓말로 쌓인 관계보다 솔직함으로 쌓인 관계가 훨씬 오래 지속되고 깊어집니다."
          />
        </div>
      </div>

      {/* 5. 하단 버튼 영역 (초록/흰색 2열 배치) */}
      <div className="w-[806px] flex flex-row gap-6">
        <div className="flex-1 h-[80px]">
          <BackToStartButton />
        </div>
        <div className="flex-1 h-[80px]">
          <UseExcuseButton />
        </div>
      </div>
    </div>
  );
};

export default HonestChoice;
