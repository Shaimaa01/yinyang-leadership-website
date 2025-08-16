import aboutImage from "../assets/about.png";
import about2Image from "../assets/about2.png";
import about3Image from "../assets/about3.png";

export const About = () => {
  return (
    <section className="mt-[75.8px] mx-[208px] flex justify-center items-center gap-[11px]">
      <div className="max-w-[704px] font-Poppins ">
        <h2 className="mb-[55.89px] text-[64px]  leading-[67.2px] tracking-[-1.28px] text-Teal">About us:</h2>
        <div className="flex flex-col gap-[10.79px] text-[18.87px] leading-[33.6px] tracking-[0.32px] text-black">
          <p>
            YinYang Leadership began with a simple but powerful question: What
            if the real strength of a business lies in what we can’t measure on
            a spreadsheet?
          </p>
          <p>
            Our founder, Tanisha, spent over a decade partnering with leaders,
            teams, and organisations driven by big ambitions, rapid growth, and
            impressive results. However, an invisible thread ran through every
            success story and every setback: Culture is an intangible asset but
            its impact is anything but invisible.This became the seed of
            YinYang Leadership. Inspired by the ancient philosophy that
            seemingly opposite forces can exist in harmony, we help
            organisations hold space for both vulnerability and strength,
            stability and evolution, introspection and bold action.
          </p>
          <p>
            Today, we stand alongside leaders and teams who believe that culture
            should be their greatest advantage and not their biggest blind spot.
            Through a thoughtfully designed culture compass, YinYang weaves
            together evidence based tools and facilitation that brings real
            conversations to life. Whether we’re co-creating a leadership
            journey, redesigning how you work, or guiding you through complex
            change, our purpose stays the same: to make your workplace more
            conscious, connected, and alive; so your people and your business
            can thrive side by side.
          </p>
        </div>
      </div>

      <div className="w-[752px] flex justify-center items-center">
        <div className="relative">
          <img
            src={aboutImage}
            alt="Team meeting in a bright room"
            className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[601.6px] h-auto rotate-[4.04deg] rounded-[4px] shadow-[2px_4px_8px_0px_#00101980] z-10"
          />
          <img
            src={about2Image}
            alt="Team meeting in a bright room"
            className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-[56%]  max-w-[575.8px] h-auto rotate-[5.13deg] rounded-[4px] shadow-[2px_4px_8px_0px_#00101980] z-9"
          />
          <img
            src={about3Image}
            alt="Team meeting in a bright room"
            className="absolute  top-1/2 left-1/2 -translate-x-[54%] -translate-y-[46%]  max-w-[550px] h-auto rotate-[-0.11deg] rounded-[4px] shadow-[2px_4px_8px_0px_#00101980] z-8"
          />
        </div>
      </div>
    </section>
  );
};
