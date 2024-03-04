import MemberCard from "./MemberCard"

const BoardMembers = () => {
  const members = [
    {
      name: "ا/ أحمد أسامة محمد الجندي",
      role: "رئيس مجلس الإدارة"
    },
    {
      name: "ا/ محمد محب أنور توفيق عبد الرازق",
      role: "نائب رئيس مجلس الإدارة"
    },
    {
      name: "م/ محمد عادل محمد عبد المنعم زغلول",
      role: "أمين الصندوق المهندس"
    },
    {
      name: "م /محمد أحمد طلعت محمد عزيز",
      role: "السكرتير العام "
    },
    {
      name: "م/ حسام الدين أحمد عبد الحليم القبانى",
      role: "عضو مجلس الإدارة"
    },
    {
      name: "د/ محمد خالد حسين طه النوري",
      role: "عضو مجلس الإدارة"
    },
    {
      name: "م/ محمد عاصم محمد عبد الرحمن إمام",
      role: "عضو مجلس الإدارة"
    },
    {
      name: "ا/ أحمد حسام الدين أحمد عبد الحليم",
      role: "عضو مجلس الإدارة"
    },
    {
      name: "ا/ محمد مصطفى كمال محمد جاد",
      role: "عضو مجلس الإدارة"
    },
  ]
  return (
    <section className="bg-[#FCFCFC]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3">
          <hr className="w-[35%] bg-[#D9D9D9]" />
          <h2 className="text-center text-[#343A40] text-[20px] sm:text-[25px] md:text-[30px] whitespace-nowrap font-bold py-8">أعضاء مجلس الإدارة</h2>
          <hr className="w-[35%]" />
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            members.map((member, index) => (
              <MemberCard key={index} info={member} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default BoardMembers