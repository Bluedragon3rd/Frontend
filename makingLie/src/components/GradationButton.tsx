import { useNavigate } from "react-router-dom";

interface GradationButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const GradationButton = ({
  title,
  className,
  onClick,
}: GradationButtonProps) => {
  const navigate = useNavigate();

  return (
    // 1. 여기서 부모가 준 크기(391px)를 받음
    <div className={className}>
      <button
        onClick={onClick || (() => navigate("/result"))}
        className="
          w-full h-full /* 👈 핵심 수정 */
          text-[24px] 
          flex justify-center items-center 
          bg-gradient-to-r from-purple-600 to-pink-500 
          text-white 
          font-bold 
          rounded-2xl 
          shadow-lg
          /* py-3 px-12 제거 또는 유지해도 w-full이라 괜찮음 */
        "
      >
        {title}
      </button>
    </div>
  );
};

export default GradationButton;
