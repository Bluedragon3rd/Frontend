import { useNavigate } from "react-router-dom";
const StartButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/first-step")} className="text-[24px]">
        핑계 생성하러 가기
      </button>
    </div>
  );
};

export default StartButton;
