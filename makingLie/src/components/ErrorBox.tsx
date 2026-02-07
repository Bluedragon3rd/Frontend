interface ErrorBoxProps {
  message?: string;
}

const ErrorBox = ({ message = "알 수 없는 오류가 발생했습니다" }: ErrorBoxProps) => {
  return (
    <div className="w-full max-w-[760px] bg-white rounded-[32px] p-12 shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col items-center gap-8">
      {/* 제목 */}
      <h1 className="text-[36px] font-bold text-gray-900">
        앗! 문제가 발생했습니다
      </h1>

      {/* 빨간 오류 박스 */}
      <div className="w-full rounded-[20px] border-2 border-red-200 bg-red-50 py-6 px-8 text-center text-red-600 text-[20px] font-medium">
        {message}
      </div>

      {/* 노란 안내 박스 */}
      <div className="w-full rounded-[20px] border-2 border-yellow-300 bg-yellow-50 py-6 px-8 text-center text-[18px] text-gray-700">
        <div className="font-semibold mb-2">
          💡 ExcuseLab의 핑계:
        </div>
        <div>
          핑계가 너무 완벽해서 시스템이 당황했습니다 🤯
        </div>
      </div>

      {/* 하단 설명 */}
      <div className="text-center text-gray-600 text-[18px] leading-relaxed">
        잠시 후 다시 시도해주세요.<br />
        문제가 계속되면 페이지를 새로고침해주세요.
      </div>
    </div>
  );
};

export default ErrorBox;
