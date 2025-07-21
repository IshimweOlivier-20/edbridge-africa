import Link from "next/link";

export default function ScholarshipDetailPage({ params }: { params: { id: string } }) {
  // In real app, fetch scholarship by params.id
  return (
    <section className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-yellow-700">Scholarship Title (Mock)</h2>
      <div className="mb-6">
        <p className="text-gray-700 mb-2">Country: <span className="font-medium">Multiple</span></p>
        <p className="text-gray-700 mb-4">Deadline: <span className="font-medium">2024-09-01</span></p>
        <p className="text-gray-700 mb-4">Eligibility and application instructions go here. This is a mock page for scholarship ID: <span className="font-mono">{params.id}</span></p>
        <button className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Apply Now (Coming Soon)</button>
      </div>
      <Link href="/scholarships" className="text-yellow-700 hover:underline">← Back to Scholarships</Link>
    </section>
  );
} 