import FooterForm from "./FooterForm";

import logo from "/assets/logoFooter.png";

const Footer = () => {
  const listItems = ["الاسئلة الشائعة", "الحسابات البنكية للجمعية", "طرق التبرع", "شركاء النجاح", "اخبارنا", "فروعنا"];
  return (
    <footer className="bg-[#222222]">
      <div className="container mx-auto text-white flex flex-col lg:flex-row-reverse lg:items-center md:justify-between gap-4 p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <img className="max-w-[180px] md:max-w-[250px]" src={logo} alt="" />
            </div>
            <p className="text-center">جمعية خيرية مصرية مقيدة برقم803 مركزية عام 1993</p>
          </div>
          <div className="flex items-center gap-1 text-3xl md:text-5xl font-bold">
            <i className="fa-solid fa-phone"></i>
            <span>19455</span>
          </div>
          <div className="flex items-center gap-2 text-[#D9D9D9]">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="text-center lg:text-right">
          <h4 className="text-white font-bold text-xl mb-2">أهم الروابط</h4>
          <ul className="text-[#8E8E8E]">
            {listItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <FooterForm />
      </div>
    </footer>
  );
};

export default Footer;
