import LoadingSpinner from "../components/LoadingSpinner";
import ExcuseTipCard from "../components/ExcuseTipCard";
import RotatingImages from "../components/RotatingImages";

// 이미지들 import
import bedimg from "../assets/Bed.svg";
import bed2img from "../assets/Bed2.svg";
import runimg from "../assets/Run.svg";

const LoadingPage = () => {
  // 보여줄 이미지 목록 배열
  const illustrationList = [bedimg, bed2img, runimg];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center justify-center gap-12">
      {/* 로딩 스피너 */}
      <LoadingSpinner size={64} />

      {/* 무작위 이미지로 시작하여 회전하는 컴포넌트 */}
      <RotatingImages
        images={illustrationList}
        className="w-64 h-64"
        interval={3000} // 3초마다 변경 (전환 애니메이션 0.5초 포함)
      />

      {/* 팁 카드 */}
      <ExcuseTipCard />
    </div>
  );
};

export default LoadingPage;
