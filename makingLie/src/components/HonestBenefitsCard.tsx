type KPI = {
  title: string;
  value: string; // "0%" or "↑"
  description: string;
};

type Props = {
  items: KPI[];
};

const HonestBenefitsCard = ({ items }: Props) => {
  return (
    <section
      className="
        w-full
        rounded-3xl
        border-2 border-green-200
        bg-white
        px-12 py-12
        shadow-[0_16px_40px_rgba(0,0,0,0.10)]
      "
    >
      {/* Header */}
      <h2 className="mb-12 text-center text-[34px] font-extrabold tracking-[-0.03em] text-slate-900">
        솔직한 대화의 장점
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="
              rounded-3xl
              border-2 border-green-200
              bg-green-50
              px-10 py-10
              text-center
            "
          >
            {/* Check */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-300 bg-green-100">
              <span className="text-[36px] text-green-600">✓</span>
            </div>

            {/* Title */}
            <div className="mt-8 text-[26px] font-bold tracking-[-0.02em] text-slate-900">
              {item.title}
            </div>

            {/* Value */}
            <div className="mt-6 text-[56px] font-extrabold tracking-[-0.04em] text-green-600">
              {item.value}
            </div>

            {/* Desc */}
            <div className="mt-6 text-[20px] leading-relaxed tracking-[-0.01em] text-slate-600">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HonestBenefitsCard;
