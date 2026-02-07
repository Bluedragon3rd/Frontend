type Props = {
  label: string;
  onClick?: () => void;
};

const QuizOptionButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-3xl
        border-4 border-slate-200
        bg-white
        px-10 py-6
        text-left
        text-[28px]
        font-semibold
        text-slate-900
        shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        transition
        hover:border-violet-400
        active:scale-[0.99]
      "
    >
      {label}
    </button>
  );
};

export default QuizOptionButton;
