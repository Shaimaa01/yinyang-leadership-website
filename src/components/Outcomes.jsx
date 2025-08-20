import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const outcomesData = [
  {
    title: "1. Adoption & Integration of the Codified Culture Model",
    points: [
      "360 feedback assessment for all employees",
      "Performance evaluations and self-assessment tools (for leaders, managers, team members)",
      "New management training",
      "Annual review conversations",
    ],
  },
  {
    title: "2. Behavioral Rollout",
    points: [
      "5+ organizational rituals anchored in leadership behaviors (retreat sessions, all-staff meetings, weekly behavior launches, manager training cohorts, OKR setting)",
      "Ongoing monthly deep-dives into behaviors led by leadership team",
    ],
  },
  {
    title: "3. Early Cultural Shifts",
    points: [
      'Clear adoption of leadership model language across functions ("Passion for our Mission", "Straight Talk", "Laser focus," etc.)',
      "Increased employee engagement and understanding of mission and values via 360 Assessment and Leadership Storytelling sessions",
    ],
  },
];

const pillsData = [
  "100% System integration",
  "5+ Culture rituals activated",
  "92% Uptake in Leadership Language",
  "Culture shifts within 90 days",
];

export const Outcomes = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const columnsRef = useRef(null);
  const pillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      masterTimeline.from(titleRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      });

      masterTimeline.from(
        gsap.utils.toArray(columnsRef.current.children),
        {
          y: 50,
          autoAlpha: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      masterTimeline.from(
        gsap.utils.toArray(pillsRef.current.children),
        {
          y: 50,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-[158.78px] font-Poppins">
      <h2
        ref={titleRef}
        className=" text-[44.99px] leading-[56.4px] tracking-[1.07px] text-center text-Teal"
      >
        Success Metrics & Tangible Outcomes
      </h2>

      <div className="py-[39px] font-Inter flex flex-col gap-[64px]">
        <div
          ref={columnsRef}
          className=" mt-[51px] mx-[96px] max-2xl:mx-[40px] flex max-2xl:flex-col justify-center gap-[40px] items-start text-[18.5px] leading-[33.6px] tracking-[0.32px] "
        >
          {outcomesData.map((item, index) => (
            <div key={index} className="w-[552px] max-2xl:w-full px-[24px]">
              <h3 className="  text-Red44 mb-2">{item.title}</h3>
              <ul className="text-black">
                {item.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          ref={pillsRef}
          className=" px-[160px] max-2xl:px-[40px]  flex flex-wrap gap-[64px] justify-center  max-2xl:justify-start font-OpenSans"
        >
          {pillsData.map((pill, index) => (
            <div
              key={index}
              className="bg-Teal py-[6px] px-[20px] rounded-full text-[19.25px] leading-[35_2px] tracking-[0.32px] text-azure5 flex justify-center items-center"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
