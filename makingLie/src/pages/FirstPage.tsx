import ThemeButton from "../components/ThemeButton";
const FirstPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="flex flex-col gap-5 items-center mt-30">
        <h1 className="text-[30px] font-[700]">오늘의 사회적 위기</h1>
        <h3 className="text-gray-400 text-[20px]">오늘 당신의 상황은?</h3>
      </header>
      <div className="mt-20 flex flex-row gap-5 justify-center items-stretch w-full max-w-5xl px-10">
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
