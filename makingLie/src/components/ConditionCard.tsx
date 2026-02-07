import { useSituationStore, type MoodType } from "../store/useSituationStore"; // 1. MoodType을 직접 가져옵니다.
import Chip from "./Chip";

const ConditionCard = () => {
  // 스토어에서 mood 상태와 setMood 액션을 가져옵니다.
  const { mood, setMood } = useSituationStore();

  // 스토어에 정의된 MoodType과 일치시킵니다.
  const options: MoodType[] = ["피곤", "아픔", "멘탈", "멀쩡"];

  return (
    <div className="w-full h-full bg-white rounded-[32px] p-8 shadow-[0_14px_28px_rgba(0,0,0,0.06)] flex flex-col justify-center">
      <div className="text-[22px] font-black mb-6 text-gray-900">컨디션</div>

      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <Chip
            key={opt}
            active={mood === opt} // 이제 mood와 opt가 둘 다 MoodType이므로 정확히 비교됩니다.
            onClick={() => setMood(opt)}
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
