interface GameStartButtonProps {
  onClick?: () => void;
}
const GameStartButton = ({ onClick }: GameStartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-3xl
        bg-gradient-to-r from-violet-500 to-pink-500
        py-7
        text-center
        text-[28px]
        font-extrabold
        text-white
        shadow-[0_14px_30px_rgba(0,0,0,0.18)]
        transition
        hover:brightness-110
        active:scale-[0.98]
      "
    >
      <span className="flex items-center justify-center gap-4">
        <span className="text-[32px]">▶</span>
        시작
      </span>
    </button>
  );
};

export default GameStartButton;
