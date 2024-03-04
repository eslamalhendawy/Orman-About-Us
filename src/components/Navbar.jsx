import { useState } from "react"
import logo from "/assets/logoMedium.png"

const Navbar = () => {
  const [selected, setSelected] = useState("about");
  const links = [
    {
      index: 1,
      name: "الصفحة الرئيسية",
      link: "home"
    },
    {
      index: 2,
      name: "أنشطة الأورمان",
      link: "activities"
    },
    {
      index: 3,
      name: "عن الأورمان",
      link: "about"
    },
    {
      index: 4,
      name: "أخبارنا",
      link: "news"
    },
  ]
  return (
    <nav className='container mx-auto flex flex-col md:flex-row-reverse gap-4 items-center justify-between p-4'>
      <div className="hidden lg:block">
        <img src={logo} alt="logo" className="max-w-[200px]" />
      </div>
      <ul className="flex flex-row-reverse justify-center items-center gap-4">
        {links.map((link) => {
          return (
            <li onClick={() => setSelected(link.link)} className={`font-medium text-[14px] sm:text-[16px] lg:text-[18px] py-1 text-[#222222] text-center w-fit ${selected === link.link ? "border-b-2 border-[#FFC107]" : "border-b-2 border-white"}`} key={link.index}>
              <a href="#">{link.name}</a>
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col items-stretch gap-2">
        <div className="flex flex-row-reverse items-center gap-4">
          <span className="font-bold text-[20px] lg:text-[24px] text-[#343A40] border-[3px] border-[#FFC107] py-1 px-4 rounded-3xl">حقق الحلم</span>
          <span className="font-bold text-[20px] lg:text-[24px] text-[#343A40] border-[3px] border-[#FFC107] py-1 px-4 rounded-3xl">اتبرع الان</span>
        </div>
        <div className="border-[3px] border-[#FFC107] py-1 flex items-center justify-center gap-2 font-bold text-[20px] lg:text-[24px] text-[#343A40] rounded-3xl">
          <span>احسب زكاتك</span>
          <i className="fa-solid fa-calculator"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar