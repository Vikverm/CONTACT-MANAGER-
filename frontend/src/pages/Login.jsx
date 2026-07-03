import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";
import bgImage from "../assets/auth-bg.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Card */}
      <div
        className="relative z-10 w-full max-w-md rounded-[30px] p-10 shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.90)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-4 rounded-2xl font-semibold">
            Login
          </button>
        </form>

        <p className="text-center mt-5">
          Don't have account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;