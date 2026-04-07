import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      password: form.password,
      ...(form.identifier.includes("@")
        ? { email: form.identifier }
        : { username: form.identifier })
    };

    try {
      const res = await API.post("/auth/login", payload);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("name", res.data.user.name);
      localStorage.setItem("username", res.data.user.username);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-sky-50 to-blue-100">

      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 items-center justify-center px-20">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 text-lg max-w-md">
            Continue building your startup journey with FoundIn
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Sign In
          </h1>
          <p className="text-gray-500 mb-6">
            Access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Email or Username"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              onChange={(e) =>
                setForm({ ...form, identifier: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-medium transition">
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-sky-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}