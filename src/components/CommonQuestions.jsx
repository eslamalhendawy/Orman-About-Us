import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const CommonQuestions = () => {
  return (
    <section>
      <div className="container mx-auto px-6 pb-6">
        <div className="flex items-center justify-center gap-3">
          <hr className="w-[35%] bg-[#D9D9D9]" />
          <h2 className="text-center text-[#343A40] text-[20px] sm:text-[25px] md:text-[30px] whitespace-nowrap font-bold py-8">أسئلة شائعة</h2>
          <hr className="w-[35%]" />
        </div>
        <Accordion className="group">
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <p className="text-right ml-auto">ما هي الخدمات التي تقدمها الأرمان ؟</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-right ml-auto">جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .</p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="group">
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <p className="text-right ml-auto">ما هي الأوراق المطلوبة من الجمعيات التي ترغب في التعاون مع الأورمان للاستفادة من خدماتها الخيرية؟</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-right">جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .</p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="group">
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <p className="text-right ml-auto">ما هي شروط كفالة الاطفال ؟</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-right ml-auto">جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .</p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="group">
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <p className="text-right ml-auto">ما هي الاوراق المطلوبة لكفالة طفل يتيم ؟</p>
          </AccordionSummary>
          <AccordionDetails>
          <p className="text-right ml-auto">جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى، وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل: الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default CommonQuestions;
