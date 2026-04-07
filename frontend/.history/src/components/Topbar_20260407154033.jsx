// export default function Topbar({ dashboard, userName }) {
//   return (
//     <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-sm">

//       {/* LEFT */}
//       <div>
//         <h2 className="text-lg font-semibold">
//           {dashboard?.organizationName || "Dashboard"}
//         </h2>
//         <p className="text-sm text-gray-400">
//           {dashboard?.organizationDetails}
//         </p>
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center gap-3">
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="profile"
//           className="w-10 h-10 rounded-full border border-slate-700"
//         />
//         <span className="font-medium text-gray-200">
//           {userName}
//         </span>
//       </div>
//     </div>
//   );
// }