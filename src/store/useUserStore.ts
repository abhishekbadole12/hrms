import { create } from "zustand";

interface UserAttributes {
  current_user_id?: string;
}

export const useUserStore = create<UserAttributes>((set) => ({
  current_user_id: undefined,

  setCurrentUserId: (userId: string) => set({ current_user_id: userId }),

  fetchCurrentUserId: async () => {
    try {
      const res = await fetch("/api/current_user");
      const data = await res.json();
      set({ current_user_id: data.current_user_id });
    } catch (error) {
      console.error("Failed to fetch current user ID:", error);
    }
  },
  
}));
