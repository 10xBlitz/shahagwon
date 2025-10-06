"use client";

import { createClient } from "@/lib/supabase/client";
import {
  UserProfile,
  createUserStore,
  UserProfileState,
} from "@/stores/userStore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi | null>(null);

export const UserStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<UserStoreApi | null>(null);
  const [isReady, setIsReady] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    let mounted = true;

    const initalizeStore = async () => {
      let initialDataForStore: UserProfileState = { user: null };

      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("Error getting initial session:", sessionError.message);
          return;
        }

        if (session?.user) {
          const { data: userProfile, error } = await supabase
            .from("user_profiles")
            .select("*")
            .eq("user_id", session.user.id)
            .single();

          if (error) {
            console.error("Error loading user profile:", error.message);
          } else {
            initialDataForStore = { user: userProfile as UserProfile };
          }
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("Unexpected error:", error);
        }
      }

      if (mounted) {
        storeRef.current = createUserStore(initialDataForStore);
        setIsReady(true);
      }
    };

    initalizeStore();

    return () => {
      mounted = false;
    };
  }, [supabase.auth, supabase]);

  if (!isReady) return null;

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = () => {
  const context = useContext(UserStoreContext);

  if (!context) {
    throw new Error("useUserStore must be used within a GameProvider");
  }

  return context;
};
