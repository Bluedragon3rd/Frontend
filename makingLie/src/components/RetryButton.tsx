import { useNavigate } from "react-router-dom";

interface RetryButtonProps {
  className?: string;
  onClick?: () => void; // onClick도 전달받을 수 있게 추가하면 좋습니다
}

const RetryButton = ({ className, onClick }: RetryButtonProps) => {
  const navigate = useNavigate();

  return (
    // 1. 여기서 부모가 준 크기(391px)를 받음
    <div className={className}>
      <button
        onClick={onClick || (() => navigate("/first-step"))}
        className="
          w-full h-full  /* 👈 핵심 수정: 부모 크기에 꽉 차게 변경 */
          rounded-2xl
          border-2 border-slate-200
          bg-white
          /* py-6 제거 (높이가 고정되면 패딩보단 flex 정렬이 안전함) */
          flex justify-center items-center 
          text-[24px]
          font-semibold
          shadow-sm
          transition
          hover:border-slate-300 hover:shadow
          active:scale-[0.98]
        "
      >
        🔄 다시 조합
      </button>
    </div>
  );
};

export default RetryButton;
