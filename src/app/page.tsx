import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto relative">
        {" "}
        <div className="hero-ban  ">
          <div className="head-text text-center absolute top-[50px] sm:top-[100px] left-0 w-full z-20">
            <h3 className="heading-primary mb-[8px] sm:mb-0 max-w-[390px] mx-auto sm:max-w-full sm:mx-0 ">
              Play Instantly. Anywhere.
            </h3>
            <p className="para-primary mb-[30px] sm:mb-[30px]">
              Join early. No downloads. No delay.
            </p>
            <button className="btn-primary">Join as Super User</button>
          </div>
          <Image
            className="w-full  block md:hidden"
            src="/images/mobile-ban.jpg"
            alt="herojpg"
            width={1000}
            height={500}
          />
          <Image
            className="w-full rounded-3xl hidden md:block"
            src="/images/new-hero-bg.jpg"
            alt="herojpg"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
