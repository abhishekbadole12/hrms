import { create } from "zustand";

interface Department {
  department_id: string;
  name: string;
  value: string;
  description: string;
  manager_id?: string; // Manager is also a user
}

interface DepartmentStore {
  departments: Department[];
  getDepartments: () => Promise<void>;
}

export const useDepartmentStore = create<DepartmentStore>((set) => ({
  departments: [],
  
  // get all departments
  getDepartments: async () => {
    try {
      const res = await fetch("/api/departments");
      const data = await res.json();
      set({ departments: data });
    } catch (error) {
      console.error("Failed to fetch departments:", error);
    }
  },
}));
