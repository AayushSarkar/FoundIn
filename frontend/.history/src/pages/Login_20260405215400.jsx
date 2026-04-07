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

  // ✅ ADD THESE
  localStorage.setItem("name", res.data.user.name);
  localStorage.setItem("username", res.data.user.username);

  navigate("/dashboard");
} catch (err) {
  alert(err.response?.data?.message || "Login failed");
}

  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT */}
      
      <div className="hidden lg:flex w-1/2 bg-linear-to-br from-teal-800 to-teal-600 text-white items-center justify-center px-20">
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Revolutionize Startups with Entre
          </h2>
          <p className="opacity-90 max-w-md">
            Smart collaboration for founders and investors to grow faster.
          </p>
        </div>
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/2 flex items-center justify-center px-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-2">Welcome Back!</h1>
          <p className="text-gray-500 mb-8">
            Sign in to access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              onChange={(e) =>
                setForm({ ...form, identifier: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition">
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-teal-700 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      

    </div>
  );
}
