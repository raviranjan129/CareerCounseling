// import { BellIcon, Calendar1Icon, MessageSquareIcon, SearchIcon } from "lucide-react";


const Header = () => {
  return (
    <div className="w-full flex h-[70px] bg-red-100 items-center">
      <div className="w-[50%] ml-2">logo</div>
      <div className="w-[50%] flex justify-around ">
      <button className="font-semibold">Home</button>
      <button className="font-semibold" >About Us</button>
      <button className="font-semibold">Services</button>
      <button className="font-semibold">Book a Call</button>
      <button  className="font-semibold">Contact</button>
      
      </div>
    </div>
  );
};

export default Header;
