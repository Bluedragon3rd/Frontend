import HonestTalkButton from "../components/HonestTalkButton";
import LieLevelCard from "../components/LieLevelCard";
import MemoryCostCard from "../components/MemoryCostCard";

const TestPage = () => {
  return (
    <div>
      테스트 페이지 입니다
      <LieLevelCard level={1} />
      <HonestTalkButton />
      <MemoryCostCard level="낮음" />
    </div>
  );
};

export default TestPage;
