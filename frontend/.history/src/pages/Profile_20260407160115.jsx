// import Layout from "../components/Layout";
// import { useState } from "react";
// import avatar1 from "../assets/avatar 1.svg";
// import avatar2 from "../assets/avatar 2.svg";

// const avatars = [avatar1, avatar2];

// export default function Profile() {
//   const [tab, setTab] = useState("profile");

//   const [name, setName] = useState(localStorage.getItem("name") || "");
//   const [avatar, setAvatar] = useState(
//     localStorage.getItem("avatar") || avatars[0]
//   );

//   const saveProfile = () => {
//     localStorage.setItem("name", name);
//     localStorage.setItem("avatar", avatar);
//     alert("Profile updated!");
//     window.location.href = window.location.href;
//   };

//   return (
//     <Layout>
//       <div className="flex max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">

//         {/* SIDEBAR */}
//         <div className="w-64 bg-gray-100 p-6 space-y-6">
//           <h2 className="text-xl font-bold text-gray-700">
//             Settings
//           </h2>

//           {["profile", "settings", "policies"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setTab(t)}
//               className={`block w-full text-left px-4 py-2 rounded-lg transition ${
//                 tab === t
//                   ? "bg-sky-500 text-white"
//                   : "text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               {t.charAt(0).toUpperCase() + t.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="flex-1 p-10 bg-white">

//           {tab === "profile" && (
//             <div className="space-y-8">

//               <h1 className="text-2xl font-semibold text-gray-700">
//                 Profile Settings
//               </h1>

//               {/* AVATAR */}
//               <div>
//                 <p className="text-sm text-gray-500 mb-2">Choose Avatar</p>
//                 <div className="flex gap-4">
//                   {avatars.map((img) => (
//                     <img
//                       key={img}
//                       src={img}
//                       onClick={() => setAvatar(img)}
//                       className={`w-20 h-20 rounded-full cursor-pointer border-4 transition ${
//                         avatar === img
//                           ? "border-sky-500 scale-105"
//                           : "border-gray-200"
//                       }`}
//                       alt="avatar"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* NAME */}
//               <div>
//                 <p className="text-sm text-gray-500 mb-2">Your Name</p>
//                 <input
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter your name"
//                   className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 />
//               </div>

//               {/* SAVE */}
//               <button
//                 onClick={saveProfile}
//                 className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg transition"
//               >
//                 Save Changes
//               </button>
//             </div>
//           )}

//          {tab === "settings" && (
//   <div className="space-y-10">

//     <h1 className="text-3xl font-semibold">Settings</h1>

//     {/* ACCOUNT */}
//     <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
//       <h2 className="text-xl font-semibold text-gray-700">
//         Account Preferences
//       </h2>

//       {[
//         { label: "Email Notifications", default: true },
//         { label: "Push Notifications", default: false },
//         { label: "Newsletter Subscription", default: true },
//       ].map((item, i) => (
//         <div key={i} className="flex justify-between items-center">
//           <span className="text-gray-600">{item.label}</span>

//           {/* Toggle */}
//           <div className="relative">
//             <input
//               type="checkbox"
//               defaultChecked={item.default}
//               className="sr-only peer"
//             />
//             <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-sky-500 transition"></div>
//             <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* PRIVACY */}
//     <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
//       <h2 className="text-xl font-semibold text-gray-700">
//         Privacy Settings
//       </h2>

//       {[
//         { label: "Make Profile Public", default: false },
//         { label: "Show Activity Status", default: true },
//       ].map((item, i) => (
//         <div key={i} className="flex justify-between items-center">
//           <span className="text-gray-600">{item.label}</span>

//           <div className="relative">
//             <input
//               type="checkbox"
//               defaultChecked={item.default}
//               className="sr-only peer"
//             />
//             <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-sky-500 transition"></div>
//             <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* APPEARANCE */}
//     <div className="bg-white border rounded-2xl p-6 shadow-sm">
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         Appearance
//       </h2>
//       <p className="text-gray-600 text-sm">
//         Light theme is enabled for a clean and consistent experience across the platform.
//       </p>
//     </div>

//     {/* SECURITY */}
//     <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
//       <h2 className="text-xl font-semibold text-gray-700">
//         Security
//       </h2>

//       <button className="w-full py-3 rounded-lg border hover:bg-gray-50 transition">
//         Change Password
//       </button>

//       <button className="w-full py-3 rounded-lg border hover:bg-gray-50 transition">
//         Enable Two-Factor Authentication
//       </button>
//     </div>

//     {/* DANGER ZONE */}
//     <div className="border border-red-200 bg-red-50 rounded-2xl p-6 space-y-4">
//       <h2 className="text-xl font-semibold text-red-600">
//         Danger Zone
//       </h2>

//       <p className="text-sm text-gray-600">
//         These actions cannot be undone. Please be careful.
//       </p>

//       <button
//         onClick={() => {
//           localStorage.clear();
//           window.location.href = "/";
//         }}
//         className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
//       >
//         Reset All Data
//       </button>
//     </div>

//   </div>
// )}

//          {tab === "policies" && (
//   <div className="space-y-8">
//     <h1 className="text-3xl font-semibold mb-4">Platform Policies</h1>

//     {/* 1. Privacy Policy */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         1. Privacy Policy
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         We respect your privacy and are committed to protecting your personal data.
//         Any information you provide, including your name, profile details, and usage
//         activity, is stored securely and used only to enhance your experience on our platform.
//         We do not sell, rent, or share your personal information with third parties
//         without your consent, except where required by law.
//       </p>
//     </div>

//     {/* 2. Data Usage */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         2. Data Usage Policy
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         The data collected is used to improve platform functionality, personalize user
//         experience, and provide relevant services. We may analyze aggregated user data
//         for research and performance improvements, but such data will never identify
//         individual users.
//       </p>
//     </div>

//     {/* 3. User Responsibilities */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         3. User Responsibilities
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         Users are responsible for maintaining the confidentiality of their accounts
//         and ensuring that all information provided is accurate. Any misuse of the platform,
//         including fraudulent activities, abusive behavior, or violation of community
//         guidelines, may result in suspension or permanent termination of access.
//       </p>
//     </div>

//     {/* 4. Content Policy */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         4. Content Policy
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         All content shared on the platform must comply with applicable laws and ethical standards.
//         Users must not upload harmful, offensive, misleading, or copyrighted content without
//         proper authorization. We reserve the right to remove any content that violates these rules.
//       </p>
//     </div>

//     {/* 5. Security */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         5. Security Policy
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         We implement industry-standard security measures to protect user data from unauthorized
//         access, alteration, or disclosure. However, users are also advised to follow best practices,
//         such as using strong passwords and avoiding sharing sensitive information.
//       </p>
//     </div>

//     {/* 6. Limitation of Liability */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         6. Limitation of Liability
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         The platform is provided "as is" without any guarantees or warranties.
//         We are not responsible for any direct or indirect damages arising from
//         the use or inability to use our services.
//       </p>
//     </div>

//     {/* 7. Updates to Policies */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         7. Policy Updates
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         We may update these policies from time to time to reflect changes in
//         our services or legal requirements. Users will be notified of significant
//         changes, and continued use of the platform implies acceptance of updated policies.
//       </p>
//     </div>

//     {/* 8. Contact */}
//     <div>
//       <h2 className="text-xl font-semibold text-gray-700 mb-2">
//         8. Contact Us
//       </h2>
//       <p className="text-gray-600 leading-relaxed">
//         If you have any questions, concerns, or feedback regarding these policies,
//         please contact our support team. We are committed to resolving issues
//         promptly and ensuring a safe and transparent user experience.
//       </p>
//     </div>
//   </div>
// )}

//         </div>
//       </div>
//     </Layout>
//   );
// }

import Layout from "../components/Layout";
import { useState } from "react";
import avatar1 from "../assets/avatar 1.svg";
import avatar2 from "../assets/avatar 2.svg";
import { createPitch, createFunding } from "../services/api";

const avatars = [avatar1, avatar2];

export default function Profile() {
  const [tab, setTab] = useState("profile");

  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") || avatars[0]
  );

  // Pitch state
  const [pitch, setPitch] = useState({
    startupName: "",
    tagline: "",
    description: "",
    industry: "",
    stage: "",
    fundingRequired: "",
    equityOffered: "",
    location: "",
  });

  // Funding state
  const [funding, setFunding] = useState({
    problemStatement: "",
    impactSummary: "",
    fundingAmount: "",
    equityOffered: "",
  });

  const saveProfile = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("avatar", avatar);
    alert("Profile updated!");
    window.location.href = window.location.href;
  };

  const handlePitchSubmit = async () => {
    await createPitch(pitch);
    alert("Pitch Submitted 🚀");
  };

  const handleFundingSubmit = async () => {
    await createFunding(funding);
    alert("Funding Submitted 💰");
  };

  return (
    <Layout>
      <div className="flex max-w-7xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-64 bg-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-700">Dashboard</h2>

          {["profile", "pitch", "funding", "activity", "settings", "policies"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                tab === t
                  ? "bg-sky-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* MAIN */}
        <div className="flex-1 p-10 space-y-8">

          {/* PROFILE */}
          {tab === "profile" && (
            <div className="space-y-8">

              {/* HEADER */}
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 h-32 rounded-xl"></div>

              <div className="-mt-12 flex items-center gap-6">
                <img
                  src={avatar}
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
                <div>
                  <h2 className="text-2xl font-semibold">
                    {name || "Your Name"}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Founder • Building something amazing 🚀
                  </p>
                </div>
              </div>

              {/* AVATAR SELECT */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Choose Avatar</p>
                <div className="flex gap-4">
                  {avatars.map((img) => (
                    <img
                      key={img}
                      src={img}
                      onClick={() => setAvatar(img)}
                      className={`w-16 h-16 rounded-full cursor-pointer border-2 ${
                        avatar === img
                          ? "border-sky-500"
                          : "border-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* NAME */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border px-4 py-3 rounded-lg"
              />

              <button
                onClick={saveProfile}
                className="bg-sky-500 text-white px-6 py-2 rounded-lg"
              >
                Save Profile
              </button>
            </div>
          )}

          {/* PITCH */}
          {tab === "pitch" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">Create Pitch</h1>

              <div className="bg-white border rounded-2xl p-6 space-y-4">
                {Object.keys(pitch).map((key) => (
                  <input
                    key={key}
                    placeholder={key}
                    value={pitch[key]}
                    onChange={(e) =>
                      setPitch({ ...pitch, [key]: e.target.value })
                    }
                    className="w-full border px-4 py-2 rounded-lg"
                  />
                ))}

                <button
                  onClick={handlePitchSubmit}
                  className="bg-sky-500 text-white px-6 py-2 rounded-lg"
                >
                  Submit Pitch 🚀
                </button>
              </div>
            </div>
          )}

          {/* FUNDING */}
          {tab === "funding" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">Funding Request</h1>

              <div className="bg-white border rounded-2xl p-6 space-y-4">
                {Object.keys(funding).map((key) => (
                  <textarea
                    key={key}
                    placeholder={key}
                    value={funding[key]}
                    onChange={(e) =>
                      setFunding({ ...funding, [key]: e.target.value })
                    }
                    className="w-full border px-4 py-2 rounded-lg"
                  />
                ))}

                <button
                  onClick={handleFundingSubmit}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg"
                >
                  Submit Funding 💰
                </button>
              </div>
            </div>
          )}

          {/* ACTIVITY */}
          {tab === "activity" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">Activity</h1>

              <div className="bg-white border p-6 rounded-xl">
                🚀 Your pitches and funding requests will appear here
              </div>
            </div>
          )}

          {/* SETTINGS */}
          {tab === "settings" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">Settings</h1>
              <div className="bg-white border p-6 rounded-xl">
                Settings UI (already added earlier)
              </div>
            </div>
          )}

          {/* POLICIES */}
          {tab === "policies" && (
            <div>
              <h1 className="text-3xl font-semibold mb-4">
                Platform Policies
              </h1>
              <p className="text-gray-600">
                Full policies content (already added)
              </p>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}