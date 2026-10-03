import { useState } from "react";
import emailsjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailsjs
      .send(
        "service_yczohze",
        "template_czn8egt",
        formData,
        "yso0lAmV6VK8EsAns",
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  }
  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-center text-4xl font-bold text-white">
        Get in Touch
      </h1>
      <p className="mt-4 text-center text-gray-400">
        Have a project in mind? Send us a message below.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project"
          required
          rows={5}
          className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-3 font-semibold text-black hover:from-amber-400 hover:to-yellow-500 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-green-400">
            Message sent. We'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div className="mt-12 border-t border-gray-800 pt-10 text-center">
        <p className="text-sm text-gray-400">Or connect with us directly</p>
        <div className="mt-5 flex justify-center gap-6 text-sm font-medium text-gray-300">
          <a
            href="mailto:ephvexstudios@gmail.com"
            className="hover:text-amber-400"
          >
            Email
          </a>
          <a
            href="https://wa.me/2347083957294"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/ephvexstudios?stkn=NGVraGtiZXNjeG5h"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-emmanuel-3ba507423?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
