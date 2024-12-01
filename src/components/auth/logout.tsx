import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";
// Update this path to your auth store

const LogoutButton = () => {
  const navigate = useNavigate(); // React Router's navigation hook
  const clearUserData = useAuthStore((state) => state.clearUserData); // Clear user data from Zustand store

  const handleLogout = () => {
    // Clear user data from Zustand store
    clearUserData();

    // Remove persisted data from local storage
    localStorage.removeItem("auth-storage");

    // Redirect the user to the login page
    navigate("/sign-in");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-center bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
