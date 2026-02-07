import { useNavigate } from "react-router-dom";

const MiniGameButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/minigame")}
      className="
        w-full max-w-[718px]
        h-[92px]
        rounded-3xl
        bg-gradient-to-r from-orange-500 to-red-500
        py-4 
        text-center
        text-[24px]
        font-semibold
        text-white
        shadow-[0_12px_30px_rgba(0,0,0,0.15)]
        transition
        hover:brightness-110
        active:scale-[0.98]
        flex items-center justify-center
      "
    >
      <span className="flex items-center justify-center gap-3">
        <span className="text-[32px]">🎮</span>
        <span>미니게임으로 대비하기 ▶</span>
      </span>
    </button>
  );
};

export default MiniGameButton;
