import MiniGameCTAButton from "./MiniGameButton";

type Props = {
  question: string; // 예: "그래서 병원은 어디였어요?"
};

const MiniGameBox = ({ question }: Props) => {
  return (
    <section
      className="
        w-full
        rounded-[40px]
        border-4 border-red-300
        bg-[#FCEBDD]
        px-10 py-10
        shadow-[0_16px_40px_rgba(0,0,0,0.10)]
      "
    >
      {/* 상단 텍스트 영역 */}
      <div className="flex items-start gap-6">
        <div className="pt-1 text-[54px] leading-none">💬</div>

        <div className="flex flex-col gap-2">
          <div className="text-[28px] font-extrabold text-amber-900 tracking-[-0.02em]">
            시스템 후속 질문 발생
          </div>

          <div className="text-[34px] font-extrabold text-slate-900 tracking-[-0.03em]">
            👉 {question}
          </div>
        </div>
      </div>

      {/* 버튼 */}
      <div className="mt-10">
        <MiniGameCTAButton />
      </div>
    </section>
  );
};

export default MiniGameBox;