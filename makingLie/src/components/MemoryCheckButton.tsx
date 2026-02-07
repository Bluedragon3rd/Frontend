import { useNavigate } from "react-router-dom";

const MemoryCheckButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/memory-check")}
        className="
          w-full
          rounded-3xl
          border-2 border-slate-200
          bg-white
          py-6
          text-center
          text-[22px]
          font-semibold
          text-blue-500
          shadow-[0_10px_25px_rgba(0,0,0,0.08)]
          transition
          hover:shadow-md
          active:scale-[0.98]
        "
      >
        기억 가능성 체크 →
      </button>
    </div>
  );
};

export default MemoryCheckButton;
