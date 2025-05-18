import { supabase } from "../Supabase/Supabase";

export const auth = {
  async signUp(email, password, firstName, lastName) {
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      throw new Error(
        "This email is already registered. Try signing in instead."
      );
    }

    if (checkError && checkError.code !== "PGRST116") {
      throw checkError;
    }

    // Sign up the user in Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { firstName, lastName },
      },
    });

    if (signUpError) {
      throw signUpError;
    }

    if (!data.user) {
      throw new Error("Failed to create user account.");
    }

    
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: data.user.id,
        email,
        firstName,
        lastName,
      },
    ]);

    if (insertError) {
      await supabase.auth.admin.deleteUser(data.user.id);
      throw insertError;
    }

    return data;
  },

  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error("Invalid email or password.");
    }

    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error("Error logging out.");
    }
  },
};
