type Props = {
  text: string;
};

const InfoBanner = ({ text }: Props) => {
  return (
    <div
      className="
        w-full
        rounded-3xl
        border-2 border-slate-200
        bg-white
        px-8 py-5
        shadow-[0_10px_25px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-center gap-4">
        <span className="text-[26px]">💡</span>

        <span className="text-[20px] font-medium tracking-[-0.02em] text-slate-800">
          {text}
        </span>
      </div>
    </div>
  );
};

export default InfoBanner;
