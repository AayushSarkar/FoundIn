// import { useState } from "react";
// import { LayoutDashboard, FileText, BarChart2, LogOut, Menu } from "lucide-react";

// export default function Sidebar({ role, activeTab, setActiveTab, handleLogout }) {
//   const [open, setOpen] = useState(true);

//   const menuItems = [
//     { name: "Explore", icon: <LayoutDashboard size={20} />, key: "explore" },
//     ...(role === "entrepreneur"
//       ? [
//           { name: "Pitch Deck", icon: <FileText size={20} />, key: "pitch" },
//           { name: "Analysis", icon: <BarChart2 size={20} />, key: "analysis" }
//         ]
//       : [])
//   ];

//   return (
//     <div
//       className={`${
//         open ? "w-64" : "w-20"
//       } bg-slate-900 text-white transition-all duration-300 flex flex-col`}
//     >
//       {/* TOGGLE */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="p-4 text-gray-400 hover:text-white"
//       >
//         <Menu />
//       </button>

//       {/* MENU */}
//       <nav className="flex-1 space-y-2 px-2">

//         {menuItems.map((item) => (
//           <button
//             key={item.key}
//             onClick={() => setActiveTab(item.key)}
//             className={`flex items-center gap-3 w-full py-2 px-3 rounded-lg transition ${
//               activeTab === item.key
//                 ? "bg-sky-500 text-white"
//                 : "hover:bg-slate-800 text-gray-300"
//             }`}
//           >
//             {item.icon}

//             {/* TEXT HIDE WHEN COLLAPSED */}
//             {open && <span>{item.name}</span>}
//           </button>
//         ))}

//       </nav>

//       {/* LOGOUT */}
//       <div className="p-3 border-t border-slate-700">
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-3 w-full bg-sky-500 hover:bg-sky-600 py-2 px-3 rounded-lg"
//         >
//           <LogOut size={18} />
//           {open && <span>Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  LogOut,
  Menu,
  CircleUser,
  DollarSign,
  Users
} from "lucide-react";

export default function Sidebar({ role, handleLogout }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 ROLE-BASED MENU
  const roleMenus = {
    normal: [
      { name: "Explore", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "My Network", icon: <Users size={20} />, path: "/network" },
      { name: "Profile", icon: <CircleUser size={20} />, path: "/profile" }
    ],
    investor: [
      { name: "Explore", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "My Network", icon: <Users size={20} />, path: "/network" },
      { name: "Profile", icon: <CircleUser size={20} />, path: "/profile" }
    ],
    entrepreneur: [
      { name: "Explore", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Funding", icon: <DollarSign size={20} />, path: "/funding" },
      { name: "Analysis", icon: <BarChart2 size={20} />, path: "/analysis" },
      { name: "My Network", icon: <Users size={20} />, path: "/network" },
      { name: "Profile", icon: <CircleUser size={20} />, path: "/profile" }
    ]
  };

  const menuItems = roleMenus[role] || [];

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white transition-all duration-300 flex flex-col border-r border-slate-800`}
    >
      {/* HEADER / TOGGLE */}
      <div className="flex items-center justify-between px-4 py-4">
        {open && (
          <h1 className="text-lg font-semibold tracking-tight text-white">
            FoundIn
          </h1>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-white transition"
        >
          <Menu />
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 space-y-2 px-2 mt-4">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className={`group flex items-center gap-3 w-full py-2.5 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  : "text-gray-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <div
                className={`${
                  isActive
                    ? "text-indigo-400"
                    : "text-gray-400 group-hover:text-white"
                }`}
              >
                {item.icon}
              </div>

              {open && (
                <span className="text-sm font-medium tracking-wide">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-3 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 py-2.5 px-3 rounded-xl transition-all"
        >
          <LogOut size={18} />
          {open && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}