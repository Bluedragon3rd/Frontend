import {
  useSituationStore,
  type ConditionType,
} from "../store/useSituationStore";
import Chip from "./Chip";

const ConditionCard = () => {
  // ⭐️ Zustand 연결
  const { condition, setCondition } = useSituationStore();

  const options: ConditionType[] = ["피곤", "아픔", "멘탈"];

  return (
    <div className="bg-white rounded-[18px] p-5 shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div className="text-lg font-black mb-3.5 text-gray-900">컨디션</div>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <Chip
            key={opt}
            active={condition === opt} // store 값과 비교
            onClick={() => setCondition(opt)} // action 실행
          >
            {opt === "피곤" && "🥴 피곤"}
            {opt === "아픔" && "🤒 아픔"}
            {opt === "멘탈" && "😶 멘탈"}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default ConditionCard;
