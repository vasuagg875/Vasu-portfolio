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
        className="bg-[#4D5440] px-5 py-7 text-[#F7F3EA] sm:px-8 sm:py-9 lg:px-12 lg:py-11"
      >
        <div className="mx-auto max-w-[1400px]">
  
          {/* Heading */}
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              The skills I bring
              <br />
              to every project.
            </h2>
          </div>
  
          {/* Skills */}
<div className="mt-7 grid grid-cols-2 gap-2 sm:flex sm:flex-col">

{/* Row 1 */}
<div className="contents sm:flex sm:w-full sm:gap-2">
  {skills.slice(0, 6).map((skill) => (
    <div
      key={skill}
      className="flex min-w-0 items-center justify-center rounded-full border border-[#F7F3EA]/20 px-2 py-2.5 text-center text-[9px] uppercase tracking-[0.04em] text-[#F7F3EA]/75 transition-colors duration-200 hover:border-[#E8D59E] hover:bg-[#E8D59E] hover:text-[#332E2A] sm:flex-1 sm:px-3 sm:py-3 sm:text-[10px]"
    >
      {skill}
    </div>
  ))}
</div>

{/* Row 2 */}
<div className="contents sm:flex sm:w-full sm:gap-2">
  {skills.slice(6).map((skill) => (
    <div
      key={skill}
      className="flex min-w-0 items-center justify-center rounded-full border border-[#F7F3EA]/20 px-2 py-2.5 text-center text-[9px] uppercase tracking-[0.04em] text-[#F7F3EA]/75 transition-colors duration-200 hover:border-[#E8D59E] hover:bg-[#E8D59E] hover:text-[#332E2A] sm:flex-1 sm:px-3 sm:py-3 sm:text-[10px]"
    >
      {skill}
    </div>
  ))}

  <div className="hidden flex-1 sm:block" />
</div>

</div>
  
        </div>
      </section>
    );
  }
  
  export default Capabilities;