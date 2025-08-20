import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import aboutImage from "../assets/about/about.png";
import about2Image from "../assets/about/about2.png";
import about3Image from "../assets/about/about3.png";
import about4Image from "../assets/about/about4.png";
import about5Image from "../assets/about/about5.png";
import about6Image from "../assets/about/about6.png";
import about7Image from "../assets/about/about7.png";

const imagesData = [
  {
    src: aboutImage,
    alt: "Team meeting 1",
    w: 601.6,
    x: 50,
    y: 50,
    rotate: 4.04,
    z: 10,
  },
  {
    src: about2Image,
    alt: "Team meeting 2",
    w: 575.8,
    x: 50,
    y: 56,
    rotate: 5.13,
    z: 9,
  },
  {
    src: about3Image,
    alt: "Team meeting 3",
    w: 550,
    x: 54,
    y: 46,
    rotate: -0.11,
    z: 8,
  },
  {
    src: about4Image,
    alt: "Team meeting 4",
    w: 524,
    x: 50,
    y: 50,
    rotate: -2.44,
    z: 7,
  },
  {
    src: about5Image,
    alt: "Team meeting 5",
    w: 498,
    x: 50,
    y: 50,
    rotate: 9.25,
    z: 6,
  },
  {
    src: about6Image,
    alt: "Team meeting 6",
    w: 354,
    x: 50,
    y: 50,
    rotate: 0.08,
    z: 5,
  },
  {
    src: about7Image,
    alt: "Team meeting 7",
    w: 446,
    x: 50,
    y: 50,
    rotate: -1.06,
    z: 4,
  },
];

export const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphsRef = useRef(null);
  const imageContainerRef = useRef(null);

  const [currentImages, setCurrentImages] = useState(imagesData);

  const handleImageClick = (clickedIndex) => {
    if (currentImages[clickedIndex].z === 10) {
      const newImages = [...currentImages];
      const clickedImage = newImages.splice(clickedIndex, 1)[0];
      newImages.push(clickedImage);
      const reorderedImages = newImages.map((img, i) => ({
        ...img,
        z: 10 - i,
      }));

      setCurrentImages(reorderedImages);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      masterTimeline.from(titleRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      });
      masterTimeline.from(
        gsap.utils.toArray(paragraphsRef.current.children),
        {
          y: 50,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      masterTimeline.from(
        imageContainerRef.current,
        {
          scale: 0.8,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-[75.8px] mx-[20px] flex justify-center items-center gap-[11px] max-2xl:flex-col"
    >
      <div className="max-w-[704px] max-2xl:max-w-full font-Poppins ">
        <h2
          ref={titleRef}
          className="mb-[55.89px] text-[64px]  leading-[67.2px] tracking-[-1.28px] text-Teal"
        >
          About us:
        </h2>
        <div
          ref={paragraphsRef}
          className="flex flex-col gap-[10.79px] text-[18.87px] leading-[33.6px] tracking-[0.32px] text-black"
        >
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
            its impact is anything but invisible.This became the seed of YinYang
            Leadership. Inspired by the ancient philosophy that seemingly
            opposite forces can exist in harmony, we help organisations hold
            space for both vulnerability and strength, stability and evolution,
            introspection and bold action.
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

      <div
        ref={imageContainerRef}
        className="w-[752px] h-[750px] flex justify-center items-center relative  "
      >
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{
              zIndex: image.z,
              transform: ` translate(-${image.x}%, -${image.y}%)  rotate(${image.rotate}deg)`,
              maxWidth: `${image.w}px`,
            }}
            onClick={() => handleImageClick(index)}
            className="absolute top-1/2 left-1/2  h-auto rounded-[4px] shadow-[2px_4px_8px_0px_#00101980] cursor-pointer transition-transform ease-in-out hover:scale-110 hover:rotate-10 "
          />
        ))}
      </div>
    </section>
  );
};
