interface HonestTalkButtonProps {
  onClick?: () => void;
}
const HonestTalkButton = ({ onClick }: HonestTalkButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="
          w-[806px]
          h-[150px]
          rounded-2xl
          border-4 border-green-300
          bg-green-50
          py-8
          text-center
          transition
          hover:shadow-md
          active:scale-[0.98]
        "
      >
        <div className="flex flex-col items-center gap-1">
          <div className="text-[35px] font-semibold text-green-900">
            🔥 정면 돌파하기
          </div>

          <div className="text-[24px] text-green-700">"오늘은 양심 ON"</div>
        </div>
      </button>
    </div>
  );
};

export default HonestTalkButton;
