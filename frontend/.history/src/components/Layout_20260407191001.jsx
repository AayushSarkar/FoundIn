import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("name");

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
    } finally {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100">

      {/* SIDEBAR */}
      <Sidebar role={role} handleLogout={handleLogout} />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <Topbar userName={userName} />

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {children}
        </div>

      </div>
    </div>
  );
}