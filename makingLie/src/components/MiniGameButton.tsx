import { useNavigate } from "react-router-dom";

const MiniGameButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/mini-game")}
        className="
          w-full
          rounded-3xl
          bg-gradient-to-r from-orange-500 to-red-500
          py-6
          text-center
          text-[24px]
          font-semibold
          text-white
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          transition
          hover:brightness-110
          active:scale-[0.98]
        "
      >
        <span className="flex items-center justify-center gap-3">
          <span className="text-[26px]">🎮</span>
          미니게임으로 대비하기 ▶
        </span>
      </button>
    </div>
  );
};

export default MiniGameButton;
