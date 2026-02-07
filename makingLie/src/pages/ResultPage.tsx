import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import RetryButton from "../components/RetryButton";
import GradationButton from "../components/GradationButton";
import HonestTalkButton from "../components/HonestTalkButton";
import LieLevelCard from "../components/LieLevelCard";
import MemoryCostCard from "../components/MemoryCostCard";

import { getHonestExcuse } from "../api/honestApi";

import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

interface ResultData {
  excuse: string;
  lie_level: number;
  memory_cost: number;
}

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const [isCopied, setIsCopied] = useState(false);

  // 🔥 추가: 입력창 표시 여부와 입력값 상태
  const [showHonestInput, setShowHonestInput] = useState(false);
  const [honestText, setHonestText] = useState("");

  const resultData = location.state?.resultData as ResultData | undefined;

  const honestMutation = useMutation({
    mutationFn: ({
      honestState,
      currentExcuse,
    }: {
      honestState: string;
      currentExcuse: string;
    }) => getHonestExcuse(honestState, currentExcuse),

    onSuccess: (data) => {
      navigate("/honest", {
        state: {
          message: data.changed,
        },
      });
    },
  });

  useEffect(() => {
    if (!resultData) {
      navigate("/");
    }
  }, [resultData, navigate]);

  if (!resultData) return null;
  if (honestMutation.isPending) return <LoadingPage />;
  if (honestMutation.isError) return <ErrorPage />;

  const { excuse, lie_level, memory_cost } = resultData;

  const handleRetry = () => {
    queryClient.clear();
    navigate("/first-step");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(excuse);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      console.error("복사 실패");
    }
  };

  // 🔥 수정: 버튼 클릭 시 바로 mutate하지 않고 입력창을 띄움
  const handleHonestClick = () => {
    setShowHonestInput(true);
  };

  // 🔥 추가: 실제 API 전송 함수
  const handleHonestSubmit = () => {
    if (!honestText.trim()) {
      alert("솔직한 상황을 입력해주세요!");
      return;
    }
    honestMutation.mutate({
      honestState: honestText, // 사용자가 입력한 텍스트 전달
      currentExcuse: excuse,
    });
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] pb-20">
      {/* ... 기존 상단 카드 부분 생략 ... */}
      <div className="mt-10 w-[806px] bg-white rounded-[32px] p-12 shadow border border-purple-100">
        <div className="bg-[#9F21E3] text-white px-6 py-3 rounded-full font-bold text-lg mb-8 w-fit">
          생성된 핑계
        </div>
        <div className="relative mb-10">
          <div
            onClick={handleCopy}
            className="p-4 pr-16 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            <h1 className="break-words text-[32px] leading-relaxed font-medium">
              "{excuse}"
            </h1>
          </div>
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
          >
            {isCopied ? "✅" : "📋"}
          </button>
        </div>
        <hr className="mb-10" />
        <div className="flex gap-6">
          <LieLevelCard level={lie_level} />
          <MemoryCostCard level={memory_cost} />
        </div>
      </div>

      <div className="mt-10 mb-10 w-[806px]">
        {!showHonestInput ? (
          // 1단계: 버튼 표시
          <HonestTalkButton onClick={handleHonestClick} />
        ) : (
          // 2단계: 입력창 표시
          <div className="flex flex-col gap-4 p-8 bg-green-50 border-4 border-green-300 rounded-[24px] animate-fade-in">
            <h3 className="text-[24px] font-bold text-green-900">
              솔직한 상황을 짧게 적어주세요
            </h3>
            <textarea
              value={honestText}
              onChange={(e) => setHonestText(e.target.value)}
              placeholder="예: 사실 늦잠 자서 늦었습니다.."
              className="w-full h-[120px] p-4 rounded-xl border-2 border-green-200 outline-none focus:border-green-500 text-[20px] resize-none"
            />
            <div className="flex gap-4">
              <button
                onClick={() => setShowHonestInput(false)}
                className="flex-1 py-4 bg-white border-2 border-green-200 rounded-xl font-bold text-green-700 hover:bg-green-100"
              >
                취소
              </button>
              <button
                onClick={handleHonestSubmit}
                className="flex-[2] py-4 bg-green-600 rounded-xl font-bold text-white hover:bg-green-700 transition"
              >
                정면 돌파하기
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-6 w-[806px]">
        <GradationButton
          title="반응 시뮬 보기"
          className="!w-[391px] !h-[104px] text-[40px]"
          onClick={() => navigate("/simulation")}
        />
        <RetryButton
          className="!w-[391px] !h-[104px] text-[40px]"
          onClick={handleRetry}
        />
      </div>
    </main>
  );
};

export default ResultPage;
