import { useNavigate } from "react-router-dom";

const MiniGameButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/mini-game")}
      className="
        w-full max-w-[718px] /* 👈 고정폭 대신 부모에 맞추되 최대폭 설정 */
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
        flex items-center justify-center /* 👈 텍스트 수직 중앙 정렬 */
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
