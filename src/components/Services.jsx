import graphicDesignIcon from "../assets/graphic-design-icon.png";
import webDesingIcon from "../assets/webdesign-icon.png";
import webDevelopmentIcon from "../assets/webdevelopment-icon.png";
import brandingIcon from "../assets/branding-icon.png";

const servicesData = [
  {
    number: "1",
    title: "LOREM",
    description:
      "I create strong, memorable brand identities that resonate with your values and connect with your target audience. From logo design to brand guidelines, I ensure your brand stands out and leaves a lasting impression.",
    icon: brandingIcon,
    bgColor: "bg-black",
    textColor: "text-white",
    rotation: "-rotate-3",
  },
  {
    number: "2",
    title: "Lorem ispum",
    description:
      "Beautiful and user-friendly web design that not only looks great but also delivers an engaging experience. I focus on crafting designs that capture the essence of your brand and turn visitors into loyal customers.",
    icon: webDesingIcon,
    bgColor: "bg-Teal",
    textColor: "text-white",
    rotation: "-rotate-4",
  },
  {
    number: "3",
    title: "Lorem Ispum",
    description:
      "I bring web designs to life with clean, efficient code, prioritizing the performance and accessibility of the website. This ensures your site is fast, responsive, and usable for everyone.",
    icon: webDevelopmentIcon,
    bgColor: "bg-Red44",
    textColor: "text-white",
    rotation: "-rotate-5",
  },
  {
    number: "4",
    title: "Lorem ",
    description:
      "Visual content that stands out. Whether it's marketing materials, social media graphics, or print design, I create eye-catching visuals that communicate your message effectively. ",
    icon: graphicDesignIcon,
    bgColor: "bg-black",
    textColor: "text-white",
    rotation: "-rotate-6",
  },
];

export const Services = () => {
  return (
    <section className="mt-[223.5px]  font-Poppins     ">
      <h2 className="mb-[214.69px] mx-[116px] text-right font-bold text-[78.99px] leading-[96px] tracking-[-1px]  uppercase  text-Teal ">
        My Services
      </h2>

      <div className="flex flex-col items-center gap-[392px] mx-[86px]">
        {servicesData.map((service) => (
          <div
            key={service.number}
            className={`py-[192px] px-[96px] flex items-center justify-between gap-[160px] w-full  font-OpenSans  text-white  ${service.bgColor} ${service.textColor} ${service.rotation} `}
          >
            <div className="font-bold text-[98.55px] leading-[115.2px] ">
              {service.number}
            </div>

            <div className="flex flex-col gap-[24px] ">
              <h3 className="font-bold text-[89px] leading-[115px] uppercase">
                {service.title}
              </h3>
              <p className="font-medium text-[25px] leading-[36.84px] tracking-[-0.5px]">
                {service.description}
              </p>
            </div>

            <img
              src={service.icon}
              className="opacity-20 max-w-[180px] h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
