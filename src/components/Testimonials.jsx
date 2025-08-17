import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import videoThumbnail from "../assets/client-3.jpg";
import clientLogo from "../assets/client-logo.png";
import playIcon from "../assets/play-icon.png";

const testimonialsData = [
  { name: "Las Sabir", company: "Founder, Booklt", image: client1 },
  { name: "Sébastien Béal", company: "Founder", image: null },
  { name: "Sébastien Béal", company: "Founder", image: client2 },
];

export const Testimonials = () => {
  return (
    <section className="my-[71px] mx-[106px] ">
      <h2 className="mt-[48px] max-w-[813px] font-Sora text-[44px] leading-[52.8px] tracking-[-1.32px] text-Blue27">
        We empower our clients to scale today while building for the future.
      </h2>

      <div className="mt-[40px] flex justify-center  gap-[48px]  relative">
        {testimonialsData.map((client, index) => (
          <div
            key={index}
            className="p-[14.4px] gap-[14.4px] flex flex-col font-Sora text-[16.8px] tracking-[-0.5px] text-Blue26"
          >
            {client.image ? (
              <img
                src={client.image}
                alt={client.name}
                className="rounded-[12px] max-w-[318px]"
              />
            ) : (
              <div className="bg-azure4 rounded-[12px] w-[318px] h-[179px]"></div>
            )}

            <div>
              <p className=" leading-[24.86px]  font-semibold">{client.name}</p>
              <p className="mt-[1.4px]  leading-[22.18px] ">{client.company}</p>
            </div>
          </div>
        ))}

        
        <div className="max-w-[559px] rounded-[24px] p-[14.4px] flex flex-col gap-[19.2px] bg-Grey96">
          <div className="relative">
            <img
              src={videoThumbnail}
              alt="Video testimonial from Tao Lei"
              className="rounded-xl w-full h-auto"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <img src={playIcon} className="opacity-50" />
            </button>
          </div>
          <div className="flex flex-col gap-[28.4px] font-Sora text-[19.2px] leading-[28.8px] tracking-[-0.38px] text-Blue27">
            <p>
              They understood our business, responded quickly, and their
              customized SaaS designs have been invaluable.
            </p>
            <p>
              Working with them has been great, and I commend their dedication
              and expertise.
            </p>
          </div>
          <div className=" flex items-center ">
            <div className="flex items-center gap-[9.6px]">
              <img
                src={clientLogo}
                alt="Marco Payroll logo"
                className="w-[48px] h-[48px] rounded-[8.8px]"
              />
              <div className="font-Sora text-[16.8px] tracking-[-0.5px] text-Blue27">
                <p className=" leading-[24.86px]  font-semibold">Tao Lei</p>
                <p className="mt-[1.4px]  leading-[22.18px]">
                  CEO, Marco Payroll
                </p>
              </div>
            </div>
            <a
              href="#"
              className="ml-1 font-Sora text-[19.2px] leading-[28.8px] tracking-[-0.58px] text-Blue27 h-fit border-b-[1.2px] border-Blue27"
            >
              Discover Marco
            </a>
          </div>
        </div>

      
        <div className="absolute left-[16px] bottom-[16px] flex flex-col  gap-4">
          <div className="w-[101px] h-[54px] rounded-[20px] py-[8px] px-[12px] bg-cyan67 font-Sora text-[39.84px] leading-[40px] tracking-[-1.2px] text-Blue26 flex justify-center items-center">
            <span className="  mt-2">90+</span>
          </div>
          <p className="text-Blue52 font-Sora text-[20px] leading-[24px] ">Happy clients</p>
        </div>
      </div>
    </section>
  );
};
