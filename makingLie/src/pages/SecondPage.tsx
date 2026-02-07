import { useNavigate } from "react-router-dom";
import GradationButton from "../components/GradationButton";
import WhyLevelCard from "../components/WhyLevelCard";
import ConditionCard from "../components/ConditionCard";
import TargetTypeCard from "../components/TargetTypeCard";

export default function SecondPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] p-6 box-border">
      {/* 헤더 */}
      <div className="flex-none h-[60px] flex items-center justify-between w-full max-w-[800px] mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-xl hover:bg-gray-50 transition-colors shadow-sm"
        >
          ←
        </button>
        <div className="text-[24px] font-black text-gray-900">상황 구체화</div>
        <div className="w-12" />
      </div>

      {/* 메인 리스트 영역 */}
      <div className="w-full max-w-[800px] mx-auto pb-10">
        {/* 세로로 쌓이는 Flex 컨테이너 */}
        <div className="flex flex-col gap-5">
          {/* 각 카드가 내부적으로 h-full(100%)로 설정되어 있으므로,
             부모 div에서 높이를 정해주면 그만큼 예쁘게 늘어납니다.
             가로로 긴 형태를 위해 h-[220px] 정도로 잡았습니다.
          */}

          <div className="h-[220px]">
            <WhyLevelCard />
          </div>

          <div className="h-[220px]">
            <ConditionCard />
          </div>

          <div className="h-[220px]">
            <TargetTypeCard />
          </div>

          {/* 결과보기 버튼 (높이 100px) */}
          <div className="h-[100px] mt-2">
            <GradationButton
              title="결과 보기"
              className="!w-full !h-full text-[24px] rounded-[24px] shadow-lg transition-transform active:scale-[0.98]"
              onClick={() => navigate("/result")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
