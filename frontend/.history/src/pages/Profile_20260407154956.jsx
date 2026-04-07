import Layout from "../components/Layout";
import { useState } from "react";
import avatar1 from "../assets/avatar 1.svg";
import avatar2 from "../assets/avatar 2.svg";

const avatars = [avatar1, avatar2];

export default function Profile() {
  const [tab, setTab] = useState("profile");

  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") || avatars[0]
  );

  const saveProfile = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("avatar", avatar);
    alert("Profile updated!");
    window.location.href = window.location.href;
  };

  return (
    <Layout>
      <div className="flex max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-64 bg-gray-100 p-6 space-y-6">
          <h2 className="text-xl font-bold text-gray-700">
            Settings
          </h2>

          {["profile", "settings", "policies"].map((t) => (
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

        {/* MAIN CONTENT */}
        <div className="flex-1 p-10 bg-white">

          {tab === "profile" && (
            <div className="space-y-8">

              <h1 className="text-2xl font-semibold text-gray-700">
                Profile Settings
              </h1>

              {/* AVATAR */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Choose Avatar</p>
                <div className="flex gap-4">
                  {avatars.map((img) => (
                    <img
                      key={img}
                      src={img}
                      onClick={() => setAvatar(img)}
                      className={`w-20 h-20 rounded-full cursor-pointer border-4 transition ${
                        avatar === img
                          ? "border-sky-500 scale-105"
                          : "border-gray-200"
                      }`}
                      alt="avatar"
                    />
                  ))}
                </div>
              </div>

              {/* NAME */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Your Name</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* SAVE */}
              <button
                onClick={saveProfile}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg transition"
              >
                Save Changes
              </button>
            </div>
          )}

          {tab === "settings" && (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Settings</h1>
              <p className="text-gray-500">More settings coming soon...</p>
            </div>
          )}

         {tab === "policies" && (
  <div className="space-y-8">
    <h1 className="text-3xl font-semibold mb-4">Platform Policies</h1>

    {/* 1. Privacy Policy */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        1. Privacy Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We respect your privacy and are committed to protecting your personal data.
        Any information you provide, including your name, profile details, and usage
        activity, is stored securely and used only to enhance your experience on our platform.
        We do not sell, rent, or share your personal information with third parties
        without your consent, except where required by law.
      </p>
    </div>

    {/* 2. Data Usage */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        2. Data Usage Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        The data collected is used to improve platform functionality, personalize user
        experience, and provide relevant services. We may analyze aggregated user data
        for research and performance improvements, but such data will never identify
        individual users.
      </p>
    </div>

    {/* 3. User Responsibilities */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        3. User Responsibilities
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Users are responsible for maintaining the confidentiality of their accounts
        and ensuring that all information provided is accurate. Any misuse of the platform,
        including fraudulent activities, abusive behavior, or violation of community
        guidelines, may result in suspension or permanent termination of access.
      </p>
    </div>

    {/* 4. Content Policy */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        4. Content Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        All content shared on the platform must comply with applicable laws and ethical standards.
        Users must not upload harmful, offensive, misleading, or copyrighted content without
        proper authorization. We reserve the right to remove any content that violates these rules.
      </p>
    </div>

    {/* 5. Security */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        5. Security Policy
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We implement industry-standard security measures to protect user data from unauthorized
        access, alteration, or disclosure. However, users are also advised to follow best practices,
        such as using strong passwords and avoiding sharing sensitive information.
      </p>
    </div>

    {/* 6. Limitation of Liability */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="text-gray-600 leading-relaxed">
        The platform is provided "as is" without any guarantees or warranties.
        We are not responsible for any direct or indirect damages arising from
        the use or inability to use our services.
      </p>
    </div>

    {/* 7. Updates to Policies */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        7. Policy Updates
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We may update these policies from time to time to reflect changes in
        our services or legal requirements. Users will be notified of significant
        changes, and continued use of the platform implies acceptance of updated policies.
      </p>
    </div>

    {/* 8. Contact */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        8. Contact Us
      </h2>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions, concerns, or feedback regarding these policies,
        please contact our support team. We are committed to resolving issues
        promptly and ensuring a safe and transparent user experience.
      </p>
    </div>
  </div>
)}

        </div>
      </div>
    </Layout>
  );
}