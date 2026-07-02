import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ArrowUp2 } from "iconsax-react";

const menus = [
  { label: "Service", to: "/service" },
  { label: "Project", to: "/project" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0C] px-6 py-8 md:px-12">
      <div className="mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="FianDev Logo"
            className="h-10 w-10 object-contain"
          />

          <h2 className="text-xl font-bold text-white">
            Fian<span className="font-normal">Dev</span>
          </h2>
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {menus.map((menu) => (
              <li key={menu.label}>
                <Link
                  to={menu.to}
                  className="text-md font-normal text-white transition hover:text-[#014AEB]"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 text-md font-normal text-white transition hover:text-[#014AEB]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#014AEB]">
            <ArrowUp2 size="18" color="currentColor" variant="Outline" />
          </div>
        </button>
      </div>
    </footer>
  );
}