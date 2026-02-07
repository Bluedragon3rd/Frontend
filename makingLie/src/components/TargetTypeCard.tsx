import { useSituationStore, type TargetType } from "../store/useSituationStore";
import Chip from "./Chip";

const TargetTypeCard = () => {
  // ⭐️ Zustand 연결
  const { target, setTarget } = useSituationStore();

  const options: TargetType[] = ["FM 상사", "공감형", "눈치100단"];

  return (
    <div className="bg-white rounded-[18px] p-5 shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div className="text-lg font-black mb-3.5 text-gray-900">대상 유형</div>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <Chip
            key={opt}
            active={target === opt}
            onClick={() => setTarget(opt)}
          >
            {opt === "FM 상사" && "👔 FM 상사"}
            {opt === "공감형" && "🫶 공감형"}
            {opt === "눈치100단" && "👀 눈치100단"}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default TargetTypeCard;
