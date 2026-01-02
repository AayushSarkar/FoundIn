import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Dashboard = () => {
  const navigate = useNavigate();

  // ✅ FIX 1: role defined
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("name");

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dashboard, setDashboard] = useState(null);
  const [activeTab, setActiveTab] = useState("explore");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      fetchDashboard();
    }
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/dashboard/details");
      setDashboard(res.data);
    } catch (err) {
      console.log("Dashboard data not found");
    }
  };

  // ✅ LOGOUT HANDLER
  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
    } catch (err) {
      // backend stateless hai, ignore error
    } finally {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-teal-800 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-4 text-left text-sm opacity-80"
        >
          ☰
        </button>

        {/* Menu */}
        <nav className="flex-1 space-y-2 px-4">
          <button
            onClick={() => setActiveTab("explore")}
            className="w-full text-left py-2 hover:bg-teal-700 rounded"
          >
            Explore
          </button>

          {role === "entrepreneur" && (
            <>
              <button
                onClick={() => setActiveTab("pitch")}
                className="w-full text-left py-2 hover:bg-teal-700 rounded"
              >
                My Pitch Deck
              </button>

              <button
                onClick={() => setActiveTab("analysis")}
                className="w-full text-left py-2 hover:bg-teal-700 rounded"
              >
                Analysis
              </button>
            </>
          )}
        </nav>

        {/* ✅ LOGOUT BUTTON (BOTTOM) */}
        <div className="p-4 border-t border-teal-700">
          <button
            onClick={handleLogout}
            className="w-full bg-teal-700 hover:bg-teal-600 py-2 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <div className="bg-white px-6 py-4 flex justify-between items-center shadow">
          {/* LEFT */}
          <div>
            <h2 className="text-xl font-semibold">
              {dashboard?.organizationName || "Organization"}
            </h2>
            <p className="text-sm text-gray-500">
              {dashboard?.organizationDetails}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">
              {userName}
            </span>
          </div>
        </div>

        {/* DASHBOARD BODY */}
        <div className="flex-1 p-6 overflow-y-auto">

          {/* TEXT DATA */}
          {dashboard?.textData?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {dashboard.textData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-lg shadow"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TABLE DATA */}
          {dashboard?.tableData?.length > 0 && (
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-lg mb-4">
                Business Metrics
              </h3>

              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Column 1</th>
                    <th className="p-2 border">Column 2</th>
                    <th className="p-2 border">Column 3</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboard.tableData.map((row, idx) => (
                    <tr key={idx} className="text-center">
                      <td className="p-2 border">{row.column1}</td>
                      <td className="p-2 border">{row.column2}</td>
                      <td className="p-2 border">{row.column3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!dashboard && (
            <p className="text-gray-500">
              No dashboard data available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
