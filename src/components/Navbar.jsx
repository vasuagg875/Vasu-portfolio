import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-max -translate-x-1/2 sm:top-5">
      <div className="flex items-center gap-5 rounded-full border border-[#332E2A]/10 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-md sm:gap-7 sm:px-7">

        <a
          href="#home"
          className="text-xs font-semibold tracking-[-0.02em] sm:text-sm"
        >
          Vasu Aggarwal
        </a>

        <span className="h-4 w-px bg-[#332E2A]/15" />

        {/* Desktop */}
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs opacity-55 transition-opacity hover:opacity-100"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-[#332E2A]/15 sm:hidden"
          aria-label="Open menu"
        >
          <span className="text-sm">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute right-0 top-14 w-48 rounded-2xl border border-[#332E2A]/10 bg-[#F7F3EA] p-5 shadow-lg sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;