import LoadingSpinner from "../components/LoadingSpinner";
import ExcuseTipCard from "../components/ExcuseTipCard";
import RotatingImages from "../components/RotatingImages"; // 👈 컴포넌트 import

// 이미지들 import
import bedimg from "../assets/Bed.svg";
import bed2img from "../assets/Bed2.svg";
import runimg from "../assets/Run.svg";
// import coffeeImg from "../assets/Coffee.svg"; // 나중에 더 추가 가능

const LoadingPage = () => {
  // 1. 보여줄 이미지 목록 배열 생성
  const illustrationList = [bedimg, bed2img, runimg];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center justify-center gap-12">
      <LoadingSpinner size={64} />

      <RotatingImages
        images={illustrationList}
        className="w-64 h-64"
        interval={3000} // 3초마다 변경
      />

      {/* 팁 카드 */}
      <ExcuseTipCard />
    </div>
  );
};

export default LoadingPage;
