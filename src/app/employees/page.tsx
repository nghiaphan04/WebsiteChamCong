'use client'
import EmployeeCard from "../../../components/EmployeeCard";
import { motion } from 'framer-motion';

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
    <div className="flex ">
      <div className="flex-1 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyData.map((emp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <EmployeeCard {...emp} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
