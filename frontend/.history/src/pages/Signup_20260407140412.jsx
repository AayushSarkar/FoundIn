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
    <div className="min-h-screen flex bg-gradient-to-br from-sky-50 to-blue-100">

      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 items-center justify-center px-20">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-4">
            Build. Pitch. Grow.
          </h2>
          <p className="text-gray-500 text-lg">
            Join FoundIn and connect with ideas, investors & opportunities
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Create Account
          </h1>
          <p className="text-gray-500 mb-6">
            Start your journey with FoundIn
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* ROLE */}
            <select
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="normal">Normal</option>
              <option value="investor">Investor</option>
              <option value="entrepreneur">Entrepreneur</option>
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                onChange={(e) =>
                  setForm({ ...form, [item.key]: e.target.value })
                }
              />
            ))}

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            {/* ENTREPRENEUR EXTRA */}
            {form.role === "entrepreneur" && (
              <>
                <input
                  placeholder="Organization Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  onChange={(e) =>
                    setForm({ ...form, orgName: e.target.value })
                  }
                />
                <input
                  placeholder="Organization Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  onChange={(e) =>
                    setForm({ ...form, orgEmail: e.target.value })
                  }
                />
              </>
            )}

            {/* BUTTON */}
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-medium transition">
              Sign Up
            </button>
          </form>

          {/* LOGIN */}
          <p className="mt-6 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/" className="text-sky-600 font-medium hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}