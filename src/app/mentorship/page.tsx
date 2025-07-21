import ProtectedRoute from "@/components/ProtectedRoute";

export default function MentorshipPage() {
  return (
    <ProtectedRoute>
      <section className="max-w-3xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6 text-pink-700">Mentorship</h2>
        <div className="bg-white rounded shadow p-6 mb-8">
          <h3 className="text-xl font-semibold mb-2">Find a Mentor</h3>
          <p className="text-gray-700 mb-4">Request guidance from experienced mentors to help you with your academic journey and applications.</p>
          <button className="px-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Request a Mentor (Coming Soon)</button>
        </div>
        <div className="bg-white rounded shadow p-6 mb-8">
          <h3 className="text-xl font-semibold mb-2">Become a Mentor</h3>
          <p className="text-gray-700 mb-4">Share your expertise and support refugee students. Sign up as a mentor today!</p>
          <button className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Sign Up as Mentor (Coming Soon)</button>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Discussion Board</h3>
          <p className="text-gray-700 mb-4">Join real-time discussions with mentors and students. (Coming soon)</p>
          <button className="px-5 py-2 bg-gray-400 text-white rounded" disabled>Open Discussion Board</button>
        </div>
      </section>
    </ProtectedRoute>
  );
} 