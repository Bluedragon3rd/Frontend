import { useNavigate } from "react-router-dom";
interface ThemeButtonProps {
  title: string;
}
const ThemeButton = ({ title }: ThemeButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/second-step")}
      className="flex flex-col justify-center items-center w-[200px] h-[200px] rounded-[7px] bg-gray-100 hover:border-3 border-blue-400"
    >
      {title}
    </button>
  );
};

export default ThemeButton;
