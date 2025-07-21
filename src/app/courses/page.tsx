import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function CoursesPage() {
  const { data: courses, error } = await supabase.from("courses").select("id, title, description");
  return (
    <section className="max-w-3xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Courses</h2>
      {error && <p className="text-red-600 mb-4">Failed to load courses.</p>}
      {!courses || courses.length === 0 ? (
        <p className="text-gray-600">No courses available yet.</p>
      ) : (
        <ul className="space-y-6">
          {courses.map((course: any) => (
            <li key={course.id} className="bg-white rounded shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-900">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
              </div>
              <Link href={`/courses/${course.id}`} className="px-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Start Course</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
} 