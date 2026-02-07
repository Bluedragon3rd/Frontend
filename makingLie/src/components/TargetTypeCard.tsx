import { useState } from "react";
import Chip from "./Chip";
type Target = "FM 상사" | "공감형" | "눈치100단";

const TargetTypeCard = () => {
  const [target, setTarget] = useState<Target>();

  return (
    <div className="bg-white rounded-[18px] p-5 shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div className="text-lg font-black mb-3.5 text-gray-900">대상 유형</div>
      <div className="flex flex-wrap gap-3">
        <Chip
          active={target === "FM 상사"}
          onClick={() => setTarget("FM 상사")}
        >
          👔 FM 상사
        </Chip>
        <Chip active={target === "공감형"} onClick={() => setTarget("공감형")}>
          🫶 공감형
        </Chip>
        <Chip
          active={target === "눈치100단"}
          onClick={() => setTarget("눈치100단")}
        >
          👀 눈치100단
        </Chip>
      </div>
    </div>
  );
};

export default TargetTypeCard;
