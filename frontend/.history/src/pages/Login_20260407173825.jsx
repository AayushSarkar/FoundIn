import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    password: form.password,
    ...(form.identifier.includes("@")
      ? { email: form.identifier }
      : { username: form.identifier }),
  };

  try {
    const res = await loginUser(payload);

    console.log("LOGIN:", res); // debug

    localStorage.setItem("token", res.token);
    localStorage.setItem("role", res.user.role);
    localStorage.setItem("name", res.user.name);
    localStorage.setItem("username", res.user.username);

    navigate("/dashboard"); // or "/profile"
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 px-6">

    {/* TOP HEADING */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-2">
        Welcome Back 👋
      </h1>
      <p className="text-gray-500 text-lg">
        Sign in to continue your journey with FoundIn
      </p>
    </div>

    {/* CARD */}
    <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Sign In
      </h2>

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
);
}