function About() {
    return (
      <section
        id="about"
        className="bg-[#4D5440] px-5 py-10 text-[#F7F3EA] sm:px-8 sm:py-12 lg:px-12 lg:py-14"
      >
        <div className="mx-auto max-w-[1400px]">
  
          {/* Top line */}
          <div className="mb-8 flex items-center justify-between border-t border-[#F7F3EA]/20 pt-3 sm:mb-10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E8D59E]" />
  
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#F7F3EA]/65 sm:text-[10px]">
                About
              </p>
            </div>
  
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#F7F3EA]/40 sm:text-[10px]">
              01 / 08
            </p>
          </div>
  
          {/* Main content */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
  
            {/* Main statement */}
            <div>
              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                Turning ideas into
                <br />
                <span className="text-[#E8D59E]">
                  experiences.
                </span>
              </h2>
            </div>
  
            {/* Introduction */}
            <div className="flex flex-col justify-end lg:pb-1">
  
              <p className="max-w-xl text-base leading-6 text-[#F7F3EA]/90 sm:text-lg sm:leading-7">
                I’m Vasu Aggarwal, a CS-AI student at Chitkara University,
                an event producer, artist manager and creative coordinator.
              </p>
  
              <p className="mt-4 max-w-xl text-sm leading-5 text-[#F7F3EA]/55 sm:text-base sm:leading-6">
                What started with an interest in events grew into a passion for
                creating experiences, working with artists, coordinating teams
                and bringing ideas to life. I enjoy being where creativity,
                people and execution come together.
              </p>
  
            </div>
  
          </div>
  
          {/* Bottom information */}
          <div className="mt-10 grid grid-cols-2 border-t border-[#F7F3EA]/20 pt-4 sm:mt-12 sm:grid-cols-3">
  
            <div>
              <p className="text-lg font-medium tracking-[-0.03em] sm:text-xl">
                Events
              </p>
  
              <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#F7F3EA]/40 sm:text-[9px]">
                Core focus
              </p>
            </div>
  
            <div>
              <p className="text-lg font-medium tracking-[-0.03em] sm:text-xl">
                CS + AI
              </p>
  
              <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#F7F3EA]/40 sm:text-[9px]">
                Background
              </p>
            </div>
  
            <div className="col-span-2 mt-5 sm:col-span-1 sm:mt-0">
              <p className="text-lg font-medium tracking-[-0.03em] sm:text-xl">
                Punjab, India
              </p>
  
              <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#F7F3EA]/40 sm:text-[9px]">
                Based in
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default About;