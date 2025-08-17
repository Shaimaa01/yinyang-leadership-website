import approachDiagram from "../assets/approach-diagram-black.svg";

export const Approach = () => {
  return (
    <section className="mt-[300px] font-Poppins">
      <h2 className="text-[78.99px]  font-bold uppercase  text-Teal leading-[96px] tracking-[-1px] text-center">
        Our Approach
      </h2>

      <p className="mt-[78px] mx-[96px] mb-[96px] flex flex-col gap-[78.79px] opacity-10 font-bold text-[50.77px] leading-[96px] tracking-[-1px] uppercase text-black">
        At Lorem Ipsum Leadership, we partner with you to design culturae
         intentionally. At the heart of our work is the Cultura Compass — our
        signature framework that helps organisations explorare where they are,
        imaginare where they want to go, and chart a grounded path to get there
        <span>
          It’s not a uno-tempus interventio; it’s a dynamica systema for
          long-term mutatio.
        </span>
      </p>

      <img
        src={approachDiagram}
        alt="Venn diagram showing Science, Technology, and Design"
        className="w-full h-auto"
      />
    </section>
  );
};
