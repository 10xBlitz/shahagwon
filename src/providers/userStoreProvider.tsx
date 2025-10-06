"use client";

import { createClient } from "@/lib/supabase/client";
import {
  UserProfile,
  createUserStore,
  UserProfileState,
} from "@/stores/userStore";
import { createContext, ReactNode, useEffect, useRef, useState } from "react";

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi | null>(null);

export const UserStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<UserStoreApi | null>(null);
  const [isReady, setIsReady] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    const initalizeStore = async () => {
      const initialDataForStore: UserProfileState = { user: null };

      if (!storeRef.current) {
        storeRef.current = createUserStore(initialDataForStore);
        setIsReady(true);
      }
    };

    initalizeStore();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!session) {
          storeRef.current?.getState().clearUser();
        }

        if (event === "SIGNED_IN" || event == "INITIAL_SESSION") {
          const { data: userProfile, error } = await supabase
            .from("user_profiles")
            .select("*")
            .eq("user_id", session?.user.id)
            .single();

          if (error) {
            console.log("Error loading user profile:", error.message);
          } else {
            storeRef.current?.getState().setUser(userProfile as UserProfile);
          }
        } else if (event === "SIGNED_OUT") {
          storeRef.current?.getState().clearUser();
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  if (!isReady) return null;

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};
