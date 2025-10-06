import { useContext } from "react";
import { useStore } from "zustand";
import { UserProfileState } from "@/stores/userStore";
import { UserStoreContext } from "@/providers/userStoreProvider";

export function useUserStore<T>(selector: (state: UserProfileState) => T): T {
  const store = useContext(UserStoreContext);
  if (!store) {
    throw new Error("useUserStore must be used within a UserStoreProvider");
  }
  return useStore(store, selector);
}

// i'm done with shawagwon's auth
