type Props = {
  emoji: string;        // 💼
  title: string;        // 직장에서
  description: string;  // 설명 문구
};

const SituationInsightCard = ({ emoji, title, description }: Props) => {
  return (
    <section
      className="
        w-full
        rounded-3xl
        border-2 border-blue-200
        bg-blue-50
        px-10 py-8
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="pt-1 text-[28px]">{emoji}</div>

        <div>
          <h3 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900">
            {title}
          </h3>

          <p className="mt-4 text-[20px] leading-relaxed tracking-[-0.01em] text-slate-700">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SituationInsightCard;
