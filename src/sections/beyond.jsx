function Beyond() {
    const activities = [
      {
        number: "01",
        title: "Pep Talk",
        detail: "Photography Course for School Students",
      },
      {
        number: "02",
        title: "Poster March",
        detail: "Creative & Social Initiative",
      },
      {
        number: "03",
        title: "AI & Business Immersion Programme",
        detail: "Learning & Industry Experience",
      },
      {
        number: "04",
        title: "Inter-University Literature Quiz",
        detail: "Winner of Literature Quiz",
      },
    ];
  
    return (
      <section
        id="beyond"
        className="bg-[#F7F3EA] px-5 pt-8 pb-3 sm:px-8 sm:pt-10 sm:pb-4 lg:px-12 lg:pt-12 lg:pb-5"
      >
        <div className="mx-auto max-w-[1400px]">
  
          {/* Heading */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Beyond the
              <br />
              <span className="text-[#C98F7B]">
                events.
              </span>
            </h2>
  
            <p className="max-w-xs text-xs leading-5 text-[#332E2A]/50 sm:text-sm">
              Experiences, conversations and ideas beyond the main stage.
            </p>
          </div>
  
          {/* Activities */}
          <div className="mt-8 border-t border-[#332E2A]/15">
  
            {activities.map((activity) => (
              <div
                key={activity.number}
                className="group flex items-center gap-4 border-b border-[#332E2A]/15 py-4 sm:gap-6 sm:py-5"
              >
                {/* Number */}
                <span className="w-7 shrink-0 text-[9px] font-medium tracking-[0.12em] text-[#332E2A]/35">
                  {activity.number}
                </span>
  
                {/* Main title */}
                <h3 className="min-w-0 flex-1 text-lg font-medium leading-none tracking-[-0.035em] sm:text-xl lg:text-2xl">
                  {activity.title}
                </h3>
  
                {/* Detail */}
                <p className="hidden w-[30%] text-right text-[9px] uppercase tracking-[0.1em] text-[#332E2A]/40 sm:block">
                  {activity.detail}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Beyond;