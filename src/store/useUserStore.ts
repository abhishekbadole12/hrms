// import User from "@/models/User";
import { create } from "zustand";

// Define a cleaner User model based on your API
interface userDetails {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  user_role: string;
  // more
}

interface EmploymentDetail {
  job_title: string;
  department_id: string;
  reporting_manager_id: string;
  employment_type: string;
  work_location: string;
  join_date: string;
  probation_end_date: string;
  confirmation_date: string;
  salary: string;
}

interface PreviousEmploymentDetail {
  company_name: string;
  position: string;
  employment_type: string;
  start_date: string;
  end_date: string;
  salary: number;
  reference_name: string;
  reference_email: string;
  reference_phone_number: string;
}

interface BankDetail {
  account_holder: string;
  account_number: string;
  ifsc_code: string;
  bank_name: string;
  branch_name: string;
  account_type: "SAVINGS" | "CURRENT";
}

interface SocialAndMore {
  github_url: string;
  linkedin_url: string;
  twitter_url: string;
} 

interface UserProfileResponse {
  userDetails: {
    status: string;
    data: userDetails;
  };
  employmentDetails: {
    status: string;
    data: EmploymentDetail;
  };
  previousEmploymentDetails: {
    status: string;
    data: PreviousEmploymentDetail[];
  };
  bankDetails: {
    status: string;
    data: BankDetail[];
  };
  socialAndMore: {
    status: string;
    data: SocialAndMore;
  };
}

interface UserStore {
  currentUserId?: string;
  users: userDetails[];
  userProfileDetails?: UserProfileResponse;

  setUsers: (users: userDetails[]) => void;
  setCurrentUserId: (userId: string) => void;

  fetchAllUsers: () => Promise<userDetails[]>;

  getUserProfileDetailsById: (
    userId: string
  ) => Promise<UserProfileResponse | null>;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUserId: undefined,
  users: [],
  userProfileDetails: undefined,

  setUsers: (users) => set({ users }),
  setCurrentUserId: (userId) => set({ currentUserId: userId }),

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
      return data.users as userDetails[];
    } catch (error) {
      console.error("Error in fetchAllUsers:", error);
      return [];
    }
  },

  // fetch user by id
  getUserProfileDetailsById: async (user_id: string) => {
    try {
      const response = await fetch(`/api/users/profile/${user_id}`);

      const data = await response.json();

      set({ userProfileDetails: data });
      return data as UserProfileResponse;
    } catch (error) {
      console.error("Error in getUserProfileDetailsById:", error);
      return null;
    }
  },
}));
