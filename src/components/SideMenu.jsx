import { useState } from "react";
import Drawer from "@mui/material/SwipeableDrawer";

const SideMenu = () => {
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };

  const links = [
    {
      name: "طرق أخرى للتبرع",
      index: 1,
    },
    {
      name: "حسابتنا في البنوك",
      index: 2,
    },
    {
      name: "فروعنا",
      index: 3,
    },
    {
      name: "تسجيل الدخول",
      index: 4,
    },
    {
      name: "EN",
      index: 5,
    },
  ];
  return (
    <div className="lg:hidden">
      <i onClick={toggleMenu(true)} className="fa-solid fa-bars text-lg text-white hover:text-[#FFC107] duration-300 cursor-pointer"></i>
      <Drawer anchor="right" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col p-3 relative bg-[#222222]">
          <div className="text-2xl text-white hover:text-[#FFC107] duration-300 mb-6">
            <i className="fa-solid fa-x" onClick={toggleMenu(false)}></i>
          </div>
          <ul className="text-right space-y-3">
            {links.map((link) => {
              return (
                <li key={link.index} className="text-lg font-semibold">
                  <a className="text-white hover:text-[#fbc22b] duration-200 cursor-pointer" href="#">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default SideMenu;
