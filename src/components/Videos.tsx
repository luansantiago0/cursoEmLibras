import Image from "next/image";

const VideosQuadra = () => {
  return (
    <section className="mt-20 container flex mx-auto justify-center items-center">
      <div className="grid md:grid-cols-3 gap-x-28">
        <div className="bg-zinc-800 rounded">
          <div className="w-full">
            <Image
              src="/video-img.jpg"
              alt="Imagem do Vídeo"
              width={300}
              height={300}
              className="object-cover rounded-t"
            />
          </div>
          <div className="p-5">
            <h3 className="relative pl-3 before:-ml-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:content-[''] before:w-[9px] before:h-[4px] before:bg-[#8DB986] text-white">
              Vídeo 1
            </h3>
            <p className="text-white text-sm mt-2">Descricão do vídeo</p>
          </div>

          <div className="w-full my-3 grid md:grid-cols-2 px-3 gap-x-2">
            <button className="bg-[#8DB986] text-white px-4 py-2 rounded hover:bg-[#66b25e] duration-150 ease-in-out">
              Editar
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 duration-150 ease-in-out">
              Excluir
            </button>
          </div>
        </div>

        <div className="bg-zinc-800 rounded">
          <div className="w-full">
            <Image
              src="/video-img.jpg"
              alt="Imagem do Vídeo"
              width={300}
              height={300}
              className="object-cover rounded-t"
            />
          </div>
          <div className="p-5">
            <h3 className="relative pl-3 before:-ml-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:content-[''] before:w-[9px] before:h-[4px] before:bg-[#8DB986] text-white">
              Vídeo 1
            </h3>
            <p className="text-white text-sm mt-2">Descricão do vídeo</p>
          </div>

          <div className="w-full my-3 grid md:grid-cols-2 px-3 gap-x-2">
            <button className="bg-[#8DB986] text-white px-4 py-2 rounded hover:bg-[#66b25e] duration-150 ease-in-out">
              Editar
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 duration-150 ease-in-out">
              Excluir
            </button>
          </div>
        </div>

        <div className="bg-zinc-800 rounded">
          <div className="w-full">
            <Image
              src="/video-img.jpg"
              alt="Imagem do Vídeo"
              width={300}
              height={300}
              className="object-cover rounded-t"
            />
          </div>
          <div className="p-5">
            <h3 className="relative pl-3 before:-ml-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:content-[''] before:w-[9px] before:h-[4px] before:bg-[#8DB986] text-white">
              Vídeo 1
            </h3>
            <p className="text-white text-sm mt-2">Descricão do vídeo</p>
          </div>

          <div className="w-full my-3 grid md:grid-cols-2 px-3 gap-x-2">
            <button className="bg-[#8DB986] text-white px-4 py-2 rounded hover:bg-[#66b25e] duration-150 ease-in-out">
              Editar
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 duration-150 ease-in-out">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosQuadra;
