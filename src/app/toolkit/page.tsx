import ProtectedRoute from "@/components/ProtectedRoute";

export default function ToolkitPage() {
  return (
    <ProtectedRoute>
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-8 text-purple-700">Application Toolkit</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Essay Builder</h3>
            <p className="text-gray-600 mb-4 text-center">Write and save your application essays. (Coming soon)</p>
            <button className="px-4 py-2 bg-blue-700 text-white rounded" disabled>Open Essay Builder</button>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Document Checklist</h3>
            <p className="text-gray-600 mb-4 text-center">Track your required documents and deadlines. (Coming soon)</p>
            <button className="px-4 py-2 bg-blue-700 text-white rounded" disabled>View Checklist</button>
          </div>
          <div className="bg-white rounded shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">File Uploads</h3>
            <p className="text-gray-600 mb-4 text-center">Upload and manage your application files. (Coming soon)</p>
            <button className="px-4 py-2 bg-blue-700 text-white rounded" disabled>Upload Files</button>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
} 