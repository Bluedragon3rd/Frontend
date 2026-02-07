import { useNavigate } from "react-router-dom";
interface GradationButtonProps {
  title: string;
}
const GradationButton = ({ title }: GradationButtonProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/result")}
        className="w-[200px] h-[40px] flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-12 rounded-lg shadow-lg"
      >
        {title}
      </button>
    </div>
  );
};

export default GradationButton;
