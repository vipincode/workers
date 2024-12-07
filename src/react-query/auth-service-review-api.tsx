import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "./constants";

const fetchServiceReview = async (userId: number, token: string) => {
  const response = await axios.get(`${API_URL}/get-service-reviews/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useServiceReview = (userId: number, token: string) => {
  return useQuery({
    queryKey: ["serviceReview", userId],
    queryFn: () => fetchServiceReview(userId, token),
    enabled: !!userId && !!token, // Only run if userId and token are available
  });
};
