import { ChevronDown } from "lucide-react";

const NavigationItem = ({ label, badge, isExpanded, onClick, hasSubItems }) => (
  <div
    onClick={onClick}
    className="flex justify-between bg-fedral_blue-800 py-2 px-4 rounded hover:bg-ultraLight-500 transition-colors"
  >
    <div className="flex items-center gap-2">
      {badge && <div className="text-light_cyan-500">{badge}</div>}
      <div className="font-semibold text-light_cyan-500">{label}</div>
    </div>
    {hasSubItems && (
      <ChevronDown
        className={`transition-transform duration-300 ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    )}
  </div>
);
export default NavigationItem;
