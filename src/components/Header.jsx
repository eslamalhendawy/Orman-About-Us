import SideMenu from "./SideMenu";

import logo from "/assets/logoSmall.png";

const Header = () => {
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
  ];
  return (
    <header className="bg-[#222222]">
      <div className="container mx-auto p-4 flex flex-row-reverse justify-between items-center text-white">
        <SideMenu />
        <ul className="flex-row-reverse gap-2 hidden lg:flex">
          {links.map((link) => {
            if (link.index === 1) {
              return (
                <li  key={link.index}>
                  <a className="text-white hover:text-[#fbc22b] duration-200 cursor-pointer" href="#">
                    {link.name}
                  </a>
                </li>
              );
            } else {
              return (
                <li key={link.index} className="flex items-center gap-2">
                  <a href="#" className="text-white hover:text-[#fbc22b] duration-200 cursor-pointer">
                    {link.name}
                  </a>
                  <span className="text-white">|</span>
                </li>
              );
            }
          })}
        </ul>
        <div className="flex flex-row-reverse items-center gap-8">
          <div className="hidden lg:flex flex-row-reverse gap-2 items-center">
            <span className="hover:text-[#fbc22b] duration-200 cursor-pointer text-sm">EN</span>
            <span>|</span>
            <span className="hover:text-[#fbc22b] duration-200 cursor-pointer text-sm">تسجيل دخول</span>
            <div className="relative">
              <i className="fa-solid fa-user hover:text-[#fbc22b] duration-200 cursor-pointer"></i>
              <i className="fa-solid fa-caret-down absolute bottom-0 left-[-15px] text-[#fbc22b] text-sm"></i>
            </div>
          </div>
          <div className="">
            <img className="max-w-[100px]" src={logo} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
