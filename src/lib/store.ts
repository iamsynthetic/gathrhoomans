import { create } from "zustand";

// interface CounterState {
//   count: number;
//   increase: () => void;
//   decrease: () => void;
//   reset: () => void;
// }

interface ButtonState {
  isActive: string;
  setActiveButton: (id: string) => void;
}

// export const useCounterStore = create<CounterState>()((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
// }));

export const useButtonState = create<ButtonState>()((set) => ({
  isActive: "btn1",
  setActiveButton: (id: string) => set({ isActive: id }),
}));
