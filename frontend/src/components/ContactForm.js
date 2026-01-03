import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/contacts";

export default function ContactForm({ onContactAdded }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = (fieldValues = form) => {
    const temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Name is required";

    if ("phone" in fieldValues)
      temp.phone = fieldValues.phone ? "" : "Phone number is required";

    if ("email" in fieldValues) {
      if (!fieldValues.email)
        temp.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(fieldValues.email))
        temp.email = "Enter a valid email address";
      else temp.email = "";
    }

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate({ [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await axios.post(API_URL, form);
      setSuccess("Contact added successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      onContactAdded();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.name &&
    form.phone &&
    /\S+@\S+\.\S+/.test(form.email);

  return (
    <form onSubmit={submitHandler}>
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className={errors.name ? "input-error" : ""}
      />
      {errors.name && <small className="error">{errors.name}</small>}

      <input
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className={errors.email ? "input-error" : ""}
      />
      {errors.email && <small className="error">{errors.email}</small>}

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className={errors.phone ? "input-error" : ""}
      />
      {errors.phone && <small className="error">{errors.phone}</small>}

      <textarea
        name="message"
        placeholder="Message (optional)"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit" disabled={!isFormValid || loading}>
        {loading ? "Saving..." : "Add Contact"}
      </button>

      {success && <p className="success">{success}</p>}
    </form>
  );
}
