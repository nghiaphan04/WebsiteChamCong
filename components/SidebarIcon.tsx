import { MessageCircle, Bell, Gift, Settings } from "lucide-react";

const icons = [
  { icon: <MessageCircle className="w-3 h-3 text-blue-600" />, count: 53, bg: "bg-blue-100", badge: "bg-blue-500" },
  { icon: <Bell className="w-3 h-3 text-blue-500" />, count: 21, bg: "bg-blue-100", badge: "bg-sky-500" },
  { icon: <Gift className="w-3 h-3 text-indigo-800" />, count: 15, bg: "bg-gray-100", badge: "bg-indigo-800" },
  { icon: <Settings className="w-3 h-3 text-red-600" />, count: 19, bg: "bg-red-100", badge: "bg-red-500" },
];

export default function SidebarIcons() {
  return (
    <div className="flex mx-3 absolute bottom-0 left-0 flex-col items-start gap-4 p-4">
      {icons.map((item, index) => (
        <div key={index} className={`relative p-3 rounded-xl cu ${item.bg}`}>
          {item.icon}
          <span
            className={`absolute -top-2 -right-2 text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center ${item.badge}`}
          >
            {item.count}
          </span>
        </div>
      ))}
    </div>
  );
}
