"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const activities = [
  { title: "AI Assistant", image: "/images/ai-assisstant.svg" },
  { title: "Writing C1", image: "/images/writing.svg" },
  { title: "Grammar B2", image: "/images/reading.svg" },
  { title: "Listening A2", image: "/images/listening.svg" },
  { title: "Writing C2", image: "/images/writing.svg" },
  { title: "Grammar B1", image: "/images/reading.svg" },
  { title: "Listening A1", image: "/images/listening.svg" },
  { title: "Grammar A1", image: "/images/reading.svg" },
];

export default function Activity() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-[#2D4654] px-4 pt-8 pb-28">
        <h1 className="text-white text-2xl font-bold text-center mb-8">
          Browse Activities
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-15">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="relative bg-[#4A787D] rounded-lg flex flex-col h-30 items-center justify-end pt-12 shadow-md"
            >
              {/* Image positioned half above the card */}
              <div className="absolute -top-7">
                <Image
                  src={activity.image}
                  width={80}
                  height={80}
                  alt={activity.title}
                />
              </div>

              {/* Activity text */}
              <div className="bg-white rounded px-3 py-1 mb-4">
                <span className="text-black font-semibold">
                  {activity.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
