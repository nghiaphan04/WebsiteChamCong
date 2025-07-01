
import EmployeeCard from "../../../components/EmployeeCard";


const dummyData = [
  {
    name: "Ronald Richards",
    role: "Project Manager",
    email: "Ronald_Ri...@gmail.com",
    phone: "+1-202-555-0129",
    status: "Đã nghỉ",
    dateOfJoin: "2022-01-01",
    dateOfBirth: "1990-01-01",

  },
  {
    name: "Cameron Williamson",
    role: "UI Designer",
    email: "Ronald_Ri...@gmail.com",
    phone: "+1-202-555-0129",
    status: "Đang làm",
    dateOfJoin: "2022-01-01",
    dateOfBirth: "1990-01-01",
  },
  {
    name: "Savannah Nguyen",
    role: "Back End Developer",
    email: "Ronald_Ri...@gmail.com",
    phone: "+1-202-555-0129",
    status: "Đang làm",
    dateOfJoin: "2022-01-01",
    dateOfBirth: "1990-01-01",
  },
  {
    name: "Savannah Nguyen",
    role: "Back End Developer",
    email: "Ronald_Ri...@gmail.com",
    phone: "+1-202-555-0129",
    status: "Đang làm",
    dateOfJoin: "2022-01-01",
    dateOfBirth: "1990-01-01",
  },
  {
    name: "Savannah Nguyen",
    role: "Back End Developer",
    email: "Ronald_Ri...@gmail.com",
    phone: "+1-202-555-0129",
    status: "Đang làm",
    dateOfJoin: "2022-01-01",
    dateOfBirth: "1990-01-01",
  },
  {
    name: "Savannah Nguyen",
    role: "Back End Developer",
    email: "Ronald_Ri...@gmail.com",
    phone: "+1-202-555-0129",
    status: "Đang làm",
    dateOfJoin: "2022-01-01",
    dateOfBirth: "1990-01-01",
  },

];

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1 h-[calc(100vh-200px)] p-2 overflow-y-scroll scrollbar-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyData.map((emp, i) => (
            <EmployeeCard key={i} {...emp} />
            ))}
        </div>
        </div>
    </div>
  );
}
