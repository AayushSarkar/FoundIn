import { useState } from "react";

export default function Sidebar({ role, activeTab, setActiveTab, handleLogout }) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-slate-900 text-white transition-all duration-300 flex flex-col`}
    >
      {/* TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 text-left text-gray-400 hover:text-white"
      >
        ☰
      </button>

      {/* MENU */}
      <nav className="flex-1 space-y-2 px-4">

        <button
          onClick={() => setActiveTab("explore")}
          className={`w-full text-left py-2 px-3 rounded-lg transition ${
            activeTab === "explore"
              ? "bg-sky-500 text-white"
              : "hover:bg-slate-800 text-gray-300"
          }`}
        >
          Explore
        </button>

        {role === "entrepreneur" && (
          <>
            <button
              onClick={() => setActiveTab("pitch")}
              className={`w-full text-left py-2 px-3 rounded-lg ${
                activeTab === "pitch"
                  ? "bg-sky-500 text-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`}
            >
              Pitch Deck
            </button>

            <button
              onClick={() => setActiveTab("analysis")}
              className={`w-full text-left py-2 px-3 rounded-lg ${
                activeTab === "analysis"
                  ? "bg-sky-500 text-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`}
            >
              Analysis
            </button>
          </>
        )}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}