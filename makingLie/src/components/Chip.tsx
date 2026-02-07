import React from "react";

// 1. Props 타입 정의 (깔끔하게 분리)
interface ChipProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Chip = ({ active, onClick, children }: ChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full px-4 py-3 border-2 font-extrabold min-w-[100px] text-center transition-all duration-200 cursor-pointer
        ${
          active
            ? "border-purple-500 bg-white text-purple-600 shadow-[0_10px_18px_rgba(168,85,247,0.18)]"
            : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
        }
      `}
    >
      {children}
    </button>
  );
};

// 3. 내보내기 (보통 컴포넌트 하나만 있는 파일은 default export를 씁니다)
export default Chip;
