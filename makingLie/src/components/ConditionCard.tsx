import {
  useSituationStore,
  type ConditionType,
} from "../store/useSituationStore";
import Chip from "./Chip";

const ConditionCard = () => {
  const { condition, setCondition } = useSituationStore();

  const options: ConditionType[] = ["피곤", "아픔", "멘탈", "멀쩡"];

  return (
    <div
      className="
      w-full h-full 
      bg-white rounded-[32px] p-8 shadow-[0_14px_28px_rgba(0,0,0,0.06)]
      flex flex-col justify-center
    "
    >
      <div className="text-[22px] font-black mb-6 text-gray-900">컨디션</div>

      {/* 칩들 간격도 gap-3 -> gap-4로 살짝 넓혔습니다 */}
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <Chip
            key={opt}
            active={condition === opt}
            onClick={() => setCondition(opt)}
          >
            {opt === "피곤" && "🥴 피곤"}
            {opt === "아픔" && "🤒 아픔"}
            {opt === "멘탈" && "😶 멘탈"}
            {opt === "멀쩡" && "😄 멀쩡"}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default ConditionCard;
