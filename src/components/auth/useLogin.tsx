import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";
import toast from "react-hot-toast";
import { useApi } from "./sign-in";
import { API_URL } from "../../react-query/constants";

const useLogin = () => {
  const navigate = useNavigate();
  const { postData } = useApi();

  const mutation = useMutation(
    async ({ mobileNumber, otp }) => {
      const response = await postData(`${API_URL}/login`, {
        mobile_no: mobileNumber,
        otp,
      });
      if (!response) {
        throw new Error("Login failed");
      }
      return response;
    },
    {
      onSuccess: (result) => {
        const { token, user } = result;
        // Store token and user in state
        useAuthStore.getState().setUserData(user, token);

        toast.success("Login successful");

        // Extract redirect path
        const searchParams = new URLSearchParams(location.search);
        const redirectPath = searchParams.get("path") ? decodeURIComponent(searchParams.get("path")) : "/";

        // Navigate to the redirect path or default
        navigate(redirectPath, { replace: true });
      },
      onError: (error) => {
        // Handle error
        toast.error(error.message || "Login failed");
      },
    }
  );

  return mutation;
};

export default useLogin;
