import { PiStudent } from "react-icons/pi";
import { VscSymbolClass } from "react-icons/vsc";
import { GiClassicalKnowledge, GiTeacher } from "react-icons/gi";
import { BookOpenText, Calendar, SquareUserRound } from "lucide-react";
import { BarChart } from "lucide-react";
import { MdManageAccounts, MdPayments } from "react-icons/md";
import { SettingsIcon } from "lucide-react";
import { Lock } from "lucide-react";

const NAVIGATION_ITEMS = [
  {
    label: "Dashboard",
    path: "/dashboard",
    badge: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path
          fill="currentColor"
          d="M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z"
        />
      </svg>
    ),
  },

  {
    label: "Class",
    path: "/classes",
    badge: <GiClassicalKnowledge size={20} />,
    subItems: [
      {
        label: "Manage Classes",
        path: "/classes/manageClass",
        badge: <VscSymbolClass size={20} />,
      },

      {
        label: "Manage Section",
        path: "/classes/manageSection",
        badge: <MdManageAccounts size={20} />,
      },
    ],
  },
  {
    label: "Subject",
    path: "/subject",
    badge: <BookOpenText size={20} />,
  },
  {
    label: "Class Routine",
    path: "/classRoutine",
    badge: <Calendar size={20} />,
  },
  {
    label: "Parents",
    path: "/parents",
    badge: <SquareUserRound size={20} />,
  },
  {
    label: "Student Section",
    path: "/students",
    badge: <PiStudent size={20} />,
  },
  {
    label: "Teacher Section",
    path: "/teacherSection",
    badge: <GiTeacher size={20} />,
  },
  {
    label: "Daily Attendance",
    path: "/attendence",
    badge: <BarChart size={20} />,
  },
  { label: "Billing", path: "/billing", badge: <MdPayments size={20} /> },
  { label: "Settings", path: "/settings", badge: <SettingsIcon size={20} /> },
  { label: "Account", path: "/account", badge: <Lock size={18} /> },
];
export default NAVIGATION_ITEMS;
