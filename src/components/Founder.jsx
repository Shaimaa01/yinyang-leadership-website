import founderPortrait from "../assets/founder-portrait.jpg";

export const Founder = () => {
  return (
    <section className="mt-[50px] mx-[72px] min-h-[1320px] relative bg-Red87 bg-[url(/src/assets/founder-bg.jpg)] bg-center bg-cover  bg-fixed   overflow-hidden flex items-center justify-center">
      <div className="bg-Red87/63  p-[20px] min-h-[1320px] w-full h-full flex justify-center items-center gap-[210px] max-2xl:gap-[50px] max-2xl:flex-col">
        <img
          src={founderPortrait}
          alt="Tanisha M Jain"
          className="w-[522px] h-auto "
        />

        <div className=" max-w-[741.6px] max-2xl:max-w-full font-Poppins text-black">
          <h2 className=" text-[59.53px] leading-[62px] tracking-[8px] text-black">
            Meet Tanisha M Jain
          </h2>
          <p className="my-[44.5px] font-semibold uppercase text-[14.4px] leading-[14.4px] tracking-[4px] ">
            Founder <span className="mx-2">|</span> Leadership Coach{" "}
            <span className="mx-2">|</span> Culture Facilitator
          </p>

          <div className="text-[17.6px] leading-[26.4px] flex flex-col gap-[20px] ">
            <p>
              Tanisha M Jain has always been drawn to what sits beneath the
              surface—what drives us, connects us, and helps us thrive not just
              as individuals, but as teams and systems. That curiosity has taken
              her across strikingly different rooms: from coaching military
              leaders in the U.S. Army to guiding the culture strategy of the
              world’s first LGBTQ credit union. From the boardrooms of Fortune
              50 companies like Nike and Amazon to grassroots spaces redefining
              what leadership can look like.
            </p>
            <p>
              Through it all, one insight kept returning: when we focus only on
              performance, results may follow—but they rarely sustain. The real
              transformation happens when organizations stop trimming the
              branches and start tending to the roots. This became the seed of
              YinYang Leadership—a practice rooted in the belief that culture is
              not soft, nor secondary. It is the invisible force that determines
              whether people grow or burn out, whether strategy lands or floats.
            </p>
            <p>
              Tanisha is an ICF-certified coach and Columbia University graduate
              who blends over a decade of experience in leadership development
              with a lifelong exploration of Eastern wisdom and Western science.
              She integrates systems thinking, somatic practices, and deep
              dialogue to create spaces where both people and performance can
              evolve—together.
            </p>
            <p>
              She founded YinYang Leadership not as a consultancy, but as a
              collaborative movement. One that brings together best-in-class
              subject matter experts in coaching, talent management, systems
              change, and organizational design—so that clients have a single,
              trusted space for all their people and culture needs, without
              one-size-fits-all solutions.
            </p>
            <p>
              At the core of her work is a bold yet simple belief: when
              organizations lead from who they truly are—not just what they
              do—they unlock a kind of edge that no strategy slide can
              replicate. Culture becomes their differentiator. Their compass.
              And their most human advantage.
            </p>
          </div>

          <a
            href="#"
            className="w-[402px] h-[52px] mt-10 flex justify-center items-center border-2 border-black font-OpenSans  font-semibold uppercase text-[14.4px] leading-[14.4px] tracking-[5px] text-black cursor-pointer"
          >
            Let's connect with Tanisha
          </a>
        </div>
      </div>
    </section>
  );
};

