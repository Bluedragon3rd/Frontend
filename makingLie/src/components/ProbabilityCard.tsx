import { useMemo } from "react";

type Props = {
  probability: number;
  comment: string;
};

const ProbabilityCard = ({ probability, comment }: Props) => {
  const score = Math.max(0, Math.min(100, Math.round(probability)));

  // 스타일 로직 (70이상 초록 / 40~69 주황 / 40미만 빨강)
  const variant = useMemo(() => {
    if (score >= 70) {
      return {
        emoji: "🥰",
        barColor: "bg-green-500",
        textColor: "text-green-600",
      };
    }
    if (score >= 40) {
      return {
        emoji: "😐",
        barColor: "bg-orange-400",
        textColor: "text-orange-500",
      };
    }
    return {
      emoji: "😱",
      barColor: "bg-red-500",
      textColor: "text-red-600",
    };
  }, [score]);

  return (
    <section
      className="
        w-[806px]
        h-[240px]
        rounded-[32px]
        bg-white
        px-10 py-10
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        flex items-start gap-8
        box-border
      "
    >
      {/* 왼쪽: 이모지
        ⚠️ 수정됨: animate-bounce 클래스를 제거하여 움직이지 않게 했습니다.
      */}
      <div className="text-[64px] leading-none select-none shrink-0">
        {variant.emoji}
      </div>

      {/* 오른쪽: 콘텐츠 */}
      <div className="flex-1 flex flex-col w-full">
        <div
          className={`text-[44px] font-extrabold tracking-tight leading-none ${variant.textColor}`}
        >
          {score}%
        </div>

        <div className="mt-5 w-full h-5 rounded-full bg-slate-100 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${variant.barColor}`}
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="mt-6 w-full rounded-2xl bg-slate-50 px-6 py-4 flex items-center">
          <p className="text-[22px] font-medium tracking-tight text-slate-700 truncate">
            "{comment}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProbabilityCard;
