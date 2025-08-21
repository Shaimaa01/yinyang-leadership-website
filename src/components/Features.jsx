import featuresImage from "../assets/features-image.png";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const accordionData = [
  {
    title: "in necessitate",
    content:
      "Cum privata assecuratione medica, es hassus per annum. Non potes addere autremovare tegmen. Punica est variabilis subscriptio et potes addere aut removere servitia quandocumque vis.",
  },
  {
    title: "Sapiens praedictiva sanitas",
    content:
      "This is the content for the second accordion item, revealing more information when clicked.",
  },
  {
    title: "Compara tecum cum hominibus tibi similibus",
    content:
      "Content for the third item. Each item has unique text that is shown or hidden based on the component state.",
  },
  {
    title: "Praeventio prima",
    content:
      "The final accordion item's content. The state logic ensures only one of these is visible at any time.",
  },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const accordionRef = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready
        .then(() => {
          let split = new SplitText(titleRef.current, { type: "words" });

          gsap.set(split.words, {
            display: "inline-block",
            scaleY: 0,
            opacity: 0,
            transformOrigin: "bottom center",
          });

          gsap.set(paragraphRef.current, {
            opacity: 0,
          });

          gsap.set(imageRef.current, {
            y: 50,
            opacity: 0,
          });

          gsap.set(gsap.utils.toArray(accordionRef.current?.children), {
            x: -60,
            opacity: 0,
          });

          const masterTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              markers: false,
            },
          });

          masterTimeline.to(split.words, {
            scaleY: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          });

          masterTimeline.to(
            paragraphRef.current,
            {
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.3"
          );

          masterTimeline.to(
            imageRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.4"
          );

          masterTimeline.to(
            gsap.utils.toArray(accordionRef.current?.children),
            {
              x: 0,
              opacity: 1,
              stagger: 0.7,
              duration: 1.5,
              ease: "power2.out",
            },
            "-=0.3"
          );

          return () => {
            split.revert();
          };
        })
        .catch((error) => {
          console.error("Font loading error:", error);
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="">
      <div className="text-center py-[88px] flex flex-col items-center gap-[21.3px] font-Poppins">
        <h2
          ref={titleRef}
          className="text-[44.99px] leading-[56.4px] tracking-[1.07px] text-Teal"
        >
          Lorem-lorem sapiens sanitas
        </h2>
        <p
          ref={paragraphRef}
          className="mx-[66px] font-medium text-[19.77px] leading-[28.6px] tracking-[0.22px] text-Rose11 max-w-[623px]"
        >
          Five strata of leniter integrata sapiens sanitas that curat de te omni
          tempore, non solum cum iam scis te aegrotum esse.
        </p>
      </div>

      <div className="flex justify-center items-start gap-[22px] flex-wrap">
        <div
          ref={accordionRef}
          className="flex flex-col gap-[10.44px] max-w-[656px] font-Inter"
        >
          {accordionData.map((item, index) => (
            <div
              key={index}
              className=" overflow-hidden rounded-[24px] border-2  bg-Grey92 border-Rose11"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center  px-[44px] py-[29.7px] text-[23.96px] leading-[24.75px] tracking-[1.1px]  text-Rose11 cursor-pointer"
              >
                <span>{item.title}</span>
                <span className="opacity-50">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={` bg-white  font-Poppins font-medium text-[15.81px] leading-[28.16px] tracking-[0.26px] text-Rose11 overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 px-[33px] py-[22px] "
                    : "max-h-0"
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <img
          ref={imageRef}
          src={featuresImage}
          alt="App interface showing health metrics"
          className=" w-[656px] h-auto border-2 object-contain border-Rose11 rounded-[32px] shadow-[0px_16px_0px_0px_#3A001D]"
        />
      </div>
    </section>
  );
};
