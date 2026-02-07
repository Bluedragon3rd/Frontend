import StartPillButton from "../components/StartPillButton";
import ProcessStepsSection from "../components/ProcessStepsSection";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* HERO */}
      <section className="flex flex-col items-center px-6 pt-24 text-center">
        <h1 className="text-[64px] font-extrabold tracking-[-0.04em] text-violet-800">
          ExcuseLab
        </h1>

        <div className="mt-2 text-[24px] font-semibold text-violet-600">
          핑계랩
        </div>

        <p className="mt-6 max-w-2xl text-[20px] leading-relaxed tracking-[-0.01em] text-slate-600">
          사회적 위기 상황에서 당신의 핑계를 과학적으로 분석합니다
        </p>

        <div className="mt-10">
          <StartPillButton />
        </div>
      </section>

      {/* GUIDE TITLE */}
      <section className="mt-32 px-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="text-[28px]">💡</span>
          <h2 className="text-[36px] font-extrabold tracking-[-0.03em] text-slate-900">
            ExcuseLab은 어떻게 작동하나요?
          </h2>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto mt-16 max-w-6xl px-6 pb-32">
        <ProcessStepsSection
          steps={[
            {
              icon: "🎯",
              step: 1,
              title: "상황 선택",
              description: "당신의 사회적 위기 상황을 선택하세요",
              borderColor: "border-violet-300",
            },
            {
              icon: "🧠",
              step: 2,
              title: "조건 설정",
              description: "이유, 컨디션, 대상 유형을 조합하세요",
              borderColor: "border-blue-300",
            },
            {
              icon: "✅",
              step: 3,
              title: "결과 확인",
              description: "핑계 효과와 위험도를 분석합니다",
              borderColor: "border-pink-300",
            },
          ]}
        />
      </section>
    </main>
  );
};

export default HomePage;

