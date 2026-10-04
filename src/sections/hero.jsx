function Hero() {
    return (
      <section
        id="home"
        className="h-screen overflow-hidden bg-[#F7F3EA] px-4 pt-20 sm:px-8 sm:pt-24 lg:px-10"
      >
        <div className="mx-auto flex h-full max-w-[1500px] flex-col">
  
          <div className="relative flex min-h-0 flex-1 flex-col items-center">
  
            {/* Intro */}
            <p className="mt-3 text-[9px] uppercase tracking-[0.28em] opacity-40 sm:mt-2 sm:text-[10px]">
              Hello, I'm
            </p>
  
            <h1 className="mt-2 text-center text-5xl font-semibold leading-none tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Vasu Aggarwal
            </h1>
  
            {/* Roles */}
            <div className="mt-4 flex w-full max-w-[650px] items-center justify-center gap-8 sm:gap-12">
  
              <p className="text-center text-[9px] font-medium uppercase tracking-[0.14em] opacity-60 sm:text-[10px]">
                Event Producer
              </p>
  
              <p className="text-center text-[9px] font-medium uppercase tracking-[0.14em] opacity-60 sm:text-[10px]">
                Artist Manager
              </p>
  
              <p className="text-center text-[9px] font-medium uppercase tracking-[0.12em] opacity-60 sm:text-[10px]">
                Creative Coordinator
              </p>
  
            </div>
  
            {/* =========================
                EVENT IMAGE MARQUEE
                ========================= */}
  
            <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden sm:mt-8">
  
              <div className="event-marquee-track flex w-max gap-3">
  
                {/* First set */}
                <div className="flex shrink-0 gap-3">
  
                  <img
                    src="/event-1.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-2.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-3.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-4.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-5.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-6.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-7.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-8.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                </div>
  
                {/* Duplicate set for seamless loop */}
                <div className="flex shrink-0 gap-3">
  
                  <img
                    src="/event-1.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-2.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-3.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-4.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-5.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-6.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-7.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                  <img
                    src="/event-8.jpg"
                    alt="Event"
                    className="h-[100px] w-[155px] shrink-0 rounded-xl object-cover sm:h-[130px] sm:w-[200px]"
                  />
  
                </div>
  
              </div>
            </div>
  
            {/* =========================
                HERO VISUAL AREA
                ========================= */}
  
            <div className="relative mt-4 min-h-0 w-full flex-1 sm:mt-5">
  
              {/* Audience */}
              <div className="absolute left-[2%] top-[15%] z-10 hidden w-[150px] -rotate-3 bg-[#E8D59E] p-4 lg:block xl:w-[175px]">
                <p className="text-[8px] uppercase tracking-[0.15em] opacity-45">
                  Audience
                </p>
  
                <p className="mt-8 text-3xl font-semibold tracking-[-0.06em]">
                  2,000+
                </p>
  
                <p className="mt-1 text-[8px] uppercase tracking-[0.12em] opacity-45">
                  Reached
                </p>
              </div>
  
              {/* Content */}
              <div className="absolute bottom-[15%] left-[10%] z-10 hidden w-[145px] rotate-3 bg-[#C98F7B] p-4 lg:block xl:w-[170px]">
                <p className="text-[8px] uppercase tracking-[0.15em] opacity-45">
                  Content
                </p>
  
                <p className="mt-8 text-3xl font-semibold tracking-[-0.06em]">
                  400+
                </p>
  
                <p className="mt-1 text-[8px] uppercase tracking-[0.12em] opacity-45">
                  Reels created
                </p>
              </div>
  
              {/* Digital Reach */}
              <div className="absolute right-[2%] top-[13%] z-10 hidden w-[150px] rotate-3 bg-[#A8AD82] p-4 lg:block xl:w-[175px]">
                <p className="text-[8px] uppercase tracking-[0.15em] opacity-45">
                  Digital Reach
                </p>
  
                <p className="mt-8 text-3xl font-semibold tracking-[-0.06em]">
                  1.5M
                </p>
  
                <p className="mt-1 text-[8px] uppercase tracking-[0.12em] opacity-45">
                  Total reach
                </p>
              </div>
  
              {/* Sponsorship */}
              <div className="absolute bottom-[15%] right-[10%] z-10 hidden w-[145px] -rotate-3 bg-[#332E2A] p-4 text-[#F7F3EA] lg:block xl:w-[170px]">
                <p className="text-[8px] uppercase tracking-[0.15em] opacity-40">
                  Sponsorship
                </p>
  
                <p className="mt-8 text-3xl font-semibold tracking-[-0.06em]">
                  ₹6L
                </p>
  
                <p className="mt-1 text-[8px] uppercase tracking-[0.12em] opacity-40">
                  Raised
                </p>
              </div>
  
              {/* Small decorative shapes */}
              <div className="absolute left-[27%] top-[38%] z-10 hidden h-8 w-8 rotate-12 bg-[#C98F7B] lg:block" />
  
              <div className="absolute right-[27%] top-[35%] z-10 hidden h-8 w-8 rounded-full bg-[#E8D59E] lg:block" />
  
              {/* Vasu */}
              <div className="absolute bottom-0 left-1/2 z-20 h-[70vh] max-h-full -translate-x-1/2">
                <img
                  src="/vasu.jpg"
                  alt="Vasu Aggarwal"
                  className="relative z-10 h-full w-auto max-w-[75vw] object-contain object-bottom"
                />
              </div>
  
              {/* Mobile stats */}
              <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-between gap-2 lg:hidden">
  
                <div className="bg-[#E8D59E] px-3 py-2">
                  <p className="text-[7px] uppercase tracking-[0.1em] opacity-50">
                    Audience
                  </p>
  
                  <p className="mt-1 text-sm font-semibold">
                    2,000+
                  </p>
                </div>
  
                <div className="bg-[#A8AD82] px-3 py-2">
                  <p className="text-[7px] uppercase tracking-[0.1em] opacity-50">
                    Reach
                  </p>
  
                  <p className="mt-1 text-sm font-semibold">
                    1.5M
                  </p>
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          {/* Bottom lane */}
          <div className="mx-[-1rem] flex shrink-0 items-center justify-between bg-[#E8D59E]/45 px-4 py-3 sm:mx-[-2rem] sm:px-8 lg:mx-[-2.5rem] lg:px-10">
  
            <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#332E2A]/65 sm:text-[10px]">
              Punjab, India
            </p>
  
            <p className="hidden text-[8px] font-medium uppercase tracking-[0.16em] text-[#332E2A]/70 sm:block sm:text-[10px]">
              Creating experiences that stay.
            </p>
  
            <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#332E2A]/65 sm:text-[10px]">
              Scroll ↓
            </p>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Hero;