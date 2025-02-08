import { useState } from "react";
import { ChevronFirst, ChevronLast, LogOut } from "lucide-react";
import NavItems from "./NavItems";
import NavigationItem from "./NavigationItem";

const AdminNavbar = () => {
  const [expanded, setExpanded] = useState("");
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    if (isSidebarCollapsed) {
      setHoveredItem(item);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleExpand = (path) => {
    setExpanded(expanded === path ? "" : path);
  };

  return (
    <aside
      className={`flex flex-col transition-all justify-between duration-300 rounded-lg min-h-full shadow-neutral-900 shadow-lg text-left bg-fedral_blue-900 text-light_cyan-500 ${
        isSidebarCollapsed ? "w-32 items-center" : "w-96"
      }`}
    >
      {/* Header */}
      <div className="p-5 flex flex-col">
        <div
          className={`flex items-center ${
            isSidebarCollapsed ? " justify-center" : "justify-between"
          }`}
        >
          {!isSidebarCollapsed && (
            <a href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="logo" width={50} height={50} />
            </a>
          )}
          <button
            className="bg-fedral_blue-800 rounded p-1.5 cursor-pointer transition-colors  hover:bg-ultraLight-500 text-light_cyan-500"
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? (
              <ChevronLast width={25} height={25} />
            ) : (
              <ChevronFirst width={25} height={25} />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col cursor-pointer space-y-2 p-6">
          {NavItems.map((item) => (
            <div
              key={item.path}
              className="relative w-11/12"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationItem
                label={isSidebarCollapsed ? "" : item.label}
                badge={item.badge}
                path={item.path}
                size={isSidebarCollapsed ? 20 : 20}
                isExpanded={expanded === item.path}
                onClick={() => toggleExpand(item.path)}
                hasSubItems={item.subItems?.length > 0}
              />

              {/* Item Tooltip */}
              {isSidebarCollapsed && hoveredItem === item && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-fedral_blue-800 text-light_cyan-500 text-sm px-3 py-2 rounded-md shadow-lg z-50 whitespace-nowrap">
                  {item.label}
                </div>
              )}

              {/* Subitems */}
              {item.subItems && (
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expanded === item.path ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item.subItems.map((subItem) => (
                    <div
                      key={subItem.path}
                      className="relative ml-4 mt-2"
                      onMouseEnter={() => handleMouseEnter(subItem)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavigationItem
                        label={!isSidebarCollapsed ? subItem.label : ""}
                        badge={subItem.badge}
                        path={subItem.path}
                      />
                      {/* Subitem Tooltip */}
                      {isSidebarCollapsed && hoveredItem === subItem && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-fedral_blue-800 text-light_cyan-500 text-sm px-3 py-2 rounded-md shadow-lg z-50 whitespace-nowrap">
                          {subItem.label}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div
        className="flex px-5 mb-5 bordor items-center justify-center"
        onMouseEnter={() => handleMouseEnter({ label: "Logout" })}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`flex items-center gap-2 bg-fedral_blue-800 hover:bg-ultraLight-500 cursor-pointer transition-colors p-2 rounded ${
            isSidebarCollapsed ? "w-10 justify-center" : "w-1/3"
          }`}
        >
          <LogOut width={20} height={20} className="text-light_cyan-500" />
          {!isSidebarCollapsed && <span>Logout</span>}
        </button>

        {/* Logout Tooltip */}
        {isSidebarCollapsed && hoveredItem?.label === "Logout" && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-fedral_blue-800 text-light_cyan-500 text-sm px-3 py-2 rounded-md shadow-lg z-50 whitespace-nowrap">
            Logout
          </div>
        )}
      </div>
    </aside>
  );
};

export default AdminNavbar;
