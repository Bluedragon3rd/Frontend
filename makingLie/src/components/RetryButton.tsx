import { useNavigate } from "react-router-dom";

interface RetryButtonProps {
  className?: string;
  onClick?: () => void;
}

const RetryButton = ({ className, onClick }: RetryButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <button
        onClick={() => {
          if (onClick) {
            onClick();
          } else {
            navigate("/first-step");
          }
        }}
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
