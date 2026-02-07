import { useNavigate } from "react-router-dom";

const BackToStartButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="
          w-full
          rounded-3xl
          bg-green-600
          py-7
          text-center
          text-[24px]
          font-semibold
          text-white
          shadow-[0_14px_30px_rgba(0,0,0,0.15)]
          transition
          hover:bg-green-700
          active:scale-[0.98]
        "
      >
        처음으로 돌아가기
      </button>
    </div>
  );
};

export default BackToStartButton;
