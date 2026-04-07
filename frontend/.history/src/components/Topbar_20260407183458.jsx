import { useNavigate } from "react-router-dom";

export default function Topbar({ dashboard, userName }) {
  const navigate = useNavigate();

  const avatar =
    localStorage.getItem("avatar") || "https://i.pravatar.cc/40";

  // ✅ SAFE DATA EXTRACTION
  const orgName = dashboard?.organizationName ;

  const orgDetails =
    typeof dashboard?.organizationDetails === "string"
      ? dashboard.organizationDetails
      : dashboard?.organizationDetails?.shortDescription ||
        "Welcome to your dashboard";

  return (
    <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-sm">

      {/* LEFT */}
      <div>
        <h2 className="text-lg font-semibold">
          {orgName}
        </h2>

        <p className="text-sm text-gray-400">
          {orgDetails}
        </p>
      </div>

      {/* RIGHT (CLICKABLE PROFILE) */}
      <div
        onClick={() => navigate("/profile")}
        className="flex items-center gap-3 cursor-pointer px-2 py-1 rounded-lg hover:bg-slate-800 transition"
      >
        <img
          src={avatar}
          alt="profile"
          className="w-10 h-10 rounded-full border border-slate-700"
        />

        <span className="font-medium text-gray-200">
          {userName || "User"}
        </span>
      </div>
    </div>
  );
}