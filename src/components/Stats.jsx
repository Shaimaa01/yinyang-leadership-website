const statsData = [
  { percentage: 82, label: "AAA" },
  { percentage: 49, label: "BBB" },
  { percentage: 99, label: "CCC" },
  { percentage: 58, label: "DDD" },
];

export const Stats = () => {
  return (
    <section className=" mt-[75.8px] h-[405px] max-2xl:h-full font-Poppins">
      <h2 className="text-center text-[44px] leading-[52px] font-medium  text-Teal">
        lorem ipsum
      </h2>

      <div className="mt-[115px] flex flex-wrap justify-center items-center gap-[24px] ">
        {statsData.map((stat, index) => {
          const angle = stat.percentage * 3.6;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-[10px] px-[12px] w-full max-w-[332px]"
            >
              <div className="relative h-[180px] w-[180px]">
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    background: `conic-gradient(black ${angle}deg, transparent 0deg)`,
                  }}
                ></div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[44px] leading-[66px] font-Figtree font-bold text-black">
                  {stat.percentage}%
                </div>
              </div>

              <p className=" font-semibold  text-black text-[20px] leading-[20px] font-Figtree">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
