import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <section className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">My Dashboard</h2>
        <p className="mb-4">Welcome back! Here is your learning progress:</p>
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">Digital Literacy Basics</span>
            <span className="text-sm text-gray-600">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-blue-700 h-3 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">English Proficiency</span>
            <span className="text-sm text-gray-600">40%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>
        <div className="mt-8">
          <button className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Download Certificate (Coming Soon)</button>
        </div>
      </section>
    </ProtectedRoute>
  );
} 