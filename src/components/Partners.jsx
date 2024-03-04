import partner1 from "/assets/partner1.png";
import partner2 from "/assets/partner2.png";
import partner3 from "/assets/partner3.png";
import partner4 from "/assets/partner4.png";
import partner5 from "/assets/partner5.png";
import partner6 from "/assets/partner6.png";
import partner7 from "/assets/partner1.png";

const Partners = () => {

  const list =[partner1, partner2, partner3, partner4, partner5, partner6, partner7]

  return (
    <section className="container mx-auto px-6 pb-12">
      <div className="flex items-center justify-center gap-3">
        <hr className="w-[35%] bg-[#D9D9D9]" />
        <h2 className="text-center text-[#343A40] text-[20px] sm:text-[25px] md:text-[30px] whitespace-nowrap font-bold py-8">شـركـائـنـا فـى الـنـجـاح</h2>
        <hr className="w-[35%]" />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4">
        {list.map((partner, index) => (
          <div className="rounded-full size-[150px] overflow-hidden flex items-center justify-center partnerShadow basis-1/7" key={index}>
            <img className="w-full h-full" src={partner} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
