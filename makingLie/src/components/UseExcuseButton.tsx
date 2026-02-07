import { useNavigate } from "react-router-dom";

const UseExcuseButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/use-excuse")}
        className="
          w-full
          rounded-3xl
          border-2 border-slate-200
          bg-white
          py-6
          text-center
          text-[22px]
          font-semibold
          text-slate-700
          shadow-[0_10px_25px_rgba(0,0,0,0.08)]
          transition
          hover:shadow-md
          active:scale-[0.98]
        "
      >
        아니면 핑계 사용하기 →
      </button>
    </div>
  );
};

export default UseExcuseButton;
