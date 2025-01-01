"use client";

import { Square, SquareMenu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* // Phone */}
      <div className="relative lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <SquareMenu size={24} className="text-white" />
        </button>

        {isMenuOpen && (
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden absolute top-full left-0  bg-[#FF8383] rounded-lg shadow-lg p-4 flex flex-col gap-2`}
          >
            {routes.map((route) => {
              const isActive =
                pathname === route.href ||
                pathname.startsWith(route.href + "/");

              return (
                <Link
                  href={route.href}
                  key={route.href}
                  className={`${
                    isActive ? "text-[#FFF574] bg-white/20  lg" : "text-white"
                  } font-semibold text-lg hover:bg-white/20  px-4 py-2 rounded-lg block `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center lg:gap-x-16 gap-8">
        {routes.map((route) => {
          const isActive =
            pathname === route.href || pathname.startsWith(route.href + "/");

          return (
            <Link
              href={route.href}
              key={route.href}
              className={`${
                isActive ? "text-[#FFF574] bg-white/20  lg" : "text-white"
              } font-semibold text-lg hover:bg-white/20  px-4 py-2 rounded-lg`}
            >
              {route.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
