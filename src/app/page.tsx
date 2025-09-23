"use client";

import { ChevronDown, Cross, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const faqs = [
  {
    q: "What is CloudPlay",
    a: "CloudPlay is a Windows gaming PC in the cloud...",
  },
  {
    q: "I have fast internet, why do I still lag or stutter?",
    a: "Latency can come from...",
  },
  { q: "Can I request a new game?", a: "Yes, you can request..." },
  {
    q: "I paid but didn’t receive unlimited hours what next?",
    a: "Please contact support...",
  },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // simple email validation
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;
    // API call ya kuch bhi kar sakte ho yahan
    setIsModalOpen(false); // close modal on successful submit
  };
  return (
    <>
      <header className="md:bg-[#0b0e0fc7] bg-[#191B1F] text-[#B9B9B9] relative md:absolute  md:top-[40px] md:left-2/4 md:-translate-2/4 grid grid-cols-[1fr_32px_1fr_] md:flex items-center  px-[16px] gap-0 md:gap-[16px] z-150 border border-[#0A0A0A] md:rounded-full  h-[56px] md:h-[64px] w-full md:w-[650px]  md:justify-start">
        <div className="block md:hidden">
          {isSidebarOpen ? (
            <X onClick={() => setIsSidebarOpen(false)} />
          ) : (
            <Menu onClick={() => setIsSidebarOpen(true)} />
          )}
        </div>
        <div className="logo justify-self-center md:justify-self-start">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={44}
            height={44}
            className="size-[32px] md:[44px]"
          />
        </div>
        {isSidebarOpen && (
          <nav
            className={`me-auto fixed top-[50px] bg-[#191B1F] md:bg-transparent w-[80%] md:w-auto min-h-screen md:min-h-auto left-0 md:static  md:block ${
              !isSidebarOpen ? "translate-x-[-100%]" : "translate-x-[0]"
            } transition-all`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center md:gap-[16px] sm:gap-[16px]  text-[16px] sm:text-[16px] font-medium">
              <li className="w-full md:w-auto">
                <Link
                  className="font-normal text-[16px] py-[20px] px-[16px] md:py-0 md:px-0 border-b border-[#222529] md:border-b-0 w-full flex items-center md:inline-block"
                  href={"/features"}
                >
                  <Image
                    src={"/images/home_icon.png"}
                    alt="home_icon"
                    width={22}
                    height={22}
                    className="inline-block md:hidden me-2 "
                  />
                  <span className="mt-0.5">Home</span>
                </Link>
              </li>
              <li className="w-full md:w-auto">
                <Link
                  className="font-normal text-[16px] py-[20px] px-[16px] md:py-0 md:px-0 border-b border-[#222529] md:border-b-0 w-full flex items-center md:inline-block"
                  href={"/features"}
                >
                  <Image
                    src={"/images/sparkle_icon.png"}
                    alt="home_icon"
                    width={22}
                    height={22}
                    className="inline-block md:hidden me-2 "
                  />
                  <span className="mt-0.5">Features</span>
                </Link>
              </li>
              <li className="w-full md:w-auto">
                <Link
                  className="font-normal text-[16px] py-[20px] px-[16px] md:py-0 md:px-0 border-b border-[#222529] md:border-b-0 w-full flex items-center md:inline-block"
                  href={"/features"}
                >
                  <Image
                    src={"/images/device_icon.png"}
                    alt="home_icon"
                    width={22}
                    height={22}
                    className="inline-block md:hidden me-2 "
                  />
                  <span className="mt-0.5">Platform</span>
                </Link>
              </li>
              <li className="w-full md:w-auto">
                <Link
                  className="font-normal text-[16px] py-[20px] px-[16px] md:py-0 md:px-0 border-b border-[#222529] md:border-b-0 w-full flex items-center md:inline-block"
                  href={"/features"}
                >
                  <Image
                    src={"/images/pricing_icon.png"}
                    alt="home_icon"
                    width={22}
                    height={22}
                    className="inline-block md:hidden me-2 "
                  />
                  <span className="mt-0.5">Pricing</span>
                </Link>
              </li>
              <li className="w-full md:w-auto">
                <Link
                  className="font-normal text-[16px] py-[20px] px-[16px] md:py-0 md:px-0 border-b border-[#222529] md:border-b-0 w-full flex items-center md:inline-block"
                  href={"/features"}
                >
                  <Image
                    src={"/images/faq_icon.png"}
                    alt="home_icon"
                    width={22}
                    height={22}
                    className="inline-block md:hidden me-2 "
                  />
                  <span className="mt-0.5">FAQ</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-secondary h-[42px] md:flex justify-center items-center hidden  "
          >
            Join as Super User
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-underline block md:hidden max-w-max ms-auto"
          >
            Join as Super User
          </button>
        </div>
      </header>
      <section className="mt-0 md:mt-2">
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
            <div className="relative overflow-hidden">
              <Image
                className="w-full rounded-3xl hidden md:block"
                src="/images/hero-ban.png"
                alt="herojpg"
                width={1000}
                height={500}
              />
              <Image
                className="w-[960px]  rounded-3xl hidden md:block absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-[200px] fade-up z-10"
                src="/images/pc.png"
                alt="herojpg"
                width={960}
                height={500}
              />
              <div className="absolute -bottom-15  left-2/4 -translate-x-2/4 max-w-[1200px] flex justify-between w-full items-end">
                <div className="relative w-[310px] h-[432px]">
                  <Image
                    className="w-[150px] h-[216px] absolute left-0 translate-x-[60px] translate-y-[-25px] bottom-30 animate-slide-rotate-left-mirror z-10"
                    src="/images/Elliot.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                  <Image
                    className="w-[160px] h-[216px] absolute left-0 translate-x-[-140px] translate-y-[35px] bottom-50 animate-slide-rotate-anti-mirror"
                    src="/images/musha.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                  <Image
                    className="w-[130px] h-[216px] absolute left-0 translate-x-[50px] bottom-0 animate-fade-slide-overshoot-mirror z-10"
                    src="/images/prag.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                  <Image
                    className="w-[160px] h-[216px] absolute left-0 translate-x-[-180px] translate-y-[30px] bottom-6 animate-fade-slide-overshoot-mirror2"
                    src="/images/animo.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                </div>

                <div className="relative w-[310px] h-[432px]">
                  <Image
                    className="w-[130px] h-[216px] absolute right-0 rotate-[0deg] translate-x-[-25px]  translate-y-[-25px] bottom-40 animate-slide-rotate-left z-10  "
                    src="/images/mafia.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                  <Image
                    className="w-[160px] h-[216px] absolute right-0 rotate-[0deg] translate-x-[80px]  translate-y-[35px] bottom-40  animate-slide-rotate-anti   "
                    src="/images/evil1.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                  <Image
                    className="w-[130px] h-[216px] absolute right-0 translate-x-[-10px] bottom-0 animate-fade-slide-overshoot z-10"
                    src="/images/uma.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                  <Image
                    className="w-[160px] h-[216px] absolute right-0 translate-x-[100px] translate-y-[30px] bottom-0 animate-fade-slide-overshoot2"
                    src="/images/reson.png"
                    alt="herojpg"
                    width={130}
                    height={216}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how_it_works py-[40px] md:py-[80px]">
        <div className="max-w-[1120px] mx-auto px-[16px]">
          <div className="text-center">
            <h2 className="heading-secondary mb-[8px]">How it works</h2>
            <p className="para-primary mb-[24px] md:mb-[42px]">
              Play, create, or work on any device with the power of a full
              Windows gaming PC in the cloud.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
            <div className="rounded-[16px] p-[2px] bg-gradient-to-b from-[#0EE70120] to-[#0EE70100]">
              <div className="card text-white relative text-center py-[24px] px-[10px] bg-[linear-gradient(to_bottom,#191B1F,#101215)] rounded-[14px]">
                <h4 className="text-[16px] font-normal">Step 1</h4>

                <div className=" h-[90px] w-full md:h-[140px] md:w-[164px] grid place-items-center mx-auto">
                  <Image
                    src="/images/cloud.png"
                    alt="step-1"
                    width={100}
                    height={100}
                    className="block mx-auto w-auto h-auto"
                  />
                </div>

                <p className="text-[12px] md:text-[14px] font-light text-[#B9B9B9]">
                  Game lives in the cloud —{" "}
                  <span className="block"> nothing to install</span>
                </p>
                <Image
                  src="/images/texture.png"
                  alt="step-1"
                  width={100}
                  height={100}
                  className="block mx-auto invert hue-rotate-15 absolute bottom-0 left-0 rounded-b-[14px] w-full opacity-40"
                />
              </div>
            </div>
            <div className="rounded-[16px] p-[2px] bg-gradient-to-b from-[#0EE70120] to-[#0EE70100]">
              <div className="card text-white relative text-center py-[24px] px-[10px] bg-[linear-gradient(to_bottom,#191B1F,#101215)] rounded-[14px]">
                <h4 className="text-[16px] font-normal">Step 2</h4>

                <div className=" h-[90px] w-full md:h-[140px] md:w-[164px] grid place-items-center mx-auto">
                  <Image
                    src="/images/wifi.png"
                    alt="step-1"
                    width={100}
                    height={100}
                    className="block mx-auto w-auto h-auto"
                  />
                </div>

                <p className="text-[12px] md:text-[14px] font-light text-[#B9B9B9]">
                  Game lives in the cloud —{" "}
                  <span className="block"> nothing to install</span>
                </p>
                <Image
                  src="/images/texture.png"
                  alt="step-1"
                  width={100}
                  height={100}
                  className="block mx-auto invert hue-rotate-15 absolute bottom-0 left-0 rounded-b-[14px] w-full opacity-40"
                />
              </div>
            </div>
            <div className="rounded-[16px] p-[2px] bg-gradient-to-b from-[#0EE70120] to-[#0EE70100]">
              <div className="card text-white relative text-center py-[24px] px-[10px] bg-[linear-gradient(to_bottom,#191B1F,#101215)] rounded-[14px]">
                <h4 className="text-[16px] font-normal">Step 3</h4>

                <div className=" h-[90px] w-full md:h-[140px] md:w-[164px] grid place-items-center mx-auto">
                  <Image
                    src="/images/game.png"
                    alt="step-1"
                    width={100}
                    height={100}
                    className="block mx-auto w-auto h-auto"
                  />
                </div>

                <p className="text-[12px] md:text-[14px] font-light text-[#B9B9B9]">
                  Game lives in the cloud —{" "}
                  <span className="block"> nothing to install</span>
                </p>
                <Image
                  src="/images/texture.png"
                  alt="step-1"
                  width={100}
                  height={100}
                  className="block mx-auto invert hue-rotate-15 absolute bottom-0 left-0 rounded-b-[14px] w-full opacity-40"
                />
              </div>
            </div>
            <div className="rounded-[16px] p-[2px] bg-gradient-to-b from-[#0EE70120] to-[#0EE70100]">
              <div className="card text-white relative text-center py-[24px] px-[10px] bg-[linear-gradient(to_bottom,#191B1F,#101215)] rounded-[14px]">
                <h4 className="text-[16px] font-normal">Step 4</h4>

                <div className=" h-[90px] w-full md:h-[140px] md:w-[164px] grid place-items-center mx-auto">
                  <Image
                    src="/images/computer.png"
                    alt="step-1"
                    width={100}
                    height={100}
                    className="block mx-auto w-auto h-auto"
                  />
                </div>

                <p className="text-[12px] md:text-[14px] font-light text-[#B9B9B9]">
                  Game lives in the cloud —{" "}
                  <span className="block"> nothing to install</span>
                </p>
                <Image
                  src="/images/texture.png"
                  alt="step-1"
                  width={100}
                  height={100}
                  className="block mx-auto invert hue-rotate-15 absolute bottom-0 left-0 rounded-b-[14px] w-full opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container mx-auto">
          <Image
            src={"/images/platform.jpg"}
            alt="platform_image"
            height={100}
            width={500}
            className="w-full  rounded-3xl hidden md:block"
          />

          <div className="text-center static md:absolute w-full top-0 left-0 h-full flex justify-center items-center ">
            <div>
              {" "}
              <h2 className="heading-secondary mb-[8px]">
                Platform & Compatibility
              </h2>
              <p className="para-primary mb-[28px] md:mb-[42px]">Works on:</p>
              <div className="grid grid-cols-2 md:flex  gap-y-[42px] md:gap-y-[30px] justify-between w-full md:w-[1120px]  mx-auto items-start md:items-center">
                <div className=" relative px-4 after:content-[''] md:after:absolute after:top-2/4  after:-translate-2/4 after:-right-8 after:h-[77px] after:w-px after:bg-[#B9B9B930] last:after:hidden">
                  <h4 className="text-[16px] text-[#B9B9B9] font-normal mb-[22px]">
                    Laptops & PCs
                  </h4>
                  <ul className="flex  md:flex-row gap-[10px] md:gap-[30px] justify-center md:justify-start items-center">
                    <li className="w-full md:w-auto">
                      <Image
                        src="/images/windows-icon.png"
                        alt="platforms"
                        width={36}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        Windows
                      </span>
                    </li>
                    <li>
                      <Image
                        src="/images/apple.png"
                        alt="platforms"
                        width={29}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        MacOS
                      </span>
                    </li>
                    <li>
                      <Image
                        src="/images/linux.png"
                        alt="platforms"
                        width={36}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        Linux
                      </span>
                    </li>
                  </ul>
                </div>
                <div className=" relative px-4 after:content-[''] md:after:absolute after:top-2/4  after:-translate-2/4 after:-right-8 after:h-[77px] after:w-px after:bg-[#B9B9B930] last:after:hidden">
                  <h4 className="text-[16px] text-[#B9B9B9] font-normal mb-[22px]">
                    Mobile
                  </h4>
                  <ul className="flex  md:flex-row gap-[10px] md:gap-[30px] justify-center md:justify-start items-center">
                    <li>
                      <Image
                        src="/images/ios.png"
                        alt="platforms"
                        width={36}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        iOS
                      </span>
                    </li>
                    <li>
                      <Image
                        src="/images/android.png"
                        alt="platforms"
                        width={36}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        Android
                      </span>
                    </li>
                  </ul>
                </div>
                <div className=" relative px-4 after:content-[''] md:after:absolute after:top-2/4  after:-translate-2/4 after:-right-8 after:h-[77px] after:w-px after:bg-[#B9B9B930] last:after:hidden">
                  <h4 className="text-[16px] text-[#B9B9B9] font-normal mb-[22px]">
                    Smart Tvs
                  </h4>
                  <ul className="flex  md:flex-row gap-[10px] md:gap-[30px] justify-center md:justify-start items-center">
                    <li>
                      <Image
                        src="/images/apple_tv.png"
                        alt="platforms"
                        width={36}
                        height={36}
                        className="block mx-auto w-auto h-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        Apple TV
                      </span>
                    </li>
                    <li>
                      <Image
                        src="/images/android_tv.png"
                        alt="platforms"
                        width={36}
                        height={36}
                        className="block mx-auto w-[80px] h-auto "
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        Android TV
                      </span>
                    </li>
                  </ul>
                </div>
                <div className=" relative px-4 after:content-[''] md:after:absolute after:top-2/4  after:-translate-2/4 after:-right-8 after:h-[77px] after:w-px after:bg-[#B9B9B930] last:after:hidden">
                  <h4 className="text-[16px] text-[#B9B9B9] font-normal mb-[22px]">
                    Tablets
                  </h4>
                  <ul className="flex  md:flex-row gap-[10px] md:gap-[30px] justify-center md:justify-start items-center ">
                    <li>
                      <Image
                        src="/images/ios.png"
                        alt="platforms"
                        width={42}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        iOS
                      </span>
                    </li>
                    <li>
                      <Image
                        src="/images/android.png"
                        alt="platforms"
                        width={40}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        Android
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <h4 className="text-[16px] text-[#B9B9B9] font-normal mb-[22px]">
                    Handhelds
                  </h4>
                  <ul className="flex  md:flex-row gap-[10px] md:gap-[30px] justify-center md:justify-start items-center">
                    <li>
                      <Image
                        src="/images/steamdeck.png"
                        alt="platforms"
                        width={24}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        Steamdeck
                      </span>
                    </li>
                    <li>
                      <Image
                        src="/images/PlayStation.png"
                        alt="platforms"
                        width={100}
                        height={36}
                        className="block mx-auto"
                      />
                      <span className="text-[12px] mt-[12px] block text-[#B9B9B9]">
                        PSP Vita
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="text-[12px] mt-[32px]  block md:hidden text-[#B9B9B9]">
                Supported Inputs: Touch, Mouse, Keyboard, Gamepads
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative  marque md:pt-[80px] pt-[40px] ">
        <div className="container mx-auto text-center px-[16px]">
          <h2 className="heading-secondary mb-[8px]">
            Discover All The Trending Games
          </h2>
          <p className="para-primary mb-[16px] md:mb-[42px] max-w-[310px] md:max-w-full mx-auto">
            Play, create, or work on any device with the power of a full Windows
            gaming PC in the cloud.
          </p>
        </div>
        <Marquee className="mb-[16px]" direction="right" autoFill speed={20}>
          <Image
            src="/images/game1.jpg"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px]  h-[150px] md:h-[406px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game2.jpg"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px]  h-[150px] md:h-[406px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game3.jpg"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px]  h-[150px] md:h-[406px] me-[6px] md:me-[16px]"
          />
        </Marquee>
        <Marquee className="mb-[16px]" autoFill speed={20}>
          <Image
            src="/images/game4.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game5.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game6.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game7.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game8.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game9.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game9.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
        </Marquee>
        <Marquee className="" direction="right" autoFill speed={20}>
          <Image
            src="/images/game11.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game12.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game13.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game14.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game15.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
          <Image
            src="/images/game16.png"
            alt="marquee"
            width={200}
            height={100}
            className=" w-auto  rounded-[16px] h-[70px] md:h-[120px] me-[6px] md:me-[16px]"
          />
        </Marquee>
      </section>
      <section className="pricing md:py-[80px] pt-[40px]">
        <div className="max-w-[1006px] mx-auto px-[16px] []">
          <div className="text-center">
            <h2 className="heading-secondary mb-[8px]">Pricing</h2>
            <p className="para-primary mb-[16px] md:mb-[42px]">
              Play, create, or work on any device with the power of a full
              Windows gaming PC in the cloud.
            </p>

            <div className=" flex gap-[12px] overflow-x-auto no-scrollbar md:grid md:grid-cols-3 md:gap-[24px] snap-x snap-mandatory ">
              <div className="col min-w-[290px] md:min-auto p-[18px] md:p-[24px] bg-[#191B1F] rounded-[16px] snap-start">
                <h5 className=" max-w-max text-[20px] font-semibold bg-[#131517] text-[#DBDBDB] px-[8px] py-[4pxs] mb-[20px] rounded-[8px]">
                  BASIC
                </h5>

                <ul className="space-y-[10px]">
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/FrameCorners.png" alt="" />
                    1080p @ 60 FPS streaming
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/Clock.png" alt="" />3 hours/day play limit
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CardsThree.png" alt="" />
                    Limited game libraryg
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CellTower.png" alt="" />
                    Standard queue priority
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CloudArrowUp.png" alt="" />
                    Cloud saves{" "}
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/Devices.png" alt="" />
                    Up to 4 devices (concurrent){" "}
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/SketchLogo.png" alt="" />
                    Up to 4 devices (concurrent){" "}
                  </li>
                </ul>

                <h4 className=" text-white text-[48px] font-medium flex flex-col gap-2 items-start mt-[100px]">
                  $0.00{" "}
                  <span className="text-[#9A9A9A] text-[14px] font-light">
                    For 30 days
                  </span>
                </h4>

                <ul className="flex gap-2 items-center mt-[16px]">
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    1
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    7
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    30
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    180
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    365
                  </li>
                </ul>
                <button className="btn-primary mt-[20px] w-full">
                  Subscribe
                </button>
              </div>
              <div className="col min-w-[290px] md:min-auto p-[18px] md:p-[24px] bg-[#191B1F] rounded-[16px] snap-start">
                <h5 className=" max-w-max text-[20px] font-semibold bg-[#2C2622] text-[#E2894A] px-[8px] py-[4pxs] mb-[20px] rounded-[8px]">
                  PREMIUM
                </h5>

                <ul className="space-y-[10px]">
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/FrameCorners.png" alt="" />
                    1080p @ 60 FPS streaming
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/Clock.png" alt="" />3 hours/day play limit
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CardsThree.png" alt="" />
                    Limited game libraryg
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CellTower.png" alt="" />
                    Standard queue priority
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CloudArrowUp.png" alt="" />
                    Cloud saves{" "}
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/Devices.png" alt="" />
                    Up to 4 devices (concurrent){" "}
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/SketchLogo.png" alt="" />
                    Up to 4 devices (concurrent){" "}
                  </li>
                </ul>

                <h4 className=" text-white text-[48px] font-medium flex flex-col gap-2 items-start mt-[100px]">
                  $0.00{" "}
                  <span className="text-[#9A9A9A] text-[14px] font-light">
                    For 30 days
                  </span>
                </h4>

                <ul className="flex gap-2 items-center mt-[16px]">
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    1
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    7
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    30
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    180
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    365
                  </li>
                </ul>
                <button className="btn-primary mt-[20px] w-full">
                  Subscribe
                </button>
              </div>
              <div className="col min-w-[290px] md:min-auto p-[18px] md:p-[24px]  bg-[linear-gradient(to_bottom,#332E1147,#191B1F)] rounded-[16px] snap-start">
                <h5 className=" max-w-max text-[20px] font-semibold bg-[#332E11] text-[#FFBC3F] px-[8px] py-[4pxs] mb-[20px] rounded-[8px]">
                  ULTIMATE
                </h5>

                <ul className="space-y-[10px]">
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/FrameCorners.png" alt="" />
                    1080p @ 60 FPS streaming
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/Clock.png" alt="" />3 hours/day play limit
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CardsThree.png" alt="" />
                    Limited game libraryg
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CellTower.png" alt="" />
                    Standard queue priority
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/CloudArrowUp.png" alt="" />
                    Cloud saves{" "}
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/Devices.png" alt="" />
                    Up to 4 devices (concurrent){" "}
                  </li>
                  <li className="text-[14px] flex gap-2">
                    {" "}
                    <img src="/images/SketchLogo.png" alt="" />
                    Up to 4 devices (concurrent){" "}
                  </li>
                </ul>

                <h4 className=" text-white text-[48px] font-medium flex flex-col gap-2 items-start mt-[100px]">
                  $0.00{" "}
                  <span className="text-[#9A9A9A] text-[14px] font-light">
                    For 30 days
                  </span>
                </h4>

                <ul className="flex gap-2 items-center mt-[16px]">
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    1
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    7
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    30
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    180
                  </li>
                  <li className=" border border-[#34363C] rounded-[8px] bg-[#17191D] w-[50px] h-[32px] grid place-items-center">
                    365
                  </li>
                </ul>
                <button className="btn-primary mt-[20px] w-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq  pt-[40px] md:pt-[80px]">
        <div className="container mx-auto px-[16px]">
          <div className="text-center md:mb-[42px] mb-[16px]">
            <h2 className="heading-secondary mb-[8px]">FAQ</h2>
            <p className="para-primary md:mb-[42px] mb-[16px]">
              Play, create, or work on any device with the power of a full
              Windows gaming PC in the cloud.
            </p>
          </div>

          <div className="space-y-4 max-w-[1002px] mx-auto">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-md bg-[#191B1F] text-white overflow-hidden border border-[#191B1F] 
              transform transition-transform duration-300
              ${open === idx ? "scale-[1.02] shadow-lg shadow-black/50" : ""}`}
              >
                <button
                  className="flex w-full items-center justify-between px-[12px] py-[17px] md:px-5 md:py-4 text-left"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span className="text-[12px] md:text-base">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      open === idx ? "rotate-360" : "rotate-270"
                    }`}
                  />
                </button>
                {open === idx && (
                  <div
                    className={`px-5 pb-4 text-gray-400 text-sm border-t border-[#191B1F]
              transition-all duration-300 ease-in-out
              ${
                open === idx
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="instant ">
        <div className="container mx-auto relative after:content-[''] after:absolute after:top-0  after:right-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#0B0E0F] after:to-[#0B0E0F00]">
          <Image
            src={"/images/footer-bg.png"}
            alt="platform_image"
            height={1199}
            width={500}
            className="w-[1200px] mx-auto block h-[310px] md:h-[500px] object-cover"
          />
          <div className=" absolute z-30 w-full h-full grid place-items-center top-0 left-0 text-center">
            <div>
              <h2 className="text-[32px] sm:text-[48px]  font-semibold leading-[36px] sm:leading-[80px]  mb-[8px] w-[228px] md:w-full mx-auto bg-gradient-to-r from-gray-100/5 via-gray-200 to-gray-100/5  inline-block text-transparent bg-clip-text md:text-white">
                Play Instantly. Anywhere.
              </h2>
              <p className="para-primary md:mb-[42px] mb-7">
                Join early. No downloads. No delay.
              </p>
              <button className="btn-primary">Join as Super User</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#0B0C0E] text-white ">
        {/* Background texture */}
        <Image
          src="/images/texture2.png"
          alt="platform_image"
          height={242}
          width={1000}
          className="object-cover opacity-20 pointer-events-none w-full h-[242px] invert"
        />

        {/* Content Wrapper */}
        <div className="absolute top-0 left-0  z-10 w-full h-full mx-auto  flex flex-col  items-center justify-center ">
          {/* Left - Logo + Nav */}
          <div className="flex flex-col md:flex-row gap-[32px] md:gap-[48px] items-center mb-[42px] md:mb-[60px]">
            {/* Logo */}
            <Image
              src="/images/logo_full.png"
              alt="logo"
              width={160}
              height={44}
              className="h-auto w-[130px] md:w-auto"
            />

            {/* Nav Links */}
            <ul className="flex gap-[32px] md:gap-[48px] text-[#B9B9B9] text-[16px] md:text-[14px] font-normal">
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-white">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Socials */}
          <div className="flex gap-[42px] md:gap-5 items-center justify-center md:justify-end mb-[40px] md:mb-[20px]">
            <Link href="#">
              <Image
                src="/images/LinkedinLogo.png"
                alt="youtube"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/DiscordLogo.png"
                alt="twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/XLogo.png"
                alt="discord"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/YoutubeLogo.png"
                alt="github"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <p className="text-[#B9B9B9] text-[14px] font-light">
            {" "}
            © 2024 Cloudplay. All rights reserved.
          </p>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal absolute top-0 left-0 w-full h-screen bg-black/50 z-50 grid place-items-center">
          <div className="modal_body relative z-20 bg-[#0B0E0F]  p-[16px] md:p-[32px]  text-white max-w-[90%] md:max-w-[515px] w-full rounded-[12px] border border-[#272727]">
            <h3 className="text-[18px] md:text-[22px] font-normal md:font-semibold mb-[10px]">
              Join the waitlist
            </h3>
            <p className="text-[#B9B9B9] text-[12px] md:text-[18px] font-normal  mb-[32px]">
              Be the First to Know when we launch. Enter your email to get
              notified
            </p>
            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-1 md:grid-cols-[1fr_126px] gap-[12px] items-end"
            >
              <label className="gap-[8px] flex flex-col text-[12px] md:text-[18px]">
                Enter Your Email
                <input
                  placeholder="Please enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[48px] md:h-[56px] email_put bg-[#171717] py-[15px] px-[16px] md:py-[19px] md:px-[12px] text-[#fff] placeholder:text-[#B9B9B9] rounded-[8px] md:rounded-[12px] border border-[#2A2A2A] focus:outline-none focus:ring focus:ring-[#00E70150] focus-visible:outline-none focus-visible:ring focus-visible:ring-[#00E701"
                />
              </label>

              <button
                type="submit"
                disabled={!isValidEmail(email)}
                className={`
             h-[48px] md:h-[56px] text-[18px] md:text-[20px]  py-[14px] md:px-6 md:py-2  rounded-[8px] md:rounded-[12px] font-semibold transition
              text-[#0B0E0F]
              bg-[#00E701]
              disabled:bg-[#424242] disabled:text-[#7E7E7E] disabled:cursor-not-allowed
              hover:bg-[#22F423]
              active:bg-[#3FFF40] 
            `}
              >
                Send
              </button>
            </form>
          </div>
          <div
            className="modal fixed top-0 left-0 w-full h-screen bg-black/50 grid place-items-center"
            onClick={() => setIsModalOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
