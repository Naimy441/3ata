import { Marquee } from "./magicui/marquee";

const phones = [
    { src: "/phones/phone1.png", alt: "Phone 1" },
    { src: "/phones/phone2.png", alt: "Phone 2" },
    { src: "/phones/phone3.png", alt: "Phone 3" },
    { src: "/phones/phone4.png", alt: "Phone 4" },
    { src: "/phones/phone5.png", alt: "Phone 5" },
    { src: "/phones/phone6.png", alt: "Phone 6" },
    { src: "/phones/phone7.png", alt: "Phone 7" },
    { src: "/phones/phone8.png", alt: "Phone 8" },
    { src: "/phones/phone9.png", alt: "Phone 9" },
  ];
  
  function PhoneCard({ src, alt }: { src: string; alt: string }) {
    return (
      <img
        src={src}
        alt={alt}
        className="w-[130px] h-[260px] object-contain"
        draggable={false}
      />
    );
  }
  

export function MarqueeDemoVerticalPhones() {
    const colSize = Math.ceil(phones.length / 3);
    const firstCol = phones.slice(0, colSize);
    const secondCol = phones.slice(colSize, 2 * colSize);
    const thirdCol = phones.slice(2 * colSize);
    return (
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden gap-2">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstCol.map((phone) => (
            <PhoneCard key={phone.alt} {...phone} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondCol.map((phone) => (
            <PhoneCard key={phone.alt} {...phone} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {thirdCol.map((phone) => (
            <PhoneCard key={phone.alt} {...phone} />
          ))}
        </Marquee>
      </div>
    );
  }