import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const { data, error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    // Insert profile (user_type, name) after sign up
    const user = data.user || data.session?.user;
    if (user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        { id: user.id, name, user_type: Number(userType), email },
      ]);
      if (profileError) {
        setError(profileError.message);
        return;
      }
    }
    router.push("/dashboard");
  }

  return (
    <section className="max-w-md mx-auto mt-16 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Register</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" className="border rounded px-3 py-2" required value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="border rounded px-3 py-2" required value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border rounded px-3 py-2" required value={password} onChange={e => setPassword(e.target.value)} />
        <select className="border rounded px-3 py-2" required value={userType} onChange={e => setUserType(e.target.value)}>
          <option value="">Select Role</option>
          <option value="1">Admin</option>
          <option value="2">Student</option>
          <option value="3">Mentor</option>
          <option value="4">Teacher</option>
        </select>
        <button type="submit" className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Register</button>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account? <Link href="/login" className="text-blue-700 hover:underline">Login</Link>
      </p>
    </section>
  );
} 