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

const COLORS = ["#2563EB", "#E5E7EB"];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>

      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics Overview</h1>
          <p className="text-sm text-gray-500 mt-1">
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
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
            >
              <p className="text-sm text-gray-500">{item.title}</p>

              <div className="flex items-center justify-between mt-2">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {item.value}
                </h2>

                <span className="flex items-center text-green-600 text-xs font-medium">
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
            className="bg-white border border-gray-200 rounded-xl p-6"
          >
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              User Growth
            </h3>

            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#2563EB"
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* CATEGORY DISTRIBUTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Startup Categories
            </h3>

            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#2563EB"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* PIE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-gray-200 rounded-xl p-6 md:col-span-2"
          >
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              User Composition
            </h3>

            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={100}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            {/* LEGEND */}
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Investors
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                Founders
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </DashboardLayout>
  );
}