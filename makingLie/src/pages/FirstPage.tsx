import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../components/ThemeButton";
import { useSituationStore } from "../store/useSituationStore";
import { clearCustomId } from "../utils/auth";
const FirstPage = () => {
  const reset = useSituationStore((state) => state.reset);
  const [isSelected, setIsSelected] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const navigate = useNavigate();

  const { setSituation } = useSituationStore();
  useEffect(() => {
    clearCustomId();
    reset(); // 혹시 모르니 스토어도 초기화
  }, [reset]);
  const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(customInput);
  const maxLength = hasKorean ? 20 : 50;

  const handleSubmit = () => {
    if (!customInput.trim()) return;

    setSituation(customInput);
    navigate("/second-step");
  };

  const handlePresetClick = (value: string) => {
    setSituation(value);
    navigate("/second-step");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value) ? 20 : 50)) {
      setCustomInput(value);
    }
  };

  return (
    <div className="relative flex h-screen flex-col justify-center items-center bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] px-4">
      <header className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-[60px] md:text-[90px] font-bold">
          오늘 당신의 상황은?
        </h1>
        <p className="text-gray-400 text-[24px] md:text-[40px]">
          해당하는 상황을 선택해주세요.
        </p>
      </header>

      <div className="mt-16 flex gap-5 flex-wrap max-w-5xl w-full">
        {["지각", "회의 불참", "과제 연기", "약속 취소"].map((item) => (
          <div key={item} className="flex-1 min-w-[150px]">
            <ThemeButton title={item} onClick={() => handlePresetClick(item)} />
          </div>
        ))}
      </div>

      <div className="w-full max-w-5xl h-px bg-gray-200 my-10" />

      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        <button
          onClick={() => setIsSelected((prev) => !prev)}
          className={`px-8 py-3 rounded-full font-bold text-lg ${
            isSelected
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-500 border"
          }`}
        >
          {isSelected ? "닫기" : "⚡️ 직접 입력하기"}
        </button>

        {isSelected && (
          <div className="w-full flex gap-3">
            <div className="flex-1 relative">
              <input
                value={customInput}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="상황을 입력해주세요"
                className="w-full border rounded-2xl px-6 py-4"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                {customInput.length}/{maxLength}
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-violet-600 text-white font-bold rounded-2xl px-8 py-4"
            >
              다음
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
