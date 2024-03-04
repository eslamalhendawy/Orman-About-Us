import member from "/assets/member.png";

const MemberCard = ({info}) => {
  return (
    <div className="bg-white flex flex-col items-center gap-4 px-6 pt-6 pb-3 rounded-xl memberShadow">
      <div>
        <img src={member} alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-[#222222] text-[20px]">{info.name}</h2>
        <h5 className="text-[#8E8E8E] text-[20px]">{info.role}</h5>
      </div>
      <div className="flex items-center gap-2 text-[#C2C2C2]">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
};

export default MemberCard;
