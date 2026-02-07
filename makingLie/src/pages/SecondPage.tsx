import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"; // TanStack Query 추가
import GradationButton from "../components/GradationButton";
import WhyLevelCard from "../components/WhyLevelCard";
import ConditionCard from "../components/ConditionCard";
import TargetTypeCard from "../components/TargetTypeCard";

// 필요한 API 및 스토어 임포트
import { postExcuseData } from "../api/excuseApi";
import { useSituationStore } from "../store/useSituationStore";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

export default function SecondPage() {
  const navigate = useNavigate();

  // 1. Zustand 스토어에서 모든 데이터 가져오기
  const { situation, reason, mood, target_audience } = useSituationStore();

  // 2. Mutation 설정
  const { mutate, isPending, isError } = useMutation({
    mutationFn: postExcuseData,
    onSuccess: (data) => {
      localStorage.setItem("resultData", JSON.stringify(data));
      navigate("/result", { state: { resultData: data } });
    },
    onError: (error) => {
      console.error("API 요청 실패:", error);
    },
  });

  // 3. 로딩 및 에러 상태 처리
  if (isPending) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  // 4. 결과 보기 버튼 클릭 핸들러
  const handleResultClick = () => {
    // 모든 값이 선택되었는지 검증 (mood나 target_audience가 null인 경우 방지)
    if (!mood || !target_audience) {
      alert("컨디션과 대상을 모두 선택해 주세요!");
      return;
    }

    // 스토어의 현재 값들을 백엔드 명세서 형식에 맞춰 전송
    mutate({
      situation: situation, // FirstPage에서 넘어온 값
      reason: reason, // 1~5 수치
      mood: mood, // "피곤", "아픔" 등
      target_audience: target_audience, // "FM 상사" 등
    });
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#f6f7fb] to-[#f4f0ff] pb-20">
      {/* 헤더 */}
      <div className="flex-none h-[60px] flex items-center justify-between w-full max-w-[800px] mx-auto mb-6 px-4">
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-xl hover:bg-gray-50 transition-colors shadow-sm"
        >
          ←
        </button>
        <div className="text-[24px] font-black text-gray-900">상황 구체화</div>
        <div className="w-12" />
      </div>

      {/* 메인 리스트 영역 */}
      <div className="w-full max-w-[800px] mx-auto pb-10 px-4">
        <div className="flex flex-col gap-5">
          <div className="h-[220px]">
            <WhyLevelCard />
          </div>

          <div className="h-[220px]">
            <ConditionCard />
          </div>

          <div className="h-[220px]">
            <TargetTypeCard />
          </div>

          {/* 결과보기 버튼 */}
          <div className="h-[100px] mt-2">
            <GradationButton
              title="결과 보기"
              className="!w-full !h-full text-[24px] rounded-[24px] shadow-lg transition-transform active:scale-[0.98]"
              onClick={handleResultClick} // 핸들러 변경
            />
          </div>
        </div>
      </div>
    </main>
  );
}
