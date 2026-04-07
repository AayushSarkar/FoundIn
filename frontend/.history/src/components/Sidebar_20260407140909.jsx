import { useState } from "react";

export default function Sidebar({ role, activeTab, setActiveTab, handleLogout }) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-white border-r shadow-sm transition-all duration-300 flex flex-col`}
    >
      {/* TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 text-left text-gray-500 hover:text-gray-800"
      >
        ☰
      </button>

      {/* MENU */}
      <nav className="flex-1 space-y-2 px-4">

        <button
          onClick={() => setActiveTab("explore")}
          className={`w-full text-left py-2 px-3 rounded-lg transition ${
            activeTab === "explore"
              ? "bg-sky-100 text-sky-600"
              : "hover:bg-gray-100"
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
                  ? "bg-sky-100 text-sky-600"
                  : "hover:bg-gray-100"
              }`}
            >
              Pitch Deck
            </button>

            <button
              onClick={() => setActiveTab("analysis")}
              className={`w-full text-left py-2 px-3 rounded-lg ${
                activeTab === "analysis"
                  ? "bg-sky-100 text-sky-600"
                  : "hover:bg-gray-100"
              }`}
            >
              Analysis
            </button>
          </>
        )}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t">
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