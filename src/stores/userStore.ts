import { createStore } from "zustand/vanilla";

import type { Tables } from "@/types/supabase";

export type UserProfile = Tables<"user_profiles">;

export type UserProfileState = {
  user: UserProfile | null;
};

export type UserProfileActions = {
  setUser: (user: UserProfile) => void;
  updateUser: (user: Partial<UserProfile> | null) => void;
  clearUser: () => void;
};

export type UserProfileStore = UserProfileState & UserProfileActions;

export const createUserStore = (initialState: UserProfileState) => {
  return createStore<UserProfileStore>()((set) => ({
    ...initialState,
    setUser: (user) => set({ user }),
    updateUser: (profileData) =>
      set((state) => ({
        user: state.user
          ? { ...state.user, ...profileData }
          : (profileData as UserProfile),
      })),
    clearUser: () => set({ user: null }),
  }));
};
