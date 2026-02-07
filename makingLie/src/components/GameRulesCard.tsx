type Props = {
  rules: string[];
};

const GameRulesCard = ({ rules }: Props) => {
  return (
    <section
      className="
        w-full
        rounded-3xl
        border-2 border-slate-200
        bg-white
        px-10 py-8
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* Title */}
      <div className="mb-6 flex items-center justify-center gap-3">
        <span className="text-[26px]">📋</span>
        <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900">
          게임 규칙
        </h2>
      </div>

      {/* Rules */}
      <ul className="space-y-5">
        {rules.map((rule, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="pt-1 text-[22px] text-slate-900">✓</span>

            <span className="text-[20px] leading-relaxed tracking-[-0.01em] text-slate-800">
              {rule}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GameRulesCard;