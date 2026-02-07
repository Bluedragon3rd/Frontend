import { useSituationStore, type TargetType } from "../store/useSituationStore";
import Chip from "./Chip";

const TargetTypeCard = () => {
  // 1. 스토어의 실제 필드명(target_audience, setTargetAudience)으로 가져오기
  const { target_audience, setTargetAudience } = useSituationStore();

  const options: TargetType[] = [
    "FM 상사",
    "공감형",
    "눈치100단",
    "친한 친구",
    "회사 팀원",
  ];

  return (
    <div
      className="
      w-full h-full 
      bg-white rounded-[32px] p-8 shadow-[0_14px_28px_rgba(0,0,0,0.06)]
      flex flex-col justify-center
    "
    >
      <div className="text-[22px] font-black mb-6 text-gray-900">대상 유형</div>

      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <Chip
            key={opt}
            // 2. target_audience와 현재 옵션을 비교
            active={target_audience === opt}
            onClick={() => setTargetAudience(opt)}
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
