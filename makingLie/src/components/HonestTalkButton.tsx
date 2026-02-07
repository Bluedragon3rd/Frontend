import { useNavigate } from "react-router-dom";

const HonestTalkButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/honest-talk")}
        className="
          w-full
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
        <div className="flex flex-col items-center gap-2">
          <div className="text-[22px] font-semibold text-green-900">
            💚 솔직한 대화 추천
          </div>

          <div className="text-[18px] text-green-700">
            정중한 거절로 변환하기 →
          </div>
        </div>
      </button>
    </div>
  );
};

export default HonestTalkButton;
