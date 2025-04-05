import { create } from "zustand";

interface Department {
  department_id: string;
  name: string;
  value: string;
  description: string;
  manager_id?: string; // Manager is also a user
}

interface DepartmentState {
  departments: Department[];
  fetchDepartments: () => Promise<void>;
}

export const useDepartmentStore = create<DepartmentState>((set) => ({
  departments: [],
  fetchDepartments: async () => {
    try {
      const res = await fetch("/api/departments");
      const data = await res.json();
      set({ departments: data });
    } catch (error) {
      console.error("Failed to fetch departments:", error);
    }
  },
}));
