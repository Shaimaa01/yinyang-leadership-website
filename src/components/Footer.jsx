import footerLogo from "../assets/contraztmedia-logo.svg.svg";

const menuLinks = [
  { text: "About", href: "#" },
  { text: "Work", href: "#" },
  { text: "Contact", href: "#" },
];
const inspiredLinks = [
  { text: "Facebook", href: "#" },
  { text: "Instagram", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="">
      <div className="h-[446px] pt-[128px] pb-[64px] px-[96px] flex flex-col justify-center items-start gap-[47.5px] bg-Teal border-b border-Teal font-OpenSans text-black">
        <p className="flex flex-col gap-[15px]   tracking-[-0.5px]">
          <span className="font-bold text-[29.63px] leading-[35.2px]  uppercase ">
            Ready to add some bemotion to your project?
          </span>
          <span className="font-medium text-[32.03px] leading-[42.24px]   ">
            Let's make something amazing together!
          </span>
        </p>

        <button className="font-bold text-[75.9px] leading-[96px] tracking-[-1px] uppercase underline cursor-pointer">
          Contact me today!
        </button>
      </div>

      <div
        className="h-[60px] bg-Teal mt-[-1px]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      ></div>

      <div className="h-[359px] max-2xl:h-full py-[80px] px-[96px] flex flex-wrap items-center justify-between">
        <div className="flex items-start gap-[80px]">

          <div className="flex flex-col gap-[15px]">
            <h3 className="font-bold font-Inter text-[29.4px] leading-[48px] uppercase text-Blue21">Menu</h3>
            <ul className="flex flex-col gap-[  3.8px]">
              {menuLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="font-medium text-[32.89px] leading-[42px] tracking-[-0.5px] text-Blue21 hover:text-Teal">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col gap-[15px]">
            <h3 className="font-bold font-Inter text-[29.4px] leading-[48px] uppercase text-Blue21">Get Inspired</h3>
            <ul className="flex flex-col gap-[  3.8px]">
              {inspiredLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="font-medium text-[32.89px] leading-[42px] tracking-[-0.5px] text-Blue21 hover:text-Teal">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img src={footerLogo} alt="Cotazt Memie Logo" className="" />
      </div>

      
      <div className="bg-Teal text-whit ">
      <div className="h-[60px] bg-[linear-gradient(135deg,#008080_99.99%,#BC2637_100%)]"></div>
        <p className="h-[72px] pt-[16px] pb-[32px] px-[96px] font-Inter text-bold text-[18px] leading-[24px] uppercase text-Grey92 text-right">
          © 2024 CONTRAZT MEDIA • DESIGNED & DEVELOPED BY BEMOTION • PRIVACY
          POLICY
        </p>
      </div>
    </footer>
  );
};
