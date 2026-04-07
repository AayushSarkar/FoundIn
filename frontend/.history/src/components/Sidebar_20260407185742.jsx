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
  FileText,
  BarChart2,
  LogOut,
  Menu
} from "lucide-react";

export default function Sidebar({ role, handleLogout }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ ROLE-BASED MENU (clean & scalable)
  const roleMenus = {
    normal: [
      { name: "Explore", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Profile", icon: <BarChart2 size={20} />, path: "/profile" }
    ],
    investor: [
      { name: "Explore", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Profile", icon: <BarChart2 size={20} />, path: "/profile" }
    ],
    entrepreneur: [
      { name: "Explore", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Pitch Deck", icon: <FileText size={20} />, path: "/pitch" },
      { name: "Analysis", icon: <BarChart2 size={20} />, path: "/analysis" },
      { name: "Profile", icon: <BarChart2 size={20} />, path: "/profile" }
    ]
  };

  const menuItems = roleMenus[role] || [];

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-slate-900 text-white transition-all duration-300 flex flex-col`}
    >
      {/* TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 text-gray-400 hover:text-white"
      >
        <Menu />
      </button>

      {/* MENU */}
      <nav className="flex-1 space-y-2 px-2">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 w-full py-2 px-3 rounded-lg transition ${
                isActive
                  ? "bg-sky-500 text-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`}
            >
              {item.icon}
              {open && <span>{item.name}</span>}
            </button>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-3 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full bg-sky-500 hover:bg-sky-600 py-2 px-3 rounded-lg"
        >
          <LogOut size={18} />
          {open && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}