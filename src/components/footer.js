"use client";
import { usePathname, useRouter } from "next/navigation";
import { Home, BookOpen, Dumbbell, User } from "lucide-react";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname(); // current URL

  const menus = [
    { name: "home", label: "Home", icon: Home, url: "/home" },
    { name: "courses", label: "Courses", icon: BookOpen, url: "/" },
    { name: "practices", label: "Practices", icon: Dumbbell, url: "/activities" },
    { name: "profile", label: "Profile", icon: User, url: "/profile" },
  ];

  const handleClick = (menu) => {
    router.push(menu.url);
  };

  return (
    <footer className="fixed bottom-0 w-full p-2 pt-5 border-b bg-[#4A787D] border-t shadow-inner">
      <div className="flex justify-between px-6 py-2">
        {menus.map((menu) => {
          const Icon = menu.icon;
          // Determine active menu based on current URL
          const isActive =
            (menu.url === "/" && pathname === "/") ||
            pathname.startsWith(menu.url) && menu.url !== "/" ||
            (menu.name === "courses" && pathname === "/"); 

          return (
            <div
              key={menu.name}
              className={`flex flex-col items-center space-y-3 cursor-pointer ${
                isActive ? "text-[#01CB63]" : "text-white"
              }`}
              onClick={() => handleClick(menu)}
            >
              <Icon size={24} />
              <span className="text-sm">{menu.label}</span>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
