type Props = {
  textToCopy: string;
};

const CopyButton = ({ textToCopy }: Props) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("복사되었습니다!");
    } catch {
      alert("복사 실패 😢");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="
        inline-flex
        items-center
        gap-3
        rounded-2xl
        border-4 border-green-400
        bg-white
        px-8 py-4
        text-[22px]
        font-semibold
        text-green-700
        shadow-[0_8px_20px_rgba(0,0,0,0.08)]
        transition
        hover:bg-green-50
        active:scale-[0.98]
      "
    >
      <span className="text-[26px]">📋</span>
      복사하기
    </button>
  );
};

export default CopyButton;
