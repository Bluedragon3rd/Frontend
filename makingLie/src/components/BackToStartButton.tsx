import { useNavigate } from "react-router-dom";

const BackToStartButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="
        w-full
        h-full  /* 👈 부모 높이(80px)를 가득 채움 */
        rounded-3xl
        bg-green-600
        /* py-7 제거 -> Flex로 중앙 정렬 */
        flex justify-center items-center
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
  );
};

export default BackToStartButton;
