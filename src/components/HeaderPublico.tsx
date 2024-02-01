import Logo from "../assets/Logo.svg";
import Image from "next/image";

const HeaderPublico: React.FC = () => {
  return (
    <header className="ml-24 mt-15 flex items-center justify-between p-5 px-20">
      <a href="#">
        <Image src={Logo} alt="Logo" priority />
      </a>
      <nav className="ml-40 mt-15 mr-20 flex gap-20 items-center justify-between text-center text-black text-base font-medium font-poppins">
        <a href="#">Suporte</a>
        <button className="w-40 h-9 bg-[#000000] hover:bg-[#252525] text-white rounded-tr-lg shadow-md">
          Sair
        </button>
      </nav>
    </header>
  );
};

export default HeaderPublico;
