import { useEffect, useState } from "react";

interface RotatingImagesProps {
  images: string[]; // 이미지 경로들의 배열
  interval?: number; // 바뀌는 속도 (기본 3초)
  className?: string; // 크기나 스타일 조절용
}

const RotatingImages = ({
  images,
  interval = 3000,
  className = "",
}: RotatingImagesProps) => {
  // 🔥 초기 인덱스를 0이 아닌 무작위(Random)로 설정
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * images.length),
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 이미지가 없거나 하나뿐이면 회전할 필요가 없음
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      // 1. 먼저 투명하게 만듦 (사라짐)
      setIsVisible(false);

      // 2. 0.5초 뒤(완전히 사라진 후)에 이미지를 바꾸고 다시 보이게 함
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsVisible(true);
      }, 500); // transition 시간과 동일하게 맞춤
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={images[currentIndex]}
        alt="illustration"
        className={`
          w-full h-full object-contain
          transition-opacity duration-500 ease-in-out
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
};

export default RotatingImages;
