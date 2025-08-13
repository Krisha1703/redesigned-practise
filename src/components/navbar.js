"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 py-6 border-b bg-[#4A787D] shadow-sm relative">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-white"
      >
        <ArrowLeft size={20} />
      </button>

      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white">
        Practise
      </h1>

      <div className="w-16" />
    </nav>
  );
}
