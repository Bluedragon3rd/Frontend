type Props = {
  emoji: string;
  title: string;
  description: string;
  variant?: "blue" | "pink"; // 👈 색상 타입을 추가했습니다.
};

const SituationInsightCard = ({
  emoji,
  title,
  description,
  variant = "blue",
}: Props) => {
  // 색상 설정 (배경, 테두리)
  const styles =
    variant === "blue"
      ? "bg-blue-50 border-blue-100"
      : "bg-pink-50 border-pink-100";

  return (
    <section
      className={`
        w-full h-full
        rounded-[24px]
        border-2 
        px-8 py-8
        shadow-sm
        ${styles} /* 👈 위에서 정한 색상 적용 */
      `}
    >
      <div className="flex flex-col items-start gap-3">
        {/* 아이콘 + 제목 */}
        <div className="flex items-center gap-2">
          <div className="text-[24px]">{emoji}</div>
          <h3 className="text-[22px] font-bold text-slate-900">{title}</h3>
        </div>

        {/* 설명 텍스트 */}
        <p className="text-[17px] leading-relaxed text-slate-700 break-keep">
          {description}
        </p>
      </div>
    </section>
  );
};

export default SituationInsightCard;
