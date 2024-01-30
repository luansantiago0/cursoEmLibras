import libras from "../assets/libras-lingua-brasileira-de-sinais-og 1.png";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-x-36 container items-center justify-center">
      <div className="ml-20 mt-64 flex flex-col p-5 px-20">
        <h1 className=" mb-5">
          <span className="text-black text-6xl font-bold font-RammettoOne">
            Curso online de
          </span>
          <span className="text-[#8DB986] text-6xl font-normal font-serif">
            {" "}
            libras.
          </span>
        </h1>
        <p className="text-black font-light mb-8">
          Desvende o fascinante universo da Língua Brasileira de Sinais (Libras)
          no conforto da sua casa! Nosso curso online oferece uma jornada
          inclusiva e interativa, guiando você pelas expressivas mãos que falam.
        </p>

        <button className="w-40 h-9 bg-[#8DB986] hover:bg-green-700 text-white rounded-tr-lg shadow-md">
          Inscreve-se
        </button>
        <div className="flex mt-4 gap-4">
          <a href="#">
            <div className="flex justify-center items-center w-14 h-12 mt-8 bg-white rounded shadow-md">
              <FaFacebookF color="#5F5F5F" size={20} />
            </div>
          </a>
          <a href="#">
            <div className="flex justify-center items-center w-14 h-12 mt-8 bg-white rounded shadow-md">
              <FaInstagram color="#5F5F5F" size={20} />
            </div>
          </a>

          <a href="#">
            <div className="flex justify-center items-center w-14 h-12 mt-8 bg-white rounded shadow-md">
              <FaWhatsapp color="#5F5F5F" size={20} />
            </div>
          </a>
        </div>
      </div>
      <Image src={libras} alt="Logo" priority />
    </div>
  );
}

export default HomePage;
