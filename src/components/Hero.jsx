import scrollIcon from "../assets/scroll-icon.svg fill.svg"
export const Hero = () => {
  return (
    <section className="mt-[75.8px] ">
      <div className="px-[96px] font-Poppins text-center">
        <h1 className=" font-bold text-[115.5px] leading-[134.4px] tracking-[2px]  uppercase text-Blue21">
          Co creating <span className="text-Teal">INTENTIONALLY</span> FOR
          <span className="text-Red44"> LONG TERM</span> CHANGE.
        </h1>

        <p className="mt-[85.97px] font-medium text-[31.63px] leading-[42.24px] tracking-[-0.5px] text-Red44">
          From insight to action, we help you shift what's stuck, strengthen
          what matters, and design systems that last.
        </p>
      </div>

      <div className="mt-[103.69px] h-[59.19px]   rotate-[-3deg] bg-SkyBlue flex items-center font-Inter font-medium text-[24.25px] leading-[23px] tracking-[-1px] uppercase text-Blue21 text-nowrap overflow-hidden">
        
          <span >
            BECAUSE LIFE'S TOO SHORT FOR BORING DESIGNS ~
          </span>
          <span >
            BECAUSE LIFE'S TOO SHORT FOR BORING DESIGNS ~
          </span>
          <span >
            BECAUSE LIFE'S TOO SHORT FOR BORING DESIGNS ~
          </span>
          <span >
            BECAUSE LIFE'S TOO SHORT FOR BORING DESIGNS ~
          </span>
      
      </div>

      <button className="flex flex-col gap-[15px] text-center pt-[66px] justify-center items-center w-full text-Red44 font-Inter font-bold text-[19.5px] leading-[27.2px]">
        <span >scroll to discover</span>
        <img src={scrollIcon} alt="scroll to discover icon "/>
      </button>
    </section>
  );
};
