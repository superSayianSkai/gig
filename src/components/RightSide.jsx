import copilot from "../../public/copilot.png";
import Image from "next/image";
const RightSide = () => {
  return (
    <div className="border-l-[1px] border-gray-300 md:hidden lg:flex flex-col items-center gap-6 pt-6">
      <Image src={copilot} className="w-[20px]" Alt="copilot image" />
      <i className="bi bi-chat-left-text"></i>
      <i className="bi bi-telephone"></i>
      <i className="bi bi-chat-text"></i>
     </div>
  );
};

export default RightSide;
