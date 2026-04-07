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
    <div className="min-h-screen flex">
      
      {/* LEFT */}
       <div className="hidden lg:flex w-1/2 bg-linear-to-br from-teal-800 to-teal-600 text-white items-center justify-center px-20">
        <h2 className="text-4xl font-semibold">
          Build • Pitch • Grow
        </h2>
      </div>
     

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
          <p className="text-gray-500 mb-8">
            Join Entre and start your journey
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="normal">Normal</option>
              <option value="investor">Investor</option>
              <option value="entrepreneur">Entrepreneur</option>
            </select>

            <input
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <input
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            {form.role === "entrepreneur" && (
              <>
                <input
                  placeholder="Organization Name"
                  className="w-full px-4 py-3 border rounded-lg"
                  onChange={(e) =>
                    setForm({ ...form, orgName: e.target.value })
                  }
                />
                <input
                  placeholder="Organization Email"
                  className="w-full px-4 py-3 border rounded-lg"
                  onChange={(e) =>
                    setForm({ ...form, orgEmail: e.target.value })
                  }
                />
              </>
            )}

            <button className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition">
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center">
            Already have an account?{" "}
            <Link to="/" className="text-teal-700 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
