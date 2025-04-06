import { create } from "zustand";

interface UserAttributes {
  current_user_id?: string;
  users: any[];
  setUsers: (users: any[]) => void;
  fetchAllUsers: () => Promise<void>;
}

export const useUserStore = create<UserAttributes>((set) => ({
  current_user_id: undefined,
  users: [],
  setUsers: (users: any[]) => set({ users }),

  setCurrentUserId: (userId: string) => set({ current_user_id: userId }),

  // fetch all users
  fetchAllUsers: async () => {
    try {
      const res = await fetch("/api/users", { method: "GET" });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      // Check if the response is JSON
      const data = await res.json();
      set({ users: data.users });
      return data.users;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      return [];
    }
  },
}));
