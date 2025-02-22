import Image from "next/image";

const HeroImages = () => {
  return (
    <>
      <Image 
        src="/engineer.png" 
        alt="Engineer 1" 
        width={400} 
        height={250} 
        className="absolute bottom-0 left-0 sm:left-0 md:left-[-5%] lg:left-[-5%] rounded-lg max-w-[45%] sm:max-w-[40%] md:max-w-[35%] lg:max-w-lg"
      />
      <Image 
        src="/engineer2.png" 
        alt="Engineer 2" 
        width={400} 
        height={250} 
        className="absolute bottom-[-20px] right-0 sm:right-[-25%] md:right-[-5%] lg:right-[-2%] sm:translate-x-[-5%] md:translate-x-0 rounded-lg max-w-[45%] sm:max-w-[40%] md:max-w-[35%] lg:max-w-lg"
      />
    </>
  );
};

export default HeroImages;
