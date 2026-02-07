import { useSituationStore } from "../store/useSituationStore";

const WhyLevelCard = () => {
  const { whyLevel, setWhyLevel } = useSituationStore();

  return (
    <div
      className="
      w-full h-full 
      bg-white rounded-[32px] p-8 shadow-[0_14px_28px_rgba(0,0,0,0.06)]
      flex flex-col justify-center
    "
    >
      <div className="text-[22px] font-black mb-6 text-gray-900">
        지각 이유 성격
      </div>

      <div className="px-2">
        <input
          type="range"
          min={1} // 👈 최소값 1
          max={5} // 👈 최대값 5
          step={1} // 👈 1단위씩 이동
          value={whyLevel || 3} // 초기값이 0이면 중간(3)으로 보이게 처리
          onChange={(e) => setWhyLevel(Number(e.target.value))}
          className="w-full accent-blue-500 cursor-pointer h-3 bg-gray-200 rounded-lg appearance-none mb-2"
        />

        {/* 👇 1, 2, 3, 4, 5 숫자 눈금 표시 */}
        <div className="flex justify-between text-sm font-bold text-gray-400 px-1 mb-4">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>

      <div className="flex justify-between mt-1 font-bold text-lg">
        <span className="text-blue-500">무난함</span>
        <span className="text-red-500">창의성</span>
      </div>
    </div>
  );
};

export default WhyLevelCard;
