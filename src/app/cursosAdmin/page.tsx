import VideosQuadra from "@/components/Videos";

const PageCursosAdmin = () => {
  return (
    <>
      <div className="mt-[60px]">
        <div className=" w-[1200px] h-[98px] bg-[#ACCE91] flex items-center justify-end rounded-tr-lg">
          <div className="absolute">
            <h1 className="mt-1 text-3xl font-bold pr-32 text-white z-10">
              Vídeos Introdutórios
            </h1>
          </div>
        </div>
      </div>
      <VideosQuadra />
    </>
  );
};

export default PageCursosAdmin;
