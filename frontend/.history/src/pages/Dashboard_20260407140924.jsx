import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Sidebar from "../components/Sidebar";

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

        {/* TOP BAR */}
        <div className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {dashboard?.organizationName || "Dashboard"}
            </h2>
            <p className="text-sm text-gray-500">
              {dashboard?.organizationDetails}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-gray-700">
              {userName}
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="flex-1 p-6 overflow-y-auto">

          {/* CARDS */}
          {dashboard?.textData?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {dashboard.textData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TABLE */}
          {dashboard?.tableData?.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">
                Business Metrics
              </h3>

              <table className="w-full border rounded-lg overflow-hidden">
                <thead className="bg-sky-100 text-gray-700">
                  <tr>
                    <th className="p-3">Column 1</th>
                    <th className="p-3">Column 2</th>
                    <th className="p-3">Column 3</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboard.tableData.map((row, idx) => (
                    <tr key={idx} className="text-center border-t">
                      <td className="p-3">{row.column1}</td>
                      <td className="p-3">{row.column2}</td>
                      <td className="p-3">{row.column3}</td>
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