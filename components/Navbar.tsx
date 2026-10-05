"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    label: "Product",
    href: "#product",
  },
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Planning",
    href: "#planning",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="px-5 pt-5 sm:px-8 lg:px-10">
      <nav className="mx-auto max-w-7xl rounded-full border border-[#dde1d8] bg-[#f6f7f2]/90 px-4 py-3 backdrop-blur-md sm:px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-[-0.04em]"
          >
            fermor<span className="text-[#183D2B]">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6c716a] transition-colors hover:text-[#11140f]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#get-started"
              className="hidden items-center gap-1 rounded-full bg-[#99F89B] px-4 py-2.5 text-sm font-medium text-[#11140f] transition-all hover:scale-[1.02] hover:bg-[#8EE690] sm:flex"
            >
              Get started
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dde1d8] md:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#dde1d8] pt-4 md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-[#6c716a] transition-colors hover:bg-white hover:text-[#11140f]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#get-started"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-1 rounded-full bg-[#99F89B] px-4 py-3 text-sm font-medium text-[#11140f] transition-colors hover:bg-[#8EE690]"
              >
                Get started
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}