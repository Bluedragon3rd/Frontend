type Props = {
  level: number;
};

const LieLevelCard = ({ level }: Props) => {
  return (
    <div
      className="
        w-[339px]
        h-[188px]
        rounded-3xl
        bg-white
        px-10 py-8
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-start gap-4">
        {/* 아이콘 */}
        <div className="text-[34px] leading-none">🎭</div>

        {/* 타이틀 */}
        <div className="pt-1 text-[22px] font-semibold text-slate-800">
          거짓말 레벨
        </div>
      </div>

      {/* 숫자 */}
      <div className="mt-8 text-[72px] font-extrabold leading-none text-violet-600">
        {level}
      </div>
    </div>
  );
};

export default LieLevelCard;
