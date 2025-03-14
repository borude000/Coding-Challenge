import { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", address: "", role: "user" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    alert("User Registered");
    navigate("/login");
  };

  return (
    <div className="flex justify-center mt-10">
      <form className="border p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input type="text" name="name" className="border p-2 mb-2 w-full" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" className="border p-2 mb-2 w-full" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" className="border p-2 mb-2 w-full" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
