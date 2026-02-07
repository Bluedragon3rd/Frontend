import { useEffect, useState } from "react";

const tips = [
  "사람은 평균 하루 3번 정도 핑계를 댑니다.",
  "가장 많이 쓰는 핑계 1위는 '몸이 안 좋아서'입니다.",
  "핑계를 준비하는 데 걸리는 평균 시간은 12초래요.",
  "상대가 공감형일수록 솔직한 핑계가 더 잘 통합니다.",
  "눈치 빠른 상대에게는 디테일이 중요합니다.",
  "핑계가 길수록 의심받을 확률이 올라갑니다.",
  "짧고 명확한 이유가 신뢰도를 높여요.",
  "멘탈이 안 좋을 때는 감정 표현이 도움 됩니다.",
  "반복적인 핑계는 위험도를 크게 올립니다.",
  "완벽한 핑계는 오히려 의심을 부릅니다.",
];

const ExcuseTipCard = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // 👈 투명도 조절용 상태

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. 먼저 글자를 숨깁니다 (Fade Out)
      setIsVisible(false);

      // 2. 0.5초 뒤(사라진 후)에 글자를 바꾸고 다시 보여줍니다 (Fade In)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % tips.length);
        setIsVisible(true);
      }, 500); // CSS transition 시간과 맞춰주세요 (duration-500)
    }, 3000); // 3초마다 반복 (애니메이션 시간 포함해서 약간 늘림)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[520px] bg-white rounded-[24px] px-8 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center min-h-[80px]">
      <div
        className={`
          flex items-center gap-3 text-gray-800 text-[18px] font-medium 
          transition-all duration-500 ease-in-out  {/* 👈 부드러운 전환 효과 핵심 */}
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} 
        `}
      >
        {/* opacity-0: 투명하게 / translate-y-2: 살짝 아래로 내려가며 사라짐 */}
        <span className="text-[22px]">💡</span>
        <span>{tips[index]}</span>
      </div>
    </div>
  );
};

export default ExcuseTipCard;
