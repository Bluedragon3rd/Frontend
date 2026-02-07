import { useNavigate } from "react-router-dom";

const RetryButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/first-step")}
        className="
          w-[200px]
          rounded-2xl
          border-2 border-slate-200
          bg-white
          py-6
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
