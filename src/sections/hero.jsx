function Hero() {
    return (
      <section
        id="home"
        className="h-auto overflow-hidden bg-[#F7F3EA] px-4 pt-20 sm:min-h-screen sm:px-8 sm:pt-24 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1500px] flex-col sm:h-full">
          <div className="relative flex flex-col items-center">
  
            {/* Intro */}
            <p className="mt-3 text-[9px] uppercase tracking-[0.28em] opacity-40 sm:mt-2 sm:text-[10px]">
              Hello, I'm
            </p>
  
            <h1 className="mt-2 text-center text-4xl font-semibold leading-none tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Vasu Aggarwal
            </h1>
  
            {/* Roles */}
            <div className="mt-4 flex w-full max-w-[650px] items-center justify-center gap-3 sm:gap-5">
              <p className="text-center text-[9px] font-medium uppercase tracking-[0.12em] opacity-60 sm:text-[10px] sm:tracking-[0.14em]">
                Event Producer
              </p>
  
              <p className="text-center text-[9px] font-medium uppercase tracking-[0.12em] opacity-60 sm:text-[10px] sm:tracking-[0.14em]">
                Artist Manager
              </p>
  
              <p className="text-center text-[9px] font-medium uppercase tracking-[0.1em] opacity-60 sm:text-[10px] sm:tracking-[0.12em]">
                Creative Coordinator
              </p>
            </div>
  
            {/* Event Image Marquee */}
            <div className="relative mt-5 w-full max-w-full overflow-hidden sm:mt-8">
              <div className="event-marquee-track">
                
                <div className="event-marquee-set">
                  <img src="/event-1.jpg" alt="" />
                  <img src="/event-2.jpg" alt="" />
                  <img src="/event-3.jpg" alt="" />
                  <img src="/event-4.jpg" alt="" />
                  <img src="/event-5.jpg" alt="" />
                  <img src="/event-6.jpg" alt="" />
                  <img src="/event-7.jpg" alt="" />
                  <img src="/event-8.jpg" alt="" />
                  <img src="/event-9.jpg" alt="" />
                  <img src="/event-10.jpg" alt="" />
                </div>
  
                <div className="event-marquee-set">
                  <img src="/event-1.jpg" alt="" />
                  <img src="/event-2.jpg" alt="" />
                  <img src="/event-3.jpg" alt="" />
                  <img src="/event-4.jpg" alt="" />
                  <img src="/event-5.jpg" alt="" />
                  <img src="/event-6.jpg" alt="" />
                  <img src="/event-7.jpg" alt="" />
                  <img src="/event-8.jpg" alt="" />
                  <img src="/event-9.jpg" alt="" />
                  <img src="/event-10.jpg" alt="" />
                </div>
  
                <div className="event-marquee-set">
                  <img src="/event-1.jpg" alt="" />
                  <img src="/event-2.jpg" alt="" />
                  <img src="/event-3.jpg" alt="" />
                  <img src="/event-4.jpg" alt="" />
                  <img src="/event-5.jpg" alt="" />
                  <img src="/event-6.jpg" alt="" />
                  <img src="/event-7.jpg" alt="" />
                  <img src="/event-8.jpg" alt="" />
                  <img src="/event-9.jpg" alt="" />
                  <img src="/event-10.jpg" alt="" />
                </div>
  
              </div>
            </div>
  
            {/* Hero Visual */}
            <div className="relative mt-2 flex w-full justify-center sm:mt-4 sm:min-h-0 sm:flex-1">
  
              {/* Vasu */}
              <div className="relative z-20 flex items-end justify-center">
                <img
                  src="/vasu.jpg"
                  alt="Vasu Aggarwal"
                  className="h-[45vh] w-auto max-w-[90vw] object-contain object-bottom sm:h-[55vh] sm:max-w-[75vw] md:h-[65vh] lg:h-[70vh]"
                />
              </div>
  
              {/* Mobile Stats */}
              <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-between gap-2 lg:hidden">
                
                <div className="rounded-sm bg-[#E8D59E] px-2 py-1.5 text-[8px] font-medium uppercase tracking-[0.08em] sm:px-3 sm:py-2 sm:text-[9px]">
                  Audience 2,000+
                </div>
  
                <div className="rounded-sm bg-[#A8AD82] px-2 py-1.5 text-[8px] font-medium uppercase tracking-[0.08em] sm:px-3 sm:py-2 sm:text-[9px]">
                  Reach 1.5M
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;