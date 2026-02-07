type Props = {
  icon: string;        // 🎯 🧠 ✅
  step: number;        // 1,2,3
  title: string;
  description: string;
  borderColor: string; // "border-violet-300" 등
};

const ProcessStepCard = ({
  icon,
  step,
  title,
  description,
  borderColor,
}: Props) => {
  return (
    <div
      className={`
        w-full
        rounded-3xl
        border-2 ${borderColor}
        bg-white
        px-10 py-12
        text-center
        shadow-[0_14px_35px_rgba(0,0,0,0.10)]
      `}
    >
      {/* Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-[34px]">
        {icon}
      </div>

      {/* Step */}
      <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 text-[28px] font-extrabold text-white shadow">
        {step}
      </div>

      <div className="mt-6 text-[26px] font-extrabold tracking-[-0.02em] text-slate-900">
        {title}
      </div>

      <div className="mt-4 text-[20px] leading-relaxed tracking-[-0.01em] text-slate-600">
        {description}
      </div>
    </div>
  );
};

export default ProcessStepCard;
