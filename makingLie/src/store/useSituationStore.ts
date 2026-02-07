import { create } from "zustand";

export type MoodType = "피곤" | "아픔" | "멘탈" | "멀쩡";
export type TargetType =
  | "FM 상사"
  | "공감형"
  | "눈치100단"
  | "친한 친구"
  | "회사 팀원";

interface SituationState {
  situation: string; // FirstPage에서 입력받는 상황
  reason: number; // 1~5 (whyLevel)
  mood: MoodType | null; // 백엔드의 mood
  target_audience: TargetType | null; // 백엔드의 target_audience

  setSituation: (val: string) => void;
  setReason: (val: number) => void;
  setMood: (val: MoodType) => void;
  setTargetAudience: (val: TargetType) => void;
  reset: () => void;
}

export const useSituationStore = create<SituationState>((set) => ({
  situation: "",
  reason: 3,
  mood: null,
  target_audience: null,

  setSituation: (val) => set({ situation: val }),
  setReason: (val) => set({ reason: val }),
  setMood: (val) => set({ mood: val }),
  setTargetAudience: (val) => set({ target_audience: val }),

  reset: () =>
    set({ situation: "", reason: 3, mood: null, target_audience: null }),
}));
