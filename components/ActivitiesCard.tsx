export default function ActivitiesCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <h3 className="font-semibold text-lg mb-2">Activities</h3>
      <div className="text-sm">
        <span className="text-green-600 font-medium">New Invoice</span>: Francisco Gibbs created invoice <strong>PQ-4491C</strong> — <span className="text-gray-400">Just now</span>
      </div>
      <div className="text-sm">
        <span className="text-red-500 font-medium">Reminder</span>: Invoice JL-3432B sent to <strong>Chester Corp</strong> — <span className="text-gray-400">Friday, 12:59PM</span>
      </div>
    </div>
  );
}
