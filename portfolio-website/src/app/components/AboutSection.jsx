import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white mt-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hero-image.jpg" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify mb-5">
            I am a second-year Informatics student at Institut Teknologi
            Bandung, with a keen interest in software engineering. My passion
            lies in developing innovative software solutions, particularly
            creating websites that are both functional and impactful. I am
            dedicated to leveraging my skills to build tools that can be
            genuinely useful to users and solve real-world problems.
          </p>
          <p className="text-base lg:text-lg text-justify mb-5">
            In addition to my academic pursuits, I enjoy watching video games,
            which fuels my creativity and provides inspiration for my work in
            software development. 
          </p>

          <p className="text-base lg:text-lg text-justify">
            With a strong work ethic, effective time management skills, and a
            collaborative spirit, I am excited about the opportunities ahead and
            eager to contribute to projects that drive technological advancement
            and user engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
