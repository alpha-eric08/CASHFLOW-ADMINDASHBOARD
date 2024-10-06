import { useState } from "react";
import navlinks, { navs } from "./data";
import { FaArrowsTurnRight, FaArrowsTurnToDots } from "react-icons/fa6";

const Sidebar = () => {

  const [colapse, setColapse] = useState(false)

  return (
    <div className={`bg-white fixed h-screen shadow-2xl rounded-tl-3xl flex justify-center rounded-bl-3xl py-10 ${colapse ? "w-16 flex justify-center" : "md:w-[233px] w-16 "}`}>
      <div>
        {/* Logo */}
        <h1 className={`text-[#2C2C2C] font-bold text-[31px] ${colapse ? "hidden" : "block"}`}>CashFlow</h1>
        <span className={`text-[#2C2C2C] font-bold text-2xl ${colapse ? "block" : "hidden"}`}>CF</span>
        {/* MAIN MENU */}
        <div className="font-semibold text-xl text-black my-10 flex items-center gap-2">
          <h2 className={`${colapse ? "hidden" : "block"}`}>MAIN MENU</h2>
          <div className="text-lg cursor-pointer" onClick={() => setColapse(!colapse)}>
            {colapse ? <FaArrowsTurnToDots /> : <FaArrowsTurnRight />}
          </div>
        </div>
        {/* Navigation */}
        <ul className="text-left space-y-6 font-medium text-xl">
          {navlinks.map((item) => (
            <li key={item.id} className="flex items-center  gap-2 text-black/60 hover:text-black ">
              <a href={item.path}>{<item.icon size={25}/>}</a>
              <a href={item.path} className={`${colapse ? "hidden" : "block"}`}>{item.label}</a>
            </li>
          ))}
          </ul>
          {/* SEPARATOR */}
          <p className="border-b-4 my-16 border-[#898989]"></p>
          {/* ADDITIONAL MENU */}
          <ul className="text-left space-y-6 font-medium text-xl">
            {navs.map((item) => (
              <li key={item.id} className="flex items-center  gap-2 text-black/60 hover:text-black ">
              <a href={item.path}>{<item.icon size={25}/>}</a>
              <a href={item.path} className={`${colapse ? "hidden" : "block"}`}>{item.label}</a>
            </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Sidebar