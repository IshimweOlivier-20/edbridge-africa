import Link from "next/link";

const featuredCourses = [
  {
    id: 1,
    title: "Digital Literacy Basics",
    description: "Learn essential computer and internet skills for academic and daily life.",
    href: "/courses/1",
  },
  {
    id: 2,
    title: "English Proficiency",
    description: "Improve your English for university applications and study.",
    href: "/courses/2",
  },
];

const scholarships = [
  {
    id: 1,
    title: "UNHCR Refugee Scholarship",
    country: "Multiple",
    deadline: "2024-09-01",
    href: "/scholarships/1",
  },
  {
    id: 2,
    title: "DAFI Scholarship",
    country: "Rwanda",
    deadline: "2024-08-15",
    href: "/scholarships/2",
  },
];

export default function Home() {
  return (
    <section className="flex flex-col gap-12 items-center justify-center min-h-[60vh] text-center">
      <div>
        <h2 className="text-4xl font-bold mb-2 text-blue-800">Welcome to EdBridge Africa</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          Empowering refugee students to access higher education through digital skills, academic support, and application guidance.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <Link href="/login" className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Login</Link>
          <Link href="/register" className="px-6 py-2 bg-white border border-blue-700 text-blue-700 rounded hover:bg-blue-50 transition">Register</Link>
        </div>
      </div>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Featured Courses */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Featured Courses</h3>
          <ul className="space-y-4">
            {featuredCourses.map(course => (
              <li key={course.id} className="text-left">
                <Link href={course.href} className="block group">
                  <span className="text-lg font-medium text-blue-900 group-hover:underline">{course.title}</span>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/courses" className="inline-block mt-4 text-blue-700 hover:underline">View all courses →</Link>
        </div>

        {/* Scholarship Highlights */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-700">Scholarship Highlights</h3>
          <ul className="space-y-4">
            {scholarships.map(sch => (
              <li key={sch.id} className="text-left">
                <Link href={sch.href} className="block group">
                  <span className="text-lg font-medium text-blue-900 group-hover:underline">{sch.title}</span>
                  <p className="text-gray-600 text-sm">{sch.country} • Deadline: {sch.deadline}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/scholarships" className="inline-block mt-4 text-yellow-700 hover:underline">See all scholarships →</Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/toolkit" className="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Application Toolkit</Link>
        <Link href="/mentorship" className="px-5 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">Mentorship</Link>
        <Link href="/dashboard" className="px-5 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition">My Dashboard</Link>
      </div>

      {/* About/Mission */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 mt-8">
        <h4 className="text-xl font-semibold mb-2 text-blue-700">Our Mission</h4>
        <p className="text-gray-700">
          EdBridge Africa is dedicated to bridging the gap for refugee students by providing access to quality education, mentorship, and resources needed to succeed in higher education and beyond.
        </p>
      </div>
    </section>
  );
}
