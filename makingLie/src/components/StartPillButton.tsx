import { useNavigate } from "react-router-dom";

const StartPillButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/game")}
      className="
        inline-flex
        items-center
        gap-4
        rounded-full
        bg-gradient-to-r from-violet-500 to-pink-500
        px-14 py-6
        text-[26px]
        font-extrabold
        text-white
        shadow-[0_14px_30px_rgba(0,0,0,0.18)]
        transition
        hover:brightness-110
        active:scale-[0.97]
      "
    >
      <span className="text-[30px]">▶</span>
      시작하기
    </button>
  );
};

export default StartPillButton;
