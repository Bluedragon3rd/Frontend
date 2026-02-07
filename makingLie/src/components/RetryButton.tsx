import { useNavigate } from "react-router-dom";
import { useSituationStore } from "../store/useSituationStore"; // 👈 스토어 임포트

interface RetryButtonProps {
  className?: string;
  onClick?: () => void;
}

const RetryButton = ({ className, onClick }: RetryButtonProps) => {
  const navigate = useNavigate();
  const reset = useSituationStore((state) => state.reset); // 👈 초기화 함수 가져오기

  const handleRetry = () => {
    // 1. 외부에서 주입된 onClick이 있다면 그걸 실행 (예: 특정 로직)
    if (onClick) {
      onClick();
    } else {
      // 2. 그게 아니라면 스토어 초기화 후 첫 페이지로 이동
      reset(); // 싹 지우고 (whyLevel도 3으로 됨)
      navigate("/first-step"); // 이동
    }
  };

  return (
    <div className={className}>
      <button
        onClick={handleRetry} // 👈 핸들러 연결
        className="
          w-full h-full
          rounded-2xl
          border-2 border-slate-200
          bg-white
          flex justify-center items-center 
          text-[24px]
          font-semibold
          shadow-sm
          transition
          hover:border-slate-300 hover:shadow
          active:scale-[0.98]
          cursor-pointer
        "
      >
        🔄 다시 조합
      </button>
    </div>
  );
};

export default RetryButton;
