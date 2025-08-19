import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import videoThumbnail from "../assets/client-3.jpg";
import clientLogo from "../assets/client-logo.png";
import playIcon from "../assets/play-icon.png";
import { Draggable } from "gsap/Draggable";
import { CustomEase } from "gsap/CustomEase";



const testimonialsData = [
  {
    name: "Las Sabir",
    company: "Founder, Booklt",
    image: client1,
    activeContent: {
      paragraphs: [
        "This is the active content for Las Sabir. It shows when his card is in the center.",
        "Each card can have unique detailed content like this.",
      ],
      logo: clientLogo,
      clientName: "Las Sabir",
      clientTitle: "CEO, Booklt",
      discoverLink: "#",
    },
  },
  {
    name: "Sébastien Béal",
    company: "Founder",
    image: null,
    activeContent: {
      paragraphs: [
        "They understood our business, responded quickly, and their customized SaaS designs have been invaluable.",
        "Working with them has been great, and I commend their dedication and expertise.",
      ],
      logo: clientLogo,
      clientName: "Tao Lei",
      clientTitle: "CEO, Marco Payroll",
      discoverLink: "#",
    },
  },
  {
    name: "Sébastien Béal",
    company: "Founder",
    image: client2,
    activeContent: {
      paragraphs: [
        "They understood our business, responded quickly, and their customized SaaS designs have been invaluable.",
        "Working with them has been great, and I commend their dedication and expertise.",
      ],
      logo: clientLogo,
      clientName: "Tao Lei",
      clientTitle: "CEO, Marco Payroll",
      discoverLink: "#",
    },
  },
  {
    name: "Tao Lei",
    company: "CEO, Marco Payroll",
    image: videoThumbnail,
    activeContent: {
      paragraphs: [
        "They understood our business, responded quickly, and their customized SaaS designs have been invaluable.",
        "Working with them has been great, and I commend their dedication and expertise.",
      ],
      logo: clientLogo,
      clientName: "Tao Lei",
      clientTitle: "CEO, Marco Payroll",
      discoverLink: "#",
    },
  },
  {
    name: "Las Sabir",
    company: "Founder, Booklt",
    image: client1,
    activeContent: {
      paragraphs: [
        "This is the active content for Las Sabir. It shows when his card is in the center.",
        "Each card can have unique detailed content like this.",
      ],
      logo: clientLogo,
      clientName: "Las Sabir",
      clientTitle: "CEO, Booklt",
      discoverLink: "#",
    },
  },
  {
    name: "Sébastien Béal",
    company: "Founder",
    image: null,
    activeContent: {
      paragraphs: [
        "They understood our business, responded quickly, and their customized SaaS designs have been invaluable.",
        "Working with them has been great, and I commend their dedication and expertise.",
      ],
      logo: clientLogo,
      clientName: "Tao Lei",
      clientTitle: "CEO, Marco Payroll",
      discoverLink: "#",
    },
  },
  {
    name: "Sébastien Béal",
    company: "Founder",
    image: client2,
    activeContent: {
      paragraphs: [
        "They understood our business, responded quickly, and their customized SaaS designs have been invaluable.",
        "Working with them has been great, and I commend their dedication and expertise.",
      ],
      logo: clientLogo,
      clientName: "Tao Lei",
      clientTitle: "CEO, Marco Payroll",
      discoverLink: "#",
    },
  },
  {
    name: "Tao Lei",
    company: "CEO, Marco Payroll",
    image: videoThumbnail,
    activeContent: {
      paragraphs: [
        "They understood our business, responded quickly, and their customized SaaS designs have been invaluable.",
        "Working with them has been great, and I commend their dedication and expertise.",
      ],
      logo: clientLogo,
      clientName: "Tao Lei",
      clientTitle: "CEO, Marco Payroll",
      discoverLink: "#",
    },
  },
];

const TestimonialCard = ({ data, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` flex-shrink-0 transition-all duration-500 ease-in-out ${
        isActive ? "max-w-[559px]" : "max-w-[349px]"
      }`}
    >
      <div
        className={`rounded-[24px] p-[14.4px] flex flex-col gap-[19.2px]  transition-colors duration-500 ${
          isActive ? "bg-Grey96" : "bg-transparent"
        }`}
      >
        <div className="relative">
          {data.image ? (
            <img
              src={data.image}
              alt={data.name}
              className="rounded-[12px] min-w-[318px] w-full"
            />
          ) : (
            <div className="bg-azure4 rounded-[12px] min-w-[318px] h-[179px]"></div>
          )}
          {isActive && data.activeContent && (
            <button className="absolute inset-0 flex items-center justify-center">
              <img src={playIcon} className="opacity-50" />
            </button>
          )}
        </div>

        {/* Inactive State Content */}
        <div
          className={`font-Sora text-[16.8px] tracking-[-0.5px] text-Blue26 transition-opacity duration-300 ${
            isActive ? "hidden opacity-0 h-0" : "block opacity-100"
          }`}
        >
          <p className="leading-[24.86px] font-semibold">{data.name}</p>
          <p className="mt-[1.4px] leading-[22.18px]">{data.company}</p>
        </div>

        {/* Active State Content - uses max-h for smooth transition */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isActive ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          {data.activeContent && (
            <>
              <div className="flex flex-col gap-[28.4px] font-Sora text-[19.2px] leading-[28.8px] tracking-[-0.38px] text-Blue27">
                {data.activeContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-4 flex items-center ">
                <div className="flex items-center gap-[9.6px]">
                  <img
                    src={data.activeContent.logo}
                    alt={`${data.activeContent.clientName} logo`}
                    className="w-[48px] h-[48px] rounded-[8.8px]"
                  />
                  <div className="font-Sora text-[16.8px] tracking-[-0.5px] text-Blue27">
                    <p className="leading-[24.86px] font-semibold">
                      {data.activeContent.clientName}
                    </p>
                    <p className="mt-[1.4px] leading-[22.18px]">
                      {data.activeContent.clientTitle}
                    </p>
                  </div>
                </div>
                <a
                  href={data.activeContent.discoverLink}
                  className="font-Sora text-[19.2px] leading-[28.8px] tracking-[-0.58px] text-Blue27 h-fit border-b-[1.2px] border-Blue27"
                >
                  Discover
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tapeRef = useRef(null);
  const masterTimeline = useRef(null);

  const setupDraggable = () => {
    if (tapeRef.current.scrollWidth > sectionRef.current.offsetWidth) {
      const firstCard = tapeRef.current.children[0];
      const lastCard =
        tapeRef.current.children[tapeRef.current.children.length - 2];

      const firstCardLeft = firstCard.offsetLeft;
      const lastCardRight = lastCard.offsetLeft + lastCard.offsetWidth;
      const sectionWidth = sectionRef.current.offsetWidth;
      const sectionMargin = 106;

      const maxX = sectionMargin - firstCardLeft;
      const minX = -(lastCardRight - sectionWidth + sectionMargin);

      Draggable.create(tapeRef.current, {
        type: "x",
        bounds: { minX, maxX },
        inertia: true,
      });
    }
  };

  const handleCardClick = (index) => {
    if (masterTimeline.current) {
      masterTimeline.current.kill();
      setupDraggable();
    }
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const walkInDuration = testimonialsData.length * 2;
      const timePerCard = walkInDuration / testimonialsData.length;

      gsap.set(tapeRef.current, { x: "100%" });

      masterTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "restart none restart none",
        },
      });

      masterTimeline.current.from(titleRef.current, {
        x: -100,
        autoAlpha: 0,
        duration: 1,
        delay: 0.3,
        ease: "slow(0.7,0.7,false)",
      });

      masterTimeline.current.to(
        tapeRef.current,
        {
          x: () =>
            `-${
              (tapeRef.current.scrollWidth - sectionRef.current.offsetWidth + 106) 
            }px`,
          duration: walkInDuration,

        ease: CustomEase.create("custom", "M0,0 C0,0 0.952,0.998 1,1 1.019,1 1,1 1,1 "),
        },
        "-=0.7"
      );

      testimonialsData.forEach((card, index) => {
        if (card.activeContent) {
          const activationTime = 2 + index * timePerCard;
          masterTimeline.current.call(
            () => setActiveIndex(index),
            [],
            activationTime
          );
        }
      });

      masterTimeline.current.call(
        () => {
          gsap.set(tapeRef.current, { x: 0 });
          setupDraggable();
        },
        [],
        ">"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="my-[71px] relative overflow-hidden">
      <h2
        ref={titleRef}
        className="invisible mx-[106px] mt-[48px] max-w-[813px] font-Sora text-[44px] leading-[52.8px] tracking-[-1.32px] text-Blue27"
      >
        We empower our clients to scale today while building for the future.
      </h2>

      <div
        ref={tapeRef}
        className="mt-[40px] flex justify-center  gap-[48px] min-h-[560px]"
      >
        {testimonialsData.map((client, index) => (
          <TestimonialCard
            key={index}
            data={client}
            isActive={index === activeIndex}
            onClick={() => handleCardClick(index)}
          />
        ))}
        <div className="w-1 flex-shrink-0"></div>
      </div>

      <div className="absolute mx-[106px] left-[16px] bottom-[16px] flex flex-col  gap-4">
        <div className="w-[101px] h-[54px] rounded-[20px] py-[8px] px-[12px] bg-cyan67 font-Sora text-[39.84px] leading-[40px] tracking-[-1.2px] text-Blue26 flex justify-center items-center">
          <span className="  mt-2">90+</span>
        </div>
        <p className="text-Blue52 font-Sora text-[20px] leading-[24px] ">
          Happy clients
        </p>
      </div>
    </section>
  );
};
