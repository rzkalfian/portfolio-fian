import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";
import logo from "../../assets/logo.png";

const menus = [
  { label: "Home", to: "/" },
  { label: "Service", to: "/service" },
  { label: "Project", to: "/project" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) => pathname === to;

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-[#0A0A0C] px-6 py-4 md:px-12 md:py-6">
        <div className="mx-auto flex items-center justify-between rounded-full bg-white/8 px-5 py-3 shadow-lg md:px-8 md:py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="FianDev Logo"
              className="h-8 w-8 object-contain md:h-10 md:w-10"
            />
            <h2 className="text-lg font-bold text-white md:text-xl">
              Fian<span className="font-normal">Dev</span>
            </h2>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-12 md:flex">
            <nav>
              <ul className="flex items-center gap-10">
                {menus.map((menu) => (
                  <li key={menu.label}>
                    <Link
                      to={menu.to}
                      style={{
                        color: isActive(menu.to) ? "#014AEB" : "#FFFFFF",
                      }}
                      className={`text-base transition-colors duration-300 ${
                        isActive(menu.to) ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button>Mari Berdiskusi</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center p-1 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-72 bg-[#0A0A0C] shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logo} alt="FianDev Logo" className="h-8 w-8 object-contain" />
            <h2 className="text-lg font-bold text-white">
              Fian<span className="font-normal">Dev</span>
            </h2>
          </Link>
          <button onClick={() => setOpen(false)} aria-label="Tutup menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-8">
          <ul className="space-y-1">
            {menus.map((menu) => (
              <li key={menu.label}>
                <Link
                  to={menu.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-poppins text-base transition-all duration-200 ${
                    isActive(menu.to)
                      ? "bg-[#014AEB]/15 font-semibold text-[#014AEB]"
                      : "font-normal text-white hover:bg-white/5 hover:text-[#014AEB]"
                  }`}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button>Mari Berdiskusi</Button>
          </div>
        </nav>
      </aside>
    </>
  );
}
