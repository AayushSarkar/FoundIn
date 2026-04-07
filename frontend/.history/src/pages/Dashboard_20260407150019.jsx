import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Lottie from "lottie-react";
import graphAnimation from "../assets/Company Statistic Graph.json";

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
    <div className="flex h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100">

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
        <div className="flex-1 p-8 overflow-y-auto space-y-10">

          {/* 🔹 HEADER SECTION */}
          <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">
              Dashboard Overview
            </h2>
            <p className="text-gray-500 mt-1">
              Monitor performance, analyze trends, and manage key insights for your organization.
            </p>
          </div>

          {/* 🔹 KPI CARDS */}
          {dashboard?.tableData?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dashboard.tableData.map((row, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 
                  hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  <h4 className="text-sm text-gray-500 mb-2">
                    {row.column1}
                  </h4>

                  <p className="text-3xl font-semibold text-gray-800">
                    {row.column2}
                  </p>

                  <div className="mt-2 text-sm text-sky-600 font-medium">
                    {row.column3}
                  </div>

                  {/* subtle hover line */}
                  <div className="mt-4 h-1 w-0 bg-sky-500 group-hover:w-full transition-all duration-300 rounded"></div>
                </div>
              ))}
            </div>
          )}

          {/* 🔹 INSIGHT CARDS */}
          {dashboard?.textData?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {dashboard.textData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 
                  hover:shadow-md hover:-translate-y-1 transition duration-300"
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

          {/* 🔹 TABLE */}
          {dashboard?.tableData?.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-6 text-gray-800">
                Performance Insights
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-500 text-sm border-b">
                      <th className="pb-4">Category</th>
                      <th className="pb-4">Value</th>
                      <th className="pb-4">Trend</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dashboard.tableData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b last:border-none hover:bg-gray-50 transition"
                      >
                        <td className="py-4 font-medium text-gray-700">
                          {row.column1}
                        </td>
                        <td className="py-4 text-gray-600">
                          {row.column2}
                        </td>
                        <td className="py-4 text-sky-600 font-medium">
                          {row.column3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* EMPTY STATE */}
          {!dashboard && (
            <div className="text-center text-gray-500 mt-20">
              No data available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;