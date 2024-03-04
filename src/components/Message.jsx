import background from "/assets/messageBG.png";
import filter from "/assets/messageFilter.png";
import filter2 from "/assets/messageFilter2.png";
import logo from "/assets/messageLogo.png";

const Message = () => {
  return (
    <section className="relative minHeight bg-no-repeat bg-cover" style={{ backgroundImage: `url("${background}")` }}>
      <div className="absolute w-full h-full">
        <img className="absolute w-full h-full" src={filter} alt="" />
      </div>
      <div className="container mx-auto h-full flex flex-col items-center justify-center relative py-12" style={{ backgroundImage: `url("${filter2}")` }}>
        <div className="flex flex-row-reverse gap-2 justify-center items-center mb-6">
          <h3 className="font-[900] text-white text-[25px] sm:text-[35px] lg:text-[50px]">رسالة الجمعية</h3>
          <img className="max-w-[90px] sm:max-w-[120px] lg:max-w-[160px]" src={logo} alt="logo" />
        </div>
        <p className="font-medium text-white text-center px-4 sm:text-[20px] lg:text-[30px]">تقديم خدمات خيرية نوعية غير تقليدية تستهدف خلال مدى زمني محدد الإنتقال بالشرائح المحتاجة من دائرة الإحتياج إلى دائرة الإنتاج والإكتفاء</p>
      </div>
    </section>
  );
};

export default Message;
