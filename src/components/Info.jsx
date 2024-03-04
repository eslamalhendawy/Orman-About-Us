import logo from "/assets/logoLarge.png";
import info1 from "/assets/info1.png";
import info2 from "/assets/info2.png";

const Info = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row-reverse text-right items-center px-6 pt-12 pb-16 gap-6">
      <div className="flex flex-col justify-center items-center gap-4 basis-2/3">
        <div className="md:w-fit md:ml-auto">
          <img className="md:max-w-[350px]" src={logo} alt="" />
        </div>
        <p className="text-[#343A40] font-medium text-[16px] lg:text-[20px] md:w-[80%] ml-auto">منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا، دون أي تمييز ديني أو سياسي، وذلك بشكل مؤسسي متطور ويؤكد دور العمل الأهلي فى تنمية المجتمعات اقتصاديًا واجتماعيًا. تعتمد الجمعية في تمويلها على التبرعات العينية والنقدية من المصريين داخل مصر وخارجها</p>
      </div>
      <div className="basis-1/3 flex items-stretch gap-2 md:block md:relative">
        <div className="w-full">
          <img src={info1} alt="" />
        </div>
        <div className="w-full md:absolute md:w-[80%] bottom-[-3rem] right-[-3rem]">
          <img className="h-full" src={info2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Info;
