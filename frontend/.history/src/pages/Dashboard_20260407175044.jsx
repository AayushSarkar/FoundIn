import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
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
    const data = await getDashboard();

    console.log("DASHBOARD:", data);

    setDashboard(data); // ✅ correct
  } catch (err) {
    console.log("Dashboard error:", err);
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
        <div className="flex-1 px-8 py-6 overflow-y-auto space-y-8">

          {/* HEADER + CARDS + ANIMATION */}
          {dashboard?.tableData?.length > 0 && (
            <div className="grid lg:grid-cols-3 gap-6 items-center">

              {/* LEFT (HEADER + CARDS) */}
              <div className="lg:col-span-2 space-y-5">

                {/* HEADER */}
                <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Dashboard Overview
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Monitor performance, analyze trends, and manage key insights.
                  </p>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {dashboard.tableData.map((row, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 
                      hover:shadow-md hover:-translate-y-1 transition duration-300"
                    >
                      <h4 className="text-xs text-gray-500 mb-1">
                        {row.column1}
                      </h4>

                      <p className="text-2xl font-semibold text-gray-800">
                        {row.column2}
                      </p>

                      <p className="text-sm text-sky-600 mt-1 font-medium">
                        {row.column3}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* RIGHT (ANIMATION) */}
              <div className="flex justify-center">
                <div className="w-[240px] lg:w-[280px]">
                  <Lottie animationData={graphAnimation} loop />
                </div>
              </div>

            </div>
          )}

          {/* TEXT CARDS */}
          {dashboard?.textData?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {dashboard.textData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 
                  hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TABLE */}
          {dashboard?.tableData?.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Business Insights
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
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

          {/* EMPTY */}
          {!dashboard && (
            <div className="text-center text-gray-500 mt-10">
              No data available.
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;