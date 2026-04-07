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
    indow.location.reload();
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
            <div>
              <h1 className="text-2xl font-semibold mb-4">Policies</h1>
              <p className="text-gray-500">
                Platform policies content here.
              </p>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}