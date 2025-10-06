"use client";
import { useState } from "react";
import { Button } from "./base";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xqaylopz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message: `New waitlist signup from: ${email}`,
          _subject: "New Droppa Waitlist Signup",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-green-800 font-semibold mb-2">Welcome to the waitlist!</h3>
        <p className="text-green-600">Check your email for confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <Button
          type="submit"
          color="dark"
          label={status === "loading" ? "Joining..." : "Try out Droppa"}
          disabled={status === "loading"}
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}