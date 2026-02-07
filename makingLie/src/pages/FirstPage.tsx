import ThemeButton from "../components/ThemeButton";

const FirstPage = () => {
  return (
    <div className="relative flex h-screen flex-col justify-center items-center bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] overflow-hidden">
      {/* 👇 배경 글로우(꾸밈) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-200/60 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-20 h-[320px] w-[320px] rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-24 h-[360px] w-[360px] rounded-full bg-blue-200/40 blur-3xl" />

      {/* 👇 기존 구조 유지 */}
      <header className="relative z-10 flex flex-col gap-5 items-center mt-10">
        <h1 className="text-[90px] font-[700]">오늘 당신의 상황은?</h1>
        <h3 className="text-gray-400 text-[50px]">해당하는 상황을 선택해주세요.</h3>
      </header>

      <div className="relative z-10 mt-20 flex flex-row gap-5 justify-center items-stretch w-full max-w-5xl px-15">
        <div className="flex-1">
          <ThemeButton title="지각" />
        </div>
        <div className="flex-1">
          <ThemeButton title="회의 불참" />
        </div>
        <div className="flex-1">
          <ThemeButton title="과제 연기" />
        </div>
        <div className="flex-1">
          <ThemeButton title="약속 취소" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;