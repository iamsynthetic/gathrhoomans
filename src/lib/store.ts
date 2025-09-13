import { create } from "zustand";

interface ButtonState {
  isActive: string;
  setActiveButton: (id: string) => void;
}

export interface rsvpToken {
  id?: string;
  name?: string;
  title?: string;
  email: string;
  action?: string;
  created_at: string;
}
type rsvpStore = {
  rsvps: rsvpToken[];
  rsvpcategories: string[];
  setRsvps: (rsvps: rsvpToken[]) => void;
};

export const useButtonState = create<ButtonState>()((set) => ({
  isActive: "btn1",
  setActiveButton: (id: string) => set({ isActive: id }),
}));

export const useRsvpStore = create<rsvpStore>()((set) => ({
  rsvps: [],
  rsvpcategories: ["email", "action", "created_at"],
  setRsvps: (rsvps) => set({ rsvps }),
}));
