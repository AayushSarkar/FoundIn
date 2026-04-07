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
       <div className="flex-1 px-8 py-6 overflow-y-auto space-y-6">

  {/* HEADER */}
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-800">
      Dashboard Overview
    </h2>
    <p className="text-gray-500 text-sm mt-1">
      Monitor performance, analyze trends, and manage key insights.
    </p>
  </div>

  {/* KPI + ANIMATION */}
  {dashboard?.tableData?.length > 0 && (
    <div className="grid lg:grid-cols-3 gap-6 items-center">

      {/* CARDS */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
        {dashboard.tableData.map((row, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 
            hover:shadow-md transition"
          >
            <h4 className="text-xs text-gray-500 mb-1">
              {row.column1}
            </h4>

            <p className="text-2xl font-semibold text-gray-800">
              {row.column2}
            </p>

            <p className="text-sm text-sky-600 mt-1">
              {row.column3}
            </p>
          </div>
        ))}
      </div>

      {/* ANIMATION */}
      <div className="flex justify-center">
        <div className="w-[260px]">
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
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
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

</div>

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