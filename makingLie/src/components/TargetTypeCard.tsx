import { useSituationStore, type TargetType } from "../store/useSituationStore";
import Chip from "./Chip";

const TargetTypeCard = () => {
  const { target, setTarget } = useSituationStore();

  const options: TargetType[] = [
    "FM 상사",
    "공감형",
    "눈치100단",
    "친한 친구",
    "회사 팀원",
  ];

  return (
    // 👇 최상위 div 스타일 수정
    <div
      className="
      w-full h-full 
      bg-white rounded-[32px] p-8 shadow-[0_14px_28px_rgba(0,0,0,0.06)]
      flex flex-col justify-center
    "
    >
      {/* 제목 크기 및 여백 증가 */}
      <div className="text-[22px] font-black mb-6 text-gray-900">대상 유형</div>

      {/* 칩 간격 gap-3 -> gap-4로 살짝 증가 */}
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <Chip
            key={opt}
            active={target === opt}
            onClick={() => setTarget(opt)}
          >
            {opt === "FM 상사" && "👔 FM 상사"}
            {opt === "공감형" && "🫶 공감형"}
            {opt === "눈치100단" && "👀 눈치100단"}
            {opt === "친한 친구" && "🤗 친한 친구"}
            {opt === "회사 팀원" && "💼 회사 팀원"}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default TargetTypeCard;
