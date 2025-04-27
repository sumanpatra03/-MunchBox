import { supabase } from "../Supabase/Supabase";

export const auth = {
  async signUp(email, password, fullname) {
    // Check if the email already exists in the users table
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
        // emailRedirectTo: `${location.origin}/auth/callback`,
        data: { fullname },
      },
    });

    if (signUpError) {
      throw signUpError;
    }

    if (!data.user) {
      throw new Error("Failed to create user account.");
    }

    // Insert user details into the "users" table
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: data.user.id,
        email,
        fullname,
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

  async getUser() {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      throw new Error("Failed to get user.");
    }

    return data.user;
  },
};
