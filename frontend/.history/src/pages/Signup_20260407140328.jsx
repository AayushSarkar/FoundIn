import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    role: "normal",
    username: "",
    name: "",
    email: "",
    password: "",
    orgName: "",
    orgEmail: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      role: form.role,
      username: form.username,
      name: form.name,
      email: form.email,
      password: form.password,
      organization:
        form.role === "entrepreneur"
          ? { name: form.orgName, email: form.orgEmail }
          : undefined
    };

    try {
      await API.post("/auth/register", payload);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 items-center justify-center px-20 text-white">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Build 🚀 <br /> Pitch 💡 <br /> Grow 📈
          </h2>
          <p className="text-blue-200 text-lg">
            Join the next generation startup ecosystem with FoundIn
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-white mb-2">
            Create Account
          </h1>
          <p className="text-blue-200 mb-6">
            Start your journey with FoundIn
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* ROLE */}
            <select
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option className="text-black" value="normal">Normal</option>
              <option className="text-black" value="investor">Investor</option>
              <option className="text-black" value="entrepreneur">Entrepreneur</option>
            </select>

            {/* INPUTS */}
            {[
              { placeholder: "Username", key: "username" },
              { placeholder: "Full Name", key: "name" },
              { placeholder: "Email", key: "email" }
            ].map((item) => (
              <input
                key={item.key}
                placeholder={item.placeholder}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) =>
                  setForm({ ...form, [item.key]: e.target.value })
                }
              />
            ))}

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            {/* ENTREPRENEUR EXTRA */}
            {form.role === "entrepreneur" && (
              <>
                <input
                  placeholder="Organization Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>
                    setForm({ ...form, orgName: e.target.value })
                  }
                />
                <input
                  placeholder="Organization Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>
                    setForm({ ...form, orgEmail: e.target.value })
                  }
                />
              </>
            )}

            {/* BUTTON */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-lg">
              Sign Up
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="mt-6 text-sm text-center text-blue-200">
            Already have an account?{" "}
            <Link to="/" className="text-white font-semibold hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}