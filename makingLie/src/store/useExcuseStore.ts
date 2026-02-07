import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ExcuseState {
  // 1. 데이터
  target: string;
  situation: string;
  tone: string;

  // 2. UI 상태 (여기에 step 추가!)
  step: number;

  // 액션들
  setTarget: (target: string) => void;
  setSituation: (situation: string) => void;
  setTone: (tone: string) => void;

  // 3. 스텝 조작 액션 (이게 핵심)
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

export const useExcuseStore = create(
  persist<ExcuseState>(
    (set) => ({
      target: "",
      situation: "",
      tone: "",
      step: 1, // 초기값 1

      setTarget: (target) => set({ target }),
      setSituation: (situation) => set({ situation }),
      setTone: (tone) => set({ tone }),

      // 한 줄로 끝나는 스텝 이동 로직
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })), // 1보다 작아지지 않게

      // 초기화 (데이터랑 스텝 모두 원상복구)
      reset: () => set({ target: "", situation: "", tone: "", step: 1 }),
    }),
    {
      name: "excuse-storage",
    },
  ),
);
