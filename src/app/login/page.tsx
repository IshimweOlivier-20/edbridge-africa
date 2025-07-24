"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push("/dashboard");
  }

  return (
    <section className="max-w-md mx-auto mt-16 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Login</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="border rounded px-3 py-2" required value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border rounded px-3 py-2" required value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Login</button>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don&apos;t have an account? <Link href="/register" className="text-blue-700 hover:underline">Register</Link>
      </p>
    </section>
  );
} 