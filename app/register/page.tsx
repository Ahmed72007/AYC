"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occupation: "",
    age: "",
    married: "No",
    email: "",
    interest: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // For now, just log the data
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); // hide confirmation after 4s
    setFormData({
      name: "",
      phone: "",
      occupation: "",
      age: "",
      married: "No",
      email: "",
      interest: "",
      location: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-[#FAFAFA] py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-10">
          <h1 className="text-4xl font-black mb-6 text-center text-zinc-900">
            Registration Form
          </h1>
          <p className="text-center text-zinc-600 mb-8">
            Fill out the form below to join Al-Shams Youth Circle
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <select
              name="married"
              value={formData.married}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            >
              <option value="No">Not Married</option>
              <option value="Yes">Married</option>
            </select>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <input
              type="text"
              name="interest"
              placeholder="Interests"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />

            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 text-white text-lg font-semibold rounded-2xl hover:bg-emerald-700 transition"
            >
              Submit
            </button>
          </form>

          {submitted && (
            <div className="mt-6 text-center text-green-600 font-medium">
              ✅ Thank you! Your registration has been received.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}