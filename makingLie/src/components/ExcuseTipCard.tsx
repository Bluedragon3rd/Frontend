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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 2500); // 2.5초마다 변경

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[520px] bg-white rounded-[24px] px-8 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 text-gray-800 text-[18px] font-medium transition-all">
        <span className="text-[22px]">💡</span>
        <span>{tips[index]}</span>
      </div>
    </div>
  );
};

export default ExcuseTipCard;