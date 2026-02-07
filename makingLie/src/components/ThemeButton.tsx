import { FcAlarmClock } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";

interface ThemeButtonProps {
  title: string;
  onClick: () => void;
}

const ThemeButton = ({ title, onClick }: ThemeButtonProps) => {
  const iconMap: Record<string, React.ReactNode> = {
    지각: <FcAlarmClock className="text-6xl mb-3" />,
    "회의 불참": <BsCalendarDate className="text-6xl mb-3 text-red-500" />,
    "과제 연기": (
      <MdOutlineAssignment className="text-6xl mb-3 text-green-500" />
    ),
    "약속 취소": (
      <FaHandshakeSimple className="text-6xl mb-3 text-yellow-500" />
    ),
  };

  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-[200px] h-[200px]
                 rounded-[20px] bg-white shadow-md
                 hover:shadow-xl hover:scale-105 transition-all
                 border border-gray-100 hover:border-[3px] hover:border-blue-400 gap-2"
    >
      {iconMap[title]}
      <span className="text-xl font-bold text-gray-700">{title}</span>
    </button>
  );
};

export default ThemeButton;
