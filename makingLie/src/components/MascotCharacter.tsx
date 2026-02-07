interface MascotCharacterProps {
  size?: number;
  className?: string;
}

const MascotCharacter = ({
  size = 220,
  className = "",
}: MascotCharacterProps) => {
  return (
    <img
      src="/mascot.png" // ← public 폴더에 이미지 넣고 이름 맞추기
      alt="ExcuseLab mascot"
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
};

export default MascotCharacter;
