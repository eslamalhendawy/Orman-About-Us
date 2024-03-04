import logo from "/assets/messageLogo.png";
import info1 from "/assets/info1.png";
import info2 from "/assets/info2.png";
import vision1 from "/assets/vision1.png";
import vision2 from "/assets/vision2.png";
import vision3 from "/assets/vision3.png";
import vision4 from "/assets/vision4.png";
import vision5 from "/assets/vision5.png";

const Vision = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row-reverse text-right items-center px-8 py-24 gap-6">
      <div className="flex flex-col justify-end items-center gap-4 basis-2/3">
        <div className="flex flex-row-reverse gap-2 mb-6 md:w-fit md:ml-auto">
          <h3 className="font-[900] text-[#00521C] text-[25px] sm:text-[35px] lg:text-[50px] text-right">رؤية الجمعية</h3>
          <img className="max-w-[90px] sm:max-w-[120px] lg:max-w-[160px]" src={logo} alt="logo" />
        </div>
        <p className="text-[#343A40] font-medium text-[16px] lg:text-[20px] md:w-[80%] ml-auto">الانتقال بمفهوم العمل الخيري التطوعي من مجرد الدور الكمالى والمشبع لغريزة العطاء عند بعض الشرائح إلى أن يصبح عمل مؤسسى تنموى منظم يتم بشكل احترافى وينطلق من تحقيق أهدافه من ثقة المتبرعين وجدية المستفيدين وخبرة وكفاءة القائمين عليه</p>
      </div>
      <div className="basis-1/3 flex flex-wrap justify-center items-center gap-2 lg:relative">
        <div className="lg:w-fit">
          <img className="relative z-[2]" src={vision1} alt="" />
        </div>
        <div className="lg:absolute top-[-90px] left-[-20px]">
          <img className="relative z-[3]" src={vision2} alt="" />
        </div>
        <div className="lg:absolute top-[-50px] right-[-60px]">
          <img className="relative z-[3]" src={vision3} alt="" />
        </div>
        <div className="lg:absolute bottom-[-90px] left-[-30px]">
          <img className="relative z-[3]" src={vision4} alt="" />
        </div>
        <div className="lg:absolute bottom-[-120px] right-[-30px]">
          <img className="relative z-[1]" src={vision5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Vision;
