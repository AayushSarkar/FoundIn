import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("name");

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

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
    } finally {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-sky-50 to-blue-100">

      {/* SIDEBAR */}
      <Sidebar
        role={role}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <Topbar dashboard={dashboard} userName={userName} />

        {/* BODY */}
        <div className="flex-1 p-6 overflow-y-auto space-y-8">

          {/* 👋 WELCOME */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Welcome back, {userName} 👋
            </h2>
            <p className="text-gray-500">
              Here's what's happening with your startup today.
            </p>
          </div>

          {/* 📊 QUICK STATS */}
          {dashboard?.tableData?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dashboard.tableData.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-gray-500 text-sm mb-2">
                    {row.column1}
                  </h3>
                  <p className="text-2xl font-semibold text-gray-800">
                    {row.column2}
                  </p>
                  <p className="text-sm text-sky-600 mt-1">
                    {row.column3}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 📌 TEXT DATA (Vision / Mission) */}
          {dashboard?.textData?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {dashboard.textData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
                >
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 📈 TABLE */}
          {dashboard?.tableData?.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">
                Business Insights
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-gray-500 text-sm border-b">
                      <th className="pb-3">Year</th>
                      <th className="pb-3">Growth</th>
                      <th className="pb-3">Investors</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dashboard.tableData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b last:border-none hover:bg-gray-50 transition"
                      >
                        <td className="py-3 font-medium text-gray-700">
                          {row.column1}
                        </td>
                        <td className="py-3 text-gray-600">
                          {row.column2}
                        </td>
                        <td className="py-3 text-sky-600 font-medium">
                          {row.column3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {!dashboard && (
            <div className="text-center text-gray-500 mt-10">
              No dashboard data available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;