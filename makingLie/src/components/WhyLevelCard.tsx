import { useSituationStore } from "../store/useSituationStore";

const WhyLevelCard = () => {
  // ⭐️ Zustand에서 꺼내오기
  const { whyLevel, setWhyLevel } = useSituationStore();

  return (
    <div className="bg-white rounded-[18px] p-5 shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div className="text-lg font-black mb-3.5 text-gray-900">
        지각 이유 성격
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={whyLevel} // store 값 연결
        onChange={(e) => setWhyLevel(Number(e.target.value))} // action 연결
        className="w-full accent-blue-500 cursor-pointer h-2 bg-gray-200 rounded-lg appearance-none"
      />
      <div className="flex justify-between mt-2.5 font-bold text-sm">
        <span className="text-blue-500">우발적</span>
        <span className="text-red-500">반복적</span>
      </div>
    </div>
  );
};

export default WhyLevelCard;
