import Layout from "../components/Layout";
import { useState } from "react";

const avatars = [
  "https://i.pravatar.cc/100?img=1",
  "https://i.pravatar.cc/100?img=2",
  "https://i.pravatar.cc/100?img=3",
  "https://i.pravatar.cc/100?img=4",
];

export default function Profile() {
  const [tab, setTab] = useState("profile");

  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") || avatars[0]
  );

  const saveProfile = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("avatar", avatar);
    alert("Profile updated");
  };

  return (
    <Layout>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">

        {/* TABS */}
        <div className="flex gap-6 border-b pb-3 mb-6">
          {["profile", "settings", "policies"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "text-sky-600 font-semibold" : "text-gray-500"}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "profile" && (
          <div className="space-y-6">

            <div className="flex gap-4">
              {avatars.map((img) => (
                <img
                  key={img}
                  src={img}
                  onClick={() => setAvatar(img)}
                  className={`w-16 h-16 rounded-full cursor-pointer ${
                    avatar === img ? "ring-2 ring-sky-500" : ""
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
              Save Changes
            </button>
          </div>
        )}

        {tab === "settings" && (
          <p className="text-gray-500">Theme settings coming soon...</p>
        )}

        {tab === "policies" && (
          <p className="text-gray-500">Platform policies content here.</p>
        )}

      </div>

    </Layout>
  );
}