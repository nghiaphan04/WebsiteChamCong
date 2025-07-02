
import Image from "next/image";

export default function EmployeeDetail() {
  return (

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
     
          <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-center">
            <Image src="/avt.jpg" alt="Doctor" className="rounded-sm" width={100} height={100} />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Prof. Dr. Daniel Leon
              </h2>
              <p className="text-sm text-gray-500">Specialist: Anesthesiologist</p>
              <div className="mt-2 space-x-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                  Consultant
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Surgeon
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

 
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Total Patient", value: "1,250" },
              { label: "Total Staff", value: "250" },
              { label: "Total Room", value: "180" },
              { label: "Total Doctor", value: "120" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow text-center p-4"
              >
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

    
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Latest Patients Data
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">#</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["01", "Angelica Monica", "USA", "Female"],
                  ["02", "Stavelin Genicy", "England", "Male"],
                  ["03", "Allen Humanlyfe", "USA", "Female"],
                  ["04", "Marcus Fisconcells", "Germany", "Male"],
                  ["05", "Muhammed Fatih", "India", "Male"],
                ].map(([id, name, country, gender], i) => (
                  <tr key={i} className="border-b text-gray-800">
                    <td className="py-2">{id}</td>
                    <td>{name}</td>
                    <td>{country}</td>
                    <td>{gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right section: Calendar + appointments */}
        <div className="space-y-6">
          {/* Calendar */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">December 2021</h3>
            <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className="font-semibold">{d}</div>
              ))}
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isToday = day === 13;
                return (
                  <div
                    key={i}
                    className={`p-2 rounded-full ${
                      isToday
                        ? "bg-indigo-600 text-white font-semibold"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Appointment Cards */}
          <div className="space-y-4">
            {[
              {
                title: "Heart Surgeon",
                time: "10:00 - 11:30",
                doctor: "Dr. Alexandre Melin Ibrahimlin",
              },
              {
                title: "Medicine Benefit",
                time: "13:00 - 15:00",
                doctor: "Dr. Henry Alhernayan",
                highlight: true,
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl shadow ${
                  item.highlight
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm">{item.time}</p>
                <p className="text-xs">{item.doctor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}
