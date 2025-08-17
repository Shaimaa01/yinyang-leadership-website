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

// Data for the pill-shaped badges
const pillsData = [
  "100% System integration",
  "5+ Culture rituals activated",
  "92% Uptake in Leadership Language",
  "Culture shifts within 90 days",
];

export const Outcomes = () => {
  return (
    <section className="mt-[158.78px] font-Poppins">
      <h2 className="text-[44.99px] leading-[56.4px] tracking-[1.07px] text-center text-Teal">
        Success Metrics & Tangible Outcomes
      </h2>

      <div className="py-[39px] font-Inter flex flex-col gap-[64px]">
        <div className="mt-[51px] mx-[96px] flex justify-between items-center text-[18.5px] leading-[33.6px] tracking-[0.32px] ">
          {outcomesData.map((item, index) => (
            <div key={index} className="max-w-[552px] px-[24px]">
              <h3 className="  text-Red44 mb-2">{item.title}</h3>
              <ul className="text-black">
                {item.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
        <div className=" px-[160px] flex flex-wrap justify-between  font-OpenSans">
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
