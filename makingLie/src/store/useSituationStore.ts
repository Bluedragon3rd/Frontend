import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; // 👈 1. 미들웨어 불러오기

export type ConditionType = "피곤" | "아픔" | "멘탈";
export type TargetType = "FM 상사" | "공감형" | "눈치100단";

interface SituationState {
  whyLevel: number;
  condition: ConditionType | null;
  target: TargetType | null;
  setWhyLevel: (level: number) => void;
  setCondition: (condition: ConditionType) => void;
  setTarget: (target: TargetType) => void;
  reset: () => void;
}

export const useSituationStore = create(
  // 👈 2. persist로 전체를 감싸줍니다
  persist<SituationState>(
    (set) => ({
      whyLevel: 50,
      condition: null,
      target: null,

      setWhyLevel: (level) => set({ whyLevel: level }),
      setCondition: (condition) => set({ condition }),
      setTarget: (target) => set({ target }),
      reset: () => set({ whyLevel: 50, condition: null, target: null }),
    }),
    {
      name: "situation-storage", // 👈 3. 로컬스토리지에 저장될 이름 (Key)
      storage: createJSONStorage(() => localStorage), // 👈 4. 저장소로 localStorage 사용 명시
    },
  ),
);
