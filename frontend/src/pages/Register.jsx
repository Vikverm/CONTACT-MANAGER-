import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

import toast from "react-hot-toast";

const Register = () => {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange =
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {

        await API.post(
          "/auth/register",
          formData
        );

        toast.success(
          "Account created"
        );

        navigate(
          "/login"
        );

      } catch (
        error
      ) {
        toast.error(
          "Registration failed"
        );
      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 p-4">

      <div className="bg-white rounded-[30px] p-10 shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Register
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <button className="w-full bg-blue-600 text-white p-4 rounded-2xl font-semibold">
            Register
          </button>

        </form>

        <p className="text-center mt-5">
          Already have account?
          {" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;