export default function PromoCard() {
  return (
    <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-6 rounded-lg shadow flex flex-col justify-between">
      <div>
        <div className="bg-white text-red-600 w-fit px-3 py-1 rounded-full text-xs mb-3">NEW</div>
        <h3 className="text-lg font-semibold mb-2">We have added new invoicing templates!</h3>
        <p className="text-sm text-red-100">New templates focused on helping you improve your business</p>
      </div>
      <button className="mt-6 bg-white text-red-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-100 transition">
        Download Now
      </button>
    </div>
  );
}
