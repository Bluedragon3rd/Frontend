type Props = {
  level: "낮음" | "중간" | "높음";
};

const MemoryCostCard = ({ level }: Props) => {
  return (
    <div
      className="
        w-full
        rounded-3xl
        bg-white
        px-10 py-8
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-start gap-4">
        {/* 아이콘 */}
        <div className="text-[36px] leading-none">🧠</div>

        {/* 타이틀 */}
        <div className="pt-1 text-[22px] font-semibold text-slate-800">
          기억 소모
        </div>
      </div>

      {/* 상태 */}
      <div
        className={`
          mt-8
          text-[56px]
          font-extrabold
          leading-none
          ${
            level === "높음"
              ? "text-orange-600"
              : level === "중간"
              ? "text-yellow-500"
              : "text-green-500"
          }
        `}
      >
        {level}
      </div>
    </div>
  );
};

export default MemoryCostCard;
