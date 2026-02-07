type Props = {
  probability: number; // 0 ~ 100
  comment: string; // 예: "다음부터는 미리 말씀 주세요"
};

const ProbabilityCard = ({ probability, comment }: Props) => {
  const safe = Math.max(0, Math.min(100, Math.round(probability)));

  return (
    <section
      className="
        w-full
        rounded-3xl
        bg-white
        px-10 py-10
        shadow-[0_18px_45px_rgba(0,0,0,0.10)]
      "
    >
      <div className="flex items-start gap-8">
        {/* 이모지 */}
        <div className="text-[64px] leading-none">😐</div>

        <div className="flex-1">
          {/* 퍼센트 */}
          <div className="text-[44px] font-extrabold tracking-[-0.03em] text-slate-900">
            {safe}%
          </div>

          {/* 프로그레스 바 */}
          <div className="mt-4 h-10 w-full rounded-full bg-slate-200">
            <div
              className="h-10 rounded-full bg-slate-500 transition-all"
              style={{ width: `${safe}%` }}
            />
          </div>

          {/* 코멘트 박스 */}
          <div className="mt-10 rounded-3xl bg-slate-50 px-8 py-8">
            <p className="text-[28px] tracking-[-0.02em] text-slate-900">
              “{comment}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProbabilityCard;
