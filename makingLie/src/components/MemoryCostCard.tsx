type Props = {
  level: number; // 0 ~ 10 사이의 숫자
};

const MemoryCostCard = ({ level }: Props) => {
  // 1. 숫자에 따라 텍스트와 색상을 결정하는 함수
  const getLevelInfo = (score: number) => {
    if (score >= 7) {
      return { text: "높음", color: "text-orange-600" }; // 7~10
    } else if (score >= 4) {
      return { text: "중간", color: "text-yellow-500" }; // 4~6
    } else {
      return { text: "낮음", color: "text-green-500" }; // 0~3
    }
  };

  const { text, color } = getLevelInfo(level);

  return (
    <div
      className="
        w-[339px]
        h-[188px]
        rounded-3xl
        bg-white
        px-10 py-8
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
        flex flex-col justify-between
      "
    >
      <div className="flex items-center gap-4">
        {/* 아이콘 */}
        <div className="text-[36px] leading-none">🧠</div>
        {/* 타이틀 */}
        <div className="text-[22px] font-semibold text-slate-800">
          기억 소모
        </div>
      </div>

      {/* 상태 (텍스트 + 숫자 함께 표시) */}
      <div className={`mt-2 text-[56px] font-extrabold leading-none ${color}`}>
        {text}
        {/* (선택사항) 숫자도 같이 보여주고 싶다면 아래 줄 주석 해제 */}
        {/* <span className="text-2xl ml-2 opacity-50">({level})</span> */}
      </div>
    </div>
  );
};

export default MemoryCostCard;
