export const Header = () => {
  return (
    <header className="sticky pt-[40px] px-[96px]  h-[120px] z-1000 font-Inter bg-white">
      <div className="flex justify-between items-center h-full">
        <div className=" font-bold text-[43.34px] leading-[27.2px] text-black ">
          logo
        </div>

        <div className="flex items-center gap-[8px] font-bold text-[19.34px] leading-[27.2px] text-Red44 ">
          <span className="h-[11px] w-[9px] rounded-full bg-Red44 "></span>
          <p>menu</p>
        </div>
      </div>
    </header>
  );
};
