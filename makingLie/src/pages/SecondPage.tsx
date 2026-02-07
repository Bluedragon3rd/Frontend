import { useNavigate } from "react-router-dom";
import GradationButton from "../components/GradationButton";
import WhyLevelCard from "../components/WhyLevelCard";
import ConditionCard from "../components/ConditionCard";
import TargetTypeCard from "../components/TargetTypeCard";

export default function SecondPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] p-[18px] pb-10 font-sans box-border">
      <div className="h-[52px] flex items-center justify-between max-w-[1040px] mx-auto mb-4">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-lg hover:bg-gray-50 transition-colors"
        >
          ←
        </button>
        <div className="text-[22px] font-black text-gray-900 ">상황 구체화</div>
        <div className="w-10" />
      </div>

      <div className="max-w-[1040px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          <WhyLevelCard />
          <ConditionCard />
          <TargetTypeCard />
          <GradationButton title="결과 보기" />
        </div>
      </div>
    </div>
  );
}
