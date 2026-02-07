import { useState } from "react";
import Chip from "./Chip";
const ConditionCard = () => {
  const [condition, setCondition] = useState<"피곤" | "아픔" | "멘탈">();

  return (
    <div className="bg-white rounded-[18px] p-5 shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div className="text-lg font-black mb-3.5 text-gray-900">컨디션</div>
      <div className="flex flex-wrap gap-3">
        <Chip
          active={condition === "피곤"}
          onClick={() => setCondition("피곤")}
        >
          🥴 피곤
        </Chip>
        <Chip
          active={condition === "아픔"}
          onClick={() => setCondition("아픔")}
        >
          🤒 아픔
        </Chip>
        <Chip
          active={condition === "멘탈"}
          onClick={() => setCondition("멘탈")}
        >
          😶 멘탈
        </Chip>
      </div>
    </div>
  );
};

export default ConditionCard;
