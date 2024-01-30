import React from "react";
import Logo from "../assets/Logo.svg";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="ml-20 mt-15 flex items-center justify-between p-5 px-20">
      <a href="#">
        <Image src={Logo} alt="Logo" priority />
      </a>
      <nav className="ml-40 mt-15 mr-20 flex gap-20 items-center justify-between text-center text-black text-base font-medium font-poppins">
        <a href="#">Contato</a>
        <a href="#">Sobre</a>
        <a href="#">Login</a>
        <button className="w-40 h-9 bg-[#8DB986] hover:bg-green-700 text-white rounded-tr-lg">
          Inscreve-se
        </button>
      </nav>
    </header>
  );
};

export default Header;
