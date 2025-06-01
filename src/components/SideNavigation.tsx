import React from "react";
import { Diamond, Dot } from "lucide-react";

interface SideNavigationProps {
  sections: string[];
  currentSection: number;
  onSectionClick: (index: number) => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({
  sections,
  currentSection,
  onSectionClick,
}) => {
  return (
    <div className="fixed right-1 top-3/4 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-1">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => onSectionClick(index)}
            className="group relative flex items-center justify-center w-8 h-8 transition-all duration-300 hover:scale-110"
            aria-label={`Navigate to ${section}`}
          >
            {currentSection === index ? (
              <Diamond
                size={16}
                className="text-[#E0790B] fill-[#E0790B] dark:text-purple-500 dark:fill-purple-500 animate-scale-in"
              />
            ) : (
              <Dot
                size={30}
                className="group-hover:text-[#E0790B] text-gray-400 dark:text-[#FFFFF4] dark:group-hover:text-purple-400 transition-colors duration-200"
              />
            )}
            <div className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {section}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
