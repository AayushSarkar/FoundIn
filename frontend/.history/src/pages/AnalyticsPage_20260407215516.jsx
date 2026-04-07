import DashboardLayout from "../components/Layout";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, CartesianGrid
} from "recharts";
import { FaArrowUp } from "react-icons/fa";

const stats = [
  { title: "Total Users", value: "12,430", change: "+12%" },
  { title: "Active Startups", value: "320", change: "+8%" },
  { title: "Funding Raised", value: "$1.2M", change: "+21%" },
  { title: "Investors", value: "85", change: "+5%" },
];

const lineData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 900 },
  { name: "Mar", users: 1400 },
  { name: "Apr", users: 1100 },
  { name: "May", users: 1800 },
  { name: "Jun", users: 2200 },
];

const barData = [
  { name: "AI", value: 40 },
  { name: "FinTech", value: 25 },
  { name: "Health", value: 20 },
  { name: "EdTech", value: 15 },
];

const pieData = [
  { name: "Investors", value: 60 },
  { name: "Founders", value: 40 },
];

const PIE_COLORS = ["#6366F1", "#C7D2FE"];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>

      {/* 🌈 BACKGROUND */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">

        <div className="max-w-7xl mx-auto space-y-8 p-6">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
              Analytics Overview
            </h1>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Track platform growth, engagement and funding insights
            </p>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-5">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-sm text-gray-500">{item.title}</p>

                <div className="flex items-center justify-between mt-3">
                  <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    {item.value}
                  </h2>

                  <span className="flex items-center bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                    <FaArrowUp className="mr-1 text-[10px]" />
                    {item.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CHART GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* USER GROWTH */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                User Growth
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={lineData}>

                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#6366F1"
                    strokeWidth={3}
                    fill="url(#colorUsers)"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* CATEGORY DISTRIBUTION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                Startup Categories
              </h3>

              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#6366F1"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* PIE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 md:col-span-2 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                User Composition
              </h3>

              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={3}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={PIE_COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              {/* LEGEND */}
              <div className="flex justify-center gap-8 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                  Investors
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="w-3 h-3 bg-indigo-200 rounded-full"></span>
                  Founders
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </DashboardLayout>
  );
}