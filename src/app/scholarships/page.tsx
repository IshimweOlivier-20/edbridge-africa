import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function ScholarshipsPage() {
  const { data: scholarships, error } = await supabase.from("scholarships").select("id, title, country, deadline");
  return (
    <section className="max-w-3xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-yellow-700">Scholarships</h2>
      {error && <p className="text-red-600 mb-4">Failed to load scholarships.</p>}
      {!scholarships || scholarships.length === 0 ? (
        <p className="text-gray-600">No scholarships available yet.</p>
      ) : (
        <ul className="space-y-6">
          {scholarships.map((sch: any) => (
            <li key={sch.id} className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-900">{sch.title}</h3>
                <p className="text-gray-700">{sch.country} • Deadline: {sch.deadline}</p>
              </div>
              <Link href={`/scholarships/${sch.id}`} className="px-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
} 