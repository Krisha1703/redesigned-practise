"use client";
import { useState } from "react";
import CourseCard from "@/components/course-card";

export default function Main() {
  const [cerfLevel, setCerfLevel] = useState("");
  const [activityType, setActivityType] = useState("");
  const [course, setCourse] = useState("");

  // List of all courses
  const courses = [
    {
      title: "English Practice",
      subtitle: "Improve your reading & listening skills",
      tags: [
        { type: "cerf", label: "B1" },
        { type: "activity", label: "Reading" },
      ],
      courseType: "english",
    },
    {
      title: "Listening Challenge",
      subtitle: "Enhance your listening comprehension",
      tags: [
        { type: "cerf", label: "A2" },
        { type: "activity", label: "Listening" },
      ],
      courseType: "english",
    },
    {
      title: "Writing Skills",
      subtitle: "Practice writing short essays",
      tags: [
        { type: "cerf", label: "B2" },
        { type: "activity", label: "Writing" },
      ],
      courseType: "english",
    },
    {
      title: "Speaking Practice",
      subtitle: "Improve your spoken English fluency",
      tags: [
        { type: "cerf", label: "C1" },
        { type: "activity", label: "Speaking" },
      ],
      courseType: "english",
    },
    {
      title: "Vocabulary Builder",
      subtitle: "Learn new words efficiently",
      tags: [
        { type: "cerf", label: "B1" },
        { type: "activity", label: "Reading" },
      ],
      courseType: "english",
    },
    {
      title: "Grammar Mastery",
      subtitle: "Strengthen your grammar skills",
      tags: [
        { type: "cerf", label: "B2" },
        { type: "activity", label: "Writing" },
      ],
      courseType: "english",
    },
  ];

  // Filter courses based on selected dropdowns
  const filteredCourses = courses.filter((c) => {
    const matchesCerf =
      !cerfLevel || c.tags.some((t) => t.type === "cerf" && t.label === cerfLevel);
    const matchesActivity =
      !activityType ||
      c.tags.some((t) => t.type === "activity" && t.label.toLowerCase() === activityType.toLowerCase());
    const matchesCourse = !course || c.courseType === course;

    return matchesCerf && matchesActivity && matchesCourse;
  });

  return (
    <main className="min-h-screen bg-[#2D4654] flex flex-col overflow-y-auto px-4 pb-20">
      {/* Heading */}
      <h1 className="text-white text-2xl font-bold text-center my-8">
        Browse and practise-activities
      </h1>

      {/* Dropdowns */}
      <div className="flex justify-between w-full mb-6">
        {/* CERF Level */}
        <select
          value={cerfLevel}
          onChange={(e) => setCerfLevel(e.target.value)}
          className="bg-[#4A787D] text-white px-3 py-4 rounded focus:outline-none"
        >
          <option value="" >
            CERF Level
          </option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
        </select>

        {/* Activity Type */}
        <select
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
          className="bg-[#4A787D] text-white px-3 py-4 rounded focus:outline-none"
        >
          <option value="" >
            Activity Type
          </option>
          <option value="reading">Reading</option>
          <option value="writing">Writing</option>
          <option value="listening">Listening</option>
          <option value="speaking">Speaking</option>
        </select>

        {/* Course */}
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="bg-[#4A787D] text-white px-3 py-4 rounded focus:outline-none"
        >
          <option value="" >
            Course
          </option>
          <option value="english">English</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
        </select>
      </div>

      {/* Course Cards */}
      <div className="flex-1 overflow-y-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredCourses.map((course, idx) => (
            <CourseCard
              key={idx}
              title={course.title}
              subtitle={course.subtitle}
              tags={course.tags}
              onStart={() => console.log(`Start ${course.title}`)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
