function Capabilities() {
    const skills = [
      "Event Production",
      "Artist Management",
      "Event Coordination",
      "Social Media",
      "Content Creation",
      "Video Editing",
      "Graphic Design",
      "Public Speaking",
      "Leadership",
      "Crisis Management",
      "Sponsorship & Business Development",
    ];
  
    return (
      <section
        id="capabilities"
        className="bg-[#4D5440] px-5 py-12 text-[#F7F3EA] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
      >
        <div className="mx-auto max-w-[1400px]">
  
          {/* Header */}
          <div className="flex items-center justify-between border-t border-[#F7F3EA]/20 pt-3">
  
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E8D59E]" />
  
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#F7F3EA]/60 sm:text-[10px]">
                03 / 08
              </p>
            </div>
  
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#F7F3EA]/35 sm:text-[10px]">
              Capabilities
            </p>
  
          </div>
  
          {/* Heading */}
          <div className="mt-8">
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              The skills I bring
              <br />
              to every project.
            </h2>
          </div>
  
          {/* Skills */}
          <div className="mt-9 flex flex-col gap-2">
  
            {/* Row 1 */}
            <div className="flex w-full gap-2">
              {skills.slice(0, 6).map((skill) => (
                <div
                  key={skill}
                  className="flex flex-1 items-center justify-center rounded-full border border-[#F7F3EA]/20 px-2 py-2.5 text-center text-[9px] uppercase tracking-[0.06em] text-[#F7F3EA]/75 transition-colors duration-200 hover:border-[#E8D59E] hover:bg-[#E8D59E] hover:text-[#332E2A] sm:px-3 sm:py-3 sm:text-[10px]"
                >
                  {skill}
                </div>
              ))}
            </div>
  
            {/* Row 2 */}
            <div className="flex w-full gap-2">
              {skills.slice(6).map((skill) => (
                <div
                  key={skill}
                  className="flex flex-1 items-center justify-center rounded-full border border-[#F7F3EA]/20 px-2 py-2.5 text-center text-[9px] uppercase tracking-[0.06em] text-[#F7F3EA]/75 transition-colors duration-200 hover:border-[#E8D59E] hover:bg-[#E8D59E] hover:text-[#332E2A] sm:px-3 sm:py-3 sm:text-[10px]"
                >
                  {skill}
                </div>
              ))}
  
              {/* Empty spaces to balance row */}
              <div className="hidden flex-1 sm:block" />
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Capabilities;