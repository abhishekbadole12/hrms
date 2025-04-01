import axios from "axios";
// import { API_BASE_URL } from "./axiosInstance";

interface ILoginuser {
  email: string;
  password: string;
}
interface ILoginResponse {
  message: string;
  user?: {
    user_id: number;
    email: string;
    user_role: string;
  };
  token?: string;
  error?: string;
}

export const loginUser = async (data: ILoginuser): Promise<ILoginResponse> => {
  try {
    const response = await axios.post<ILoginResponse>(
      `${process.env.NEXT_PUBLIC_API}/user/login`,
      data,
      { withCredentials: true }
    );

    return response.data;
  } catch (error: any) {
    console.error(
      "Login Error:",
      error.response?.data?.message || error.message
    );
    return {
      message: "Login failed",
      error: error.response?.data?.message || "An unexpected error occurred",
    };
  }
};
