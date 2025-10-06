import { createClient } from "@/lib/supabase/client";
import { TablesInsert } from "@/types/supabase";

const supabase = createClient();

export async function signUpWithEmail(
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
  accountType: string,
  verificationPassword: string,
  certificationNumber?: string,
) {
  // Step 1: Sign up user
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) throw error;
  const user = data.user;
  if (!user) throw new Error("No user");

  // Step 2: Insert user information into user_profiles
  const profile: TablesInsert<"user_profiles"> = {
    user_id: user.id,
    name,
    email_address: email,
    phone_number: phoneNumber,
    account_type: accountType,
    student_registration_password:
      accountType === "student" ? verificationPassword : null,
    student_phone_number:
      accountType === "parent" ? verificationPassword : null,
    employee_registration_password:
      accountType === "employee" ? verificationPassword : null,
    certification_number: certificationNumber ?? null,
  };

  const { error: profileError } = await supabase
    .from("user_profiles")
    .insert(profile);

  if (profileError) throw profileError;

  return data;
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw error;

  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}
