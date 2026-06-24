import logo from "../../assets/logo.png";
import { ArrowUp2 } from "iconsax-react";

export default function Footer() {
  const menus = ["Service", "Project", "About", "Contact"];

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0C] px-12 py-8">
      <div className="mx-auto flex items-center justify-between px-10">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="FianDev Logo"
            className="h-10 w-10 object-contain"
          />

          <h2 className="text-xl font-bold text-white">
            Fian<span className="font-normal">Dev</span>
          </h2>
        </a>

        <nav>
          <ul className="flex items-center gap-12">
            {menus.map((menu) => (
              <li key={menu}>
                <a
                  href={`#${menu.toLowerCase()}`}
                  className="text-md font-normal text-white transition hover:text-[#014AEB]"
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#hero"
          className="group flex items-center gap-3 text-md font-normal text-white transition hover:text-[#014AEB]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#014AEB]">
            <ArrowUp2 size="18" color="currentColor" variant="Outline" />
          </div>
        </a>
      </div>
    </footer>
  );
}