import DashboardLayout from "../components/Layout";
import { motion } from "framer-motion";
import { FaUserPlus, FaCheck, FaTimes } from "react-icons/fa";

const suggestedUsers = [
  {
    name: "Aarav Mehta",
    role: "AI Founder",
    mutual: 12,
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Riya Sharma",
    role: "Product Manager",
    mutual: 8,
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Kunal Verma",
    role: "Investor",
    mutual: 5,
    img: "https://i.pravatar.cc/150?img=15",
  },
];

const connections = [
  {
    name: "Ananya Gupta",
    role: "Startup Founder",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Rahul Jain",
    role: "Angel Investor",
    img: "https://i.pravatar.cc/150?img=22",
  },
];

const requests = [
  {
    name: "Simran Kaur",
    role: "Marketing Lead",
    img: "https://i.pravatar.cc/150?img=45",
  },
];

export default function MyNetworkPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 p-6">

        <div className="max-w-7xl mx-auto space-y-8">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              My Network
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Connect with founders, investors and professionals
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-6">

              {/* SUGGESTIONS */}
              <div className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Suggested for You
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {suggestedUsers.map((user, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition"
                    >
                      <img
                        src={user.img}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {user.name}
                        </h3>
                        <p className="text-xs text-gray-500">{user.role}</p>
                        <p className="text-xs text-indigo-500 mt-1">
                          {user.mutual} mutual connections
                        </p>
                      </div>

                      <button className="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-100">
                        <FaUserPlus /> Connect
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CONNECTIONS */}
              <div className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Your Connections
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {connections.map((user, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition"
                    >
                      <img
                        src={user.img}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          {user.name}
                        </h3>
                        <p className="text-xs text-gray-500">{user.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              {/* REQUESTS */}
              <div className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Requests
                </h2>

                {requests.map((user, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 border border-gray-100 rounded-xl mb-3"
                  >
                    <img
                      src={user.img}
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </h3>
                      <p className="text-xs text-gray-500">{user.role}</p>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100">
                        <FaCheck />
                      </button>
                      <button className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100">
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* NETWORK STATS */}
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-2xl p-6 shadow-md">
                <h3 className="text-sm">Your Network</h3>
                <h2 className="text-3xl font-semibold mt-2">245</h2>
                <p className="text-xs mt-1 text-indigo-100">
                  Connections growing steadily 🚀
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}