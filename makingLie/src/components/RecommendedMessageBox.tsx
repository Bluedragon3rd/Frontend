type Props = {
  message: string;
};

const RecommendedMessageBox = ({ message }: Props) => {
  return (
    <section
      className="
        w-full
        rounded-3xl
        border-4 border-green-300
        bg-green-50/40
        px-12 py-10
        shadow-[0_16px_40px_rgba(0,0,0,0.10)]
      "
    >
      {/* Header */}
      <div className="text-[34px] font-extrabold tracking-[-0.03em] text-slate-900">
        추천 메시지
      </div>

      {/* Message */}
      <div
        className="
          mt-10
          rounded-3xl
          border-2 border-green-200
          bg-white
          px-10 py-10
          text-center
          shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        "
      >
        <p className="text-[30px] leading-relaxed tracking-[-0.03em] text-slate-900">
          “{message}”
        </p>
      </div>
    </section>
  );
};

export default RecommendedMessageBox;
