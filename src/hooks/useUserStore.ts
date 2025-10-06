import { useContext } from "react";
import { useStore } from "zustand";
import { UserProfileStore } from "@/stores/userStore";
import { UserStoreContext } from "@/providers/userStoreProvider";

export function useUserStore<T>(selector: (state: UserProfileStore) => T): T {
  const store = useContext(UserStoreContext);
  if (!store) {
    throw new Error("useUserStore must be used within a UserStoreProvider");
  }
  return useStore(store, selector);
}
