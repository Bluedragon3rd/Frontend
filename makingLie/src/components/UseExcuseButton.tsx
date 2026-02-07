import { useNavigate } from "react-router-dom";

const UseExcuseButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // 👈 뒤로 가기 (결과 페이지로)
      className="
        w-full
        h-full /* 부모 높이에 맞춤 */
        rounded-[24px]
        border-2 border-slate-200
        bg-white
        py-6
        text-center
        text-[22px]
        font-bold
        text-slate-700
        shadow-sm
        transition-all
        hover:border-slate-300 hover:bg-slate-50
        active:scale-[0.98]
      "
    >
      핑계 결과 다시 보기
    </button>
  );
};

export default UseExcuseButton;
