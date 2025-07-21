import Link from "next/link";

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // In real app, fetch course by params.id
  return (
    <section className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Course Title (Mock)</h2>
      <div className="mb-6">
        <div className="aspect-video bg-gray-200 flex items-center justify-center rounded mb-4">
          <span className="text-gray-500">[Video Placeholder]</span>
        </div>
        <p className="text-gray-700 mb-4">Course description and learning objectives go here. This is a mock page for course ID: <span className="font-mono">{params.id}</span></p>
        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Mark as Complete</button>
      </div>
      <Link href="/courses" className="text-blue-700 hover:underline">← Back to Courses</Link>
    </section>
  );
} 