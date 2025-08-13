"use client";

import { BookOpen, Award, Headphones, Edit2, ArrowRight } from "lucide-react";

const iconMap = {
  cerf: Award,
  activity: {
    listening: Headphones,
    reading: BookOpen,
    writing: Edit2,
  },
};

const CourseCard = ({ title, subtitle, tags, onStart }) => {
  return (
    <div className="bg-[#4A787D] rounded-lg p-4 relative w-full mt-5 flex flex-col justify-between shadow-md">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white text-sm mt-1">{subtitle}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => {
          let Icon;
          if (tag.type === "cerf") Icon = iconMap.cerf;
          else Icon = iconMap.activity[tag.label.toLowerCase()] || BookOpen;

          return (
            <div
              key={index}
              className="flex items-center gap-1 bg-[#477AC2] text-white px-2 py-1 rounded text-xs"
            >
              <Icon size={14} />
              <span>{tag.label}</span>
            </div>
          );
        })}
      </div>

      {/* Start Button */}
      <button
        onClick={onStart}
        className="absolute bottom-3 right-3 bg-[#01CB63] text-white px-3 py-1 flex gap-x-4 w-1/4 rounded font-semibold justify-items-center items-center"
      >
        Start
         <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default CourseCard;
