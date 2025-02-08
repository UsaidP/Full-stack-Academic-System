import { SquareUserRound } from "lucide-react";
import { BarChart } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import { Lock } from "lucide-react";
import { House } from "lucide-react";
import { SlCalender } from "react-icons/sl";
import { TimerIcon } from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrDocumentCloud, GrScorecard } from "react-icons/gr";
import { HotelIcon } from "lucide-react";
import { TbClipboardSearch } from "react-icons/tb";
import { MdPayments } from "react-icons/md";

export let size;
const NAVIGATION_ITEMS = [
  {
    label: "Home",
    path: "/home",

    badge: <House size={size} />,
  },

  {
    label: "My Calender",
    path: "/calender",
    badge: <SlCalender size={size} />,
  },
  {
    label: "Time Table",
    path: "/timetable",
    badge: <TimerIcon size={size} />,
  },
  {
    label: "My Faculty",
    path: "/faculty",
    badge: <FaPeopleGroup size={size} />,
  },
  {
    label: "Examination",
    path: "/examination",
    badge: <SquareUserRound size={size} />,
    subItems: [
      {
        label: "Examination Result",
        path: "/examination/result",
        badge: <GrScorecard size={size} />,
      },

      {
        label: "Apply For Rechacking ",
        path: "/examination/rechecking",
        badge: <TbClipboardSearch size={size} />,
      },
    ],
  },
  {
    label: "Student Document",
    path: "/document",
    badge: <GrDocumentCloud size={size} />,
  },
  {
    label: "ATPC Placement ",
    path: "/placement",
    badge: <HotelIcon size={size} />,
  },
  {
    label: "Fee Details",
    path: "/fee",
    badge: <BarChart size={size} />,
  },
  { label: "Billing", path: "/billing", badge: <MdPayments size={size} /> },
  { label: "Settings", path: "/settings", badge: <SettingsIcon size={size} /> },
  { label: "Account", path: "/account", badge: <Lock size={size} /> },
];
export default NAVIGATION_ITEMS;
