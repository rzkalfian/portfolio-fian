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

  const isActive = (to: string) => pathname === to;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#0A0A0C] px-12 py-6">
      <div className="mx-auto flex items-center justify-between rounded-full bg-white/8 px-8 py-4 shadow-lg">
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

        <div className="flex items-center gap-12">
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
      </div>
    </header>
  );
}
