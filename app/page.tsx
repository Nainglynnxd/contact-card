"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <article className="bg-black w-1/4 m-auto py-4 rounded-md text-white">
      <h3 className="text-center text-2xl font-bold">Contact Us</h3>
      <form className="px-8 my-4" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="block w-full py-2 bg-transparent focus:outline-none"
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="block w-full py-2 bg-transparent focus:outline-none"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="block w-full py-2 bg-transparent focus:outline-none"
        />

        <div className="flex justify-center gap-8 *:border-2 *:rounded-lg *:px-4 *:py-2 mt-3">
          <button type="submit" className="bg-white text-black">
            Submit
          </button>
          <button>Cancel</button>
        </div>
      </form>
    </article>
  );
}
