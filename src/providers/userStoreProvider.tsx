"use client";

import { supabaseClient as supabase } from "@/lib/supabase/client";
import {
  UserProfile,
  createUserStore,
  UserProfileState,
} from "@/stores/userStore";
import { createContext, ReactNode, useEffect, useRef, useState } from "react";

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi | undefined>(
  undefined,
);

const defaultUserProfile: UserProfile = {
  user_id: "",
  email_address: "",
  name: "",
  phone_number: "",
  certification_number: "",
  account_type: "",
  student_registration_password: "",
  student_phone_number: "",
  employee_registration_password: "",
  created_at: new Date(0).toISOString(),
  updated_at: "",
};

export const UserStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<UserStoreApi | null>(null);
  const [isStoreInitialized, setIsStoreInitialized] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initalizeStore = async () => {
      let initialDataForStore: UserProfileState = { user: defaultUserProfile };

      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          console.error(sessionError.message);
          return;
        }

        if (!session?.user) {
          initialDataForStore = { user: defaultUserProfile };
          return;
        }

        const userProfile = await fetchUserProfile(session.user.id);

        if (userProfile) {
          initialDataForStore = {
            user: {
              user_id: userProfile.user_id,
              email_address: userProfile.email_address,
              name: userProfile.name,
              phone_number: userProfile.phone_number,
              certification_number: userProfile.certification_number,
              account_type: userProfile.account_type,
              student_registration_password:
                userProfile.student_registration_password,
              student_phone_number: userProfile.student_phone_number,
              employee_registration_password:
                userProfile.employee_registration_password,
              created_at: userProfile.created_at,
              updated_at: userProfile.updated_at,
            },
          };
        } else {
          initialDataForStore = { user: defaultUserProfile };
        }
      } catch (error) {
        console.error("Unexpected error during initialization:", error);
      } finally {
        if (mounted) {
          if (!storeRef.current) {
            storeRef.current = createUserStore(initialDataForStore);
          } else {
            storeRef.current.getState().updateUser(initialDataForStore.user);
          }

          setIsStoreInitialized(true);
        }
      }
    };

    initalizeStore();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!storeRef.current) {
          console.warn("onAuthStateChange: storeRef not initialized yet.");
          return;
        }

        if (event === "SIGNED_IN" && session?.user) {
          const userProfile = await fetchUserProfile(session?.user.id);
          storeRef.current?.getState().updateUser(userProfile);
        } else if (event === "SIGNED_OUT") {
          storeRef.current?.getState().clearUser();
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
      mounted = false;
    };
  }, []);

  if (!isStoreInitialized || !storeRef.current) return null;

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};

/**
 *
 *  Fetches the user profile from Supabase
 *  Returns the user profile data or null if not found
 *
 */

async function fetchUserProfile(userId: string): Promise<UserProfile> {
  const { data: userProfile, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    throw error;
  }

  return userProfile || null;
}
