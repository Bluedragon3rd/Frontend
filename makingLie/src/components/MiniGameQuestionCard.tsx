type Props = {
  question: string;
};

const MiniGameQuestionCard = ({ question }: Props) => {
  return (
    <section
      className="
        w-full
        rounded-3xl
        bg-white
        px-12 py-20
        text-center
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
      "
    >
      <h2 className="text-[40px] font-extrabold tracking-[-0.03em] text-slate-900">
        {question}
      </h2>
    </section>
  );
};

export default MiniGameQuestionCard;
