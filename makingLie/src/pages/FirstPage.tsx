import ThemeButton from "../components/ThemeButton";
import { useState } from "react";

const FirstPage = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState("");

  // 1. 한글 감지 및 최대 글자 수 계산
  // 정규식으로 한글(자음, 모음, 완성형)이 포함되었는지 확인
  const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(customInput);
  const maxLength = hasKorean ? 20 : 50;

  // 2. 입력 핸들러 (글자 수 제한 로직)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // 입력된 값 기준으로 한글 여부 다시 판단 (붙여넣기 대비)
    const isNewValueKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(newValue);
    const currentLimit = isNewValueKorean ? 20 : 50;

    // 제한된 길이까지만 자름 (slice 사용)
    if (newValue.length <= currentLimit) {
      setCustomInput(newValue);
    } else {
      // 길이를 초과하면 잘라서 저장 (UX상 자연스럽게 멈춤)
      setCustomInput(newValue.slice(0, currentLimit));
    }
  };

  const handleSubmit = () => {
    if (!customInput.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    alert(`제출된 상황: ${customInput}`);
    setCustomInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(); // 한글 입력 중 엔터 이슈 방지를 위해 nativeEvent 체크 권장되지만, 간단히 유지
    }
  };

  return (
    <div className="relative flex h-screen flex-col justify-center items-center bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] overflow-hidden px-4">
      {/* 배경 효과 */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-200/60 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-20 h-[320px] w-[320px] rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-24 h-[360px] w-[360px] rounded-full bg-blue-200/40 blur-3xl" />

      {/* 헤더 */}
      <header className="relative z-10 flex flex-col gap-3 items-center mt-10 text-center">
        <h1 className="text-[60px] md:text-[90px] font-[700] text-gray-900 leading-tight">
          오늘 당신의 상황은?
        </h1>
        <h3 className="text-gray-400 text-[24px] md:text-[40px] font-medium">
          해당하는 상황을 선택해주세요.
        </h3>
      </header>

      {/* 버튼 그리드 */}
      <div className="relative z-10 mt-16 flex flex-row gap-5 justify-center items-stretch w-full max-w-5xl px-4 flex-wrap">
        <div className="flex-1 min-w-[150px]">
          <ThemeButton title="지각" />
        </div>
        <div className="flex-1 min-w-[150px]">
          <ThemeButton title="회의 불참" />
        </div>
        <div className="flex-1 min-w-[150px]">
          <ThemeButton title="과제 연기" />
        </div>
        <div className="flex-1 min-w-[150px]">
          <ThemeButton title="약속 취소" />
        </div>
      </div>

      <div className="w-full max-w-5xl h-[1px] bg-gray-200 my-10 relative z-10"></div>

      {/* 최후의 선택 버튼 */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-6">
        <button
          onClick={() => setIsSelected((prev) => !prev)}
          className={`
            transition-all duration-300 ease-in-out
            px-8 py-3 rounded-full font-bold text-lg shadow-md hover:scale-105
            ${
              isSelected
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          {isSelected ? "닫기" : "⚡️ 찾는 상황이 없다면? (직접 입력)"}
        </button>

        {isSelected && (
          <div className="w-full mb-[50px] flex flex-col animate-fade-in-up origin-top">
            {/* 인풋과 버튼을 감싸는 div */}
            <div className="flex gap-3 w-full">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={customInput}
                  onChange={handleInputChange} // 👈 변경된 핸들러 연결
                  onKeyDown={handleKeyDown}
                  placeholder={
                    hasKorean
                      ? "한글은 최대 20자까지 가능해요."
                      : "예: 과제가 너무 하기 싫어서..."
                  }
                  className={`
                    w-full
                    bg-white
                    border 
                    ${customInput.length >= maxLength ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} 
                    text-gray-900 text-lg
                    rounded-2xl
                    pl-6 pr-16 py-4 /* pr-16: 글자수 카운터 자리 확보 */
                    shadow-sm
                    focus:outline-none focus:ring-2 
                    ${customInput.length >= maxLength ? "focus:ring-red-500" : "focus:ring-violet-500"}
                    focus:border-transparent
                    placeholder:text-gray-400
                    transition-all
                  `}
                />

                {/* 3. 글자 수 카운터 (인풋 안에 위치) */}
                <div
                  className={`absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium ${customInput.length >= maxLength ? "text-red-500" : "text-gray-400"}`}
                >
                  {customInput.length}/{maxLength}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="
                  bg-violet-600 hover:bg-violet-700
                  text-white font-bold text-lg
                  rounded-2xl
                  px-8 py-4
                  shadow-lg
                  transition-transform active:scale-95
                  whitespace-nowrap
                "
              >
                제출
              </button>
            </div>

            {/* 안내 문구 (선택 사항) */}
            {hasKorean && (
              <p className="text-gray-400 text-sm mt-2 ml-2">
                * 한글이 포함되면 최대 20자로 제한됩니다.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
