import { useEffect, useState } from "react";
import Button from "../common/Button";
import logo from "../../assets/logo.png";

export default function Header() {
  const menus = ["Home", "Service", "Project", "About", "Contact"];
  const [activeMenu, setActiveMenu] = useState("Home");

  const getSectionId = (menu: string) => {
    return menu.toLowerCase() === "home" ? "hero" : menu.toLowerCase();
  };

  useEffect(() => {
    const updateActiveMenu = () => {
      const currentHash = window.location.hash.replace("#", "");

      if (!currentHash || currentHash === "hero") {
        setActiveMenu("Home");
        return;
      }

      const currentMenu = menus.find(
        (menu) => getSectionId(menu) === currentHash,
      );

      if (currentMenu) {
        setActiveMenu(currentMenu);
      }
    };

    updateActiveMenu();

    window.addEventListener("hashchange", updateActiveMenu);

    return () => {
      window.removeEventListener("hashchange", updateActiveMenu);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#0A0A0C] px-12 py-4">
      <div className="mx-auto flex items-center justify-between rounded-full bg-white/8 px-10 py-6 shadow-lg">
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

        <div className="flex items-center gap-12">
          <nav>
            <ul className="flex items-center gap-10">
              {menus.map((menu) => (
                <li key={menu}>
                  <a
                    href={`#${getSectionId(menu)}`}
                    onClick={() => setActiveMenu(menu)}
                    style={{
                      color: activeMenu === menu ? "#014AEB" : "#FFFFFF",
                    }}
                    className={`text-md transition-colors duration-300${
                      activeMenu === menu ? "font-semibold" : "font-regular"
                    }`}
                  >
                    {menu}
                  </a>
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
