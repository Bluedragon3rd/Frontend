import { create } from "zustand";

export type ConditionType = "피곤" | "아픔" | "멘탈" | "멀쩡";
export type TargetType =
  | "FM 상사"
  | "공감형"
  | "눈치100단"
  | "친한 친구"
  | "회사 팀원";

interface SituationState {
  whyLevel: number;
  condition: ConditionType | null;
  target: TargetType | null;

  setWhyLevel: (level: number) => void;
  setCondition: (condition: ConditionType) => void;
  setTarget: (target: TargetType) => void;
  reset: () => void;
}

export const useSituationStore = create<SituationState>((set) => ({
  // 초기값
  whyLevel: 3,
  condition: null,
  target: null,

  // 상태 변경 함수들
  setWhyLevel: (level) => set({ whyLevel: level }),
  setCondition: (condition) => set({ condition }),
  setTarget: (target) => set({ target }),

  // 초기화 함수
  reset: () => set({ whyLevel: 3, condition: null, target: null }),
}));
