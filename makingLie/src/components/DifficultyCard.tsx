type Props = {
  emoji: string;          // 😐
  title: string;          // 보통
  questionCount: number;  // 4
  description: string;    // 현실적인 난이도
  selected?: boolean;
  onClick?: () => void;
};

const DifficultyCard = ({
  emoji,
  title,
  questionCount,
  description,
  selected = false,
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full max-w-[320px]",
        "rounded-3xl",
        "bg-white",
        "px-10 py-10",
        "text-center",
        "border-4",
        selected ? "border-violet-300" : "border-slate-200",
        "shadow-[0_14px_35px_rgba(0,0,0,0.10)]",
        "transition",
        "hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]",
        "active:scale-[0.99]",
        "focus:outline-none focus:ring-4 focus:ring-violet-200",
      ].join(" ")}
    >
      <div className="text-[72px] leading-none">{emoji}</div>

      <div className="mt-6 text-[40px] font-extrabold tracking-[-0.03em] text-slate-900">
        {title}
      </div>

      <div className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-slate-700">
        질문 {questionCount}개
      </div>

      <div className="mt-5 text-[18px] tracking-[-0.01em] text-slate-500">
        {description}
      </div>
    </button>
  );
};

export default DifficultyCard;