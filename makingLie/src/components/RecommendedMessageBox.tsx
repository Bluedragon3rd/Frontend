import { useState } from "react";

// 부모에게서 메시지 내용을 받아옵니다.
type Props = {
  message: string;
};

const RecommendedMessageBox = ({ message }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <div
      className="
        w-[806px]
        rounded-[24px]
        border-[3px] border-[#4ADE80] /* 밝은 녹색 테두리 */
        bg-[#F0FDF4] /* 아주 연한 녹색 배경 */
        p-8
        box-border
        shadow-sm
        flex flex-col
      "
    >
      {/* 상단: 타이틀 + 복사 버튼 */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[22px] font-bold text-gray-900">추천 메시지</h2>

        <button
          onClick={handleCopy}
          className="
            flex items-center gap-1.5
            bg-white
            border border-[#4ADE80]
            rounded-[12px]
            px-4 py-2
            text-[15px] font-bold text-[#16A34A]
            transition-all
            hover:bg-green-50
            active:scale-95
            cursor-pointer
          "
        >
          {isCopied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>완료</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5"
                />
              </svg>
              <span>복사하기</span>
            </>
          )}
        </button>
      </div>

      {/* 하단: 메시지 박스 (흰색) */}
      <div className="w-full bg-white rounded-[20px] py-10 px-8 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex justify-center items-center">
        <p className="text-[24px] font-medium text-gray-800 text-center leading-relaxed break-keep">
          "{message}"
        </p>
      </div>
    </div>
  );
};

export default RecommendedMessageBox;
