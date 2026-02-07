import MiniGameButton from "./MiniGameButton";

type Props = {
  question: string;
};

const MiniGameBox = ({ question }: Props) => {
  return (
    <section
      className="
        w-[806px]
        min-h-[240px] /* 👈 h-[240px] 대신 min-h를 써서 내용이 길어지면 늘어나게 변경 */
        h-auto        /* 👈 높이 자동 조절 */
        rounded-[40px]
        border-4 border-red-300
        bg-[#FCEBDD]
        px-10 py-10
        shadow-[0_16px_40px_rgba(0,0,0,0.10)]
        flex flex-col justify-between /* 👈 내부 요소 정렬 추가 */
      "
    >
      {/* 상단 텍스트 영역 */}
      <div className="flex items-start gap-6">
        <div className="pt-1 text-[54px] leading-none">💬</div>

        <div className="flex flex-col gap-2">
          <div className="text-[28px] font-extrabold text-amber-900 tracking-[-0.02em]">
            시스템 후속 질문 발생
          </div>

          <div className="text-[34px] font-extrabold text-slate-900 tracking-[-0.03em] leading-tight break-keep">
            👉 {question}
          </div>
        </div>
      </div>

      {/* 버튼 영역 (상단 여백 mt-10 유지) */}
      <div className="mt-10 w-full flex justify-center">
        <MiniGameButton />
      </div>
    </section>
  );
};

export default MiniGameBox;
