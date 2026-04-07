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
import { useState, useEffect } from "react";
import avatar1 from "../assets/avatar 1.svg";
import avatar2 from "../assets/avatar 2.svg";
import {
  createPitch,
  createFunding,
  getPitches,
  getFundings,
} from "../services/api";

const avatars = [avatar1, avatar2];

export default function Profile() {
  const [tab, setTab] = useState("profile");

  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") || avatars[0]
  );

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

  const [funding, setFunding] = useState({
    problemStatement: "",
    impactSummary: "",
    fundingAmount: "",
    equityOffered: "",
  });

  const [pitches, setPitches] = useState([]);
  const [fundings, setFundings] = useState([]);

  useEffect(() => {
    getPitches().then(setPitches);
    getFundings().then(setFundings);
  }, []);

  const saveProfile = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("avatar", avatar);
    alert("Profile updated!");
    window.location.reload();
  };

  const handlePitchSubmit = async () => {
    await createPitch(pitch);
    alert("Pitch Submitted 🚀");
    window.location.reload();
  };

  const handleFundingSubmit = async () => {
    await createFunding(funding);
    alert("Funding Submitted 💰");
    window.location.reload();
  };

  return (
    <Layout>
      <div className="flex max-w-7xl mx-auto mt-0 bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-64 bg-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-700">Profile</h2>

          {["profile", "Change avatar", "policies"].map((t) => (
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
        <div className="flex-1 p-10 space-y-2">

         {tab === "profile" && (
  <div className="space-y-10">

    {/* 🔷 HEADER */}
    <div className="relative bg-linear-to-rfrom-slate-800 via-slate-700 to-slate-900 h-40 rounded-2xl shadow-lg">
      <div className="absolute -bottom-12 left-10 flex items-center gap-6">
        <img
          src={avatar}
          className="w-28 h-28 rounded-full border-4 border-white shadow-md"
        />
        <div className="text-white">
          <h2 className="text-2xl font-semibold">
            {name || "Your Name"}
          </h2>
          <p className="text-sm opacity-90">
            Founder • Building something amazing 🚀
          </p>
        </div>
      </div>
    </div>

    {/* spacing after overlap */}
    <div className="h-10"></div>

    {/* 🚀 PITCH SECTION */}
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        🚀 Your Pitch
      </h2>

      {pitches.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {pitches.map((p) => (
            <div
              key={p._id}
              className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {p.startupName}
              </h3>

              <p className="text-sky-600 text-sm font-medium">
                {p.tagline}
              </p>

              <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                {p.description}
              </p>

              <div className="flex justify-between mt-4 text-sm font-medium">
                <span className="text-green-600">
                  💰 ₹{p.fundingRequired}
                </span>
                <span className="text-gray-700">
                  Equity: {p.equityOffered}%
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {Object.keys(pitch).map((key) => (
            <input
              key={key}
              placeholder={key}
              value={pitch[key]}
              onChange={(e) =>
                setPitch({ ...pitch, [key]: e.target.value })
              }
              className="w-full border px-4 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          ))}

          <button
            onClick={handlePitchSubmit}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
          >
            Submit Pitch
          </button>
        </>
      )}
    </div>

    {/* 💰 FUNDING SECTION */}
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        💰 Funding Rounds
      </h2>

      {fundings.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {fundings.map((f) => (
            <div
              key={f._id}
              className="rounded-2xl p-6 bg-gradient-to-br from-white to-blue-50 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* HEADER */}
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-gray-800 text-sm leading-snug">
                  {f.problemStatement}
                </h2>

                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full whitespace-nowrap">
                  {f.fundingStage || "Idea"}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                {f.impactSummary}
              </p>

              {/* FUNDING */}
              <div className="flex justify-between text-sm mb-4 font-medium">
                <span className="text-green-600">
                  ₹ {f.fundingAmount}
                </span>
                <span className="text-gray-700">
                  Equity: {f.equityOffered}%
                </span>
              </div>

              {/* EXTRA INFO */}
              <div className="text-xs text-gray-400 space-y-1 mb-3">
                <p>👥 Team: {f.teamSize || "N/A"}</p>
                <p>⏳ Timeline: {f.expectedTimeline || "N/A"}</p>
              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-3">
                {f.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white border px-3 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 text-xs font-medium text-blue-600">
                <a href={f.links?.website} target="_blank">Website</a>
                <a href={f.links?.linkedin} target="_blank">LinkedIn</a>
                <a href={f.links?.github} target="_blank">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {Object.keys(funding).map((key) => (
            <textarea
              key={key}
              placeholder={key}
              value={funding[key]}
              onChange={(e) =>
                setFunding({ ...funding, [key]: e.target.value })
              }
              className="w-full border px-4 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-green-400 outline-none"
            />
          ))}

          <button
            onClick={handleFundingSubmit}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
          >
            Submit Funding
          </button>
        </>
      )}
    </div>
  </div>
)}

          {/* SETTINGS */}
          {tab === "Change avatar" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">Change Avatar</h1>

              <div className="bg-white border p-6 rounded-xl space-y-4">
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

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg"
                />

                <button
                  onClick={saveProfile}
                  className="bg-sky-500 text-white px-6 py-2 rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {tab === "policies" && (
  <div className="space-y-8">
    <h1 className="text-3xl font-semibold mb-4">
      Platform Policies
    </h1>

    {/* 1 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        1. Privacy Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We respect your privacy and are committed to protecting your personal data.
        Any information you provide is stored securely and used only to enhance your experience.
        We do not share your data without your consent.
      </p>
    </div>

    {/* 2 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        2. Data Usage Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Data is used to improve platform functionality and personalize your experience.
        Aggregated data may be used for analysis but never identifies individuals.
      </p>
    </div>

    {/* 3 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        3. User Responsibilities
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Users must maintain account security and provide accurate information.
        Misuse may lead to suspension.
      </p>
    </div>

    {/* 4 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        4. Content Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Content must follow ethical and legal standards.
        Harmful or misleading content is not allowed.
      </p>
    </div>

    {/* 5 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        5. Security Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We use industry-standard security practices.
        Users should also use strong passwords.
      </p>
    </div>

    {/* 6 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Platform is provided as-is without guarantees.
      </p>
    </div>

    {/* 7 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        7. Policy Updates
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Policies may change over time.
      </p>
    </div>

    {/* 8 */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        8. Contact Us
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Contact support for any queries.
      </p>
    </div>
  </div>
)}
        </div>
      </div>
    </Layout>
  );
}