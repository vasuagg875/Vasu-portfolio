import { Link } from "react-router-dom";

function Work() {
  const projects = [
    {
      number: "01",
      title: "Office of Student Affairs",
      subtitle: "Chitkara University",
      role: "Event Management Trainee",
      slug: "office-of-student-affairs",
    },
    {
      number: "02",
      title: "Agyaat Films",
      subtitle: "",
      role: "Event & Production",
      slug: "agyaat-films",
    },
    {
      number: "03",
      title: "Rangrezz '25",
      subtitle: "",
      role: "Event Production",
      slug: "rangrezz-25",
    },
    {
      number: "04",
      title: "Eventure",
      subtitle: "",
      role: "Event Management",
      slug: "eventure",
    },
    {
      number: "05",
      title: "AIU North Zone Youth Festival",
      subtitle: "",
      role: "Event Coordination",
      slug: "aiu-north-zone-youth-festival",
    },
    {
      number: "06",
      title: "Lit Fair 2.0",
      subtitle: "",
      role: "Event & Creative Coordination",
      slug: "lit-fair-2",
    },
    {
      number: "07",
      title: "C2S2 Literayllis",
      subtitle: "",
      role: "Event Management",
      slug: "c2s2-literayllis",
    },
    {
      number: "08",
      title: "Agyaat Aadarsh",
      subtitle: "",
      role: "Creative Coordination",
      slug: "agyaat-aadarsh",
    },
  ];

  return (
    <section
      id="work"
      className="bg-[#F7F3EA] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-1400px">

        {/* Header */}
        <div className="flex items-center justify-between border-t border-[#332E2A]/15 pt-4">

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#4D5440]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-50 sm:text-[10px]">
              Work
            </p>
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] opacity-35 sm:text-[10px]">
            02 / 08
          </p>

        </div>

        {/* Heading */}
        <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

        <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-[5.5rem]">
  Things I’ve
  <br />
  <span className="text-[#4D5440]">
    brought to life.
  </span>
</h2>

          <p className="max-w-xs text-sm leading-6 text-[#332E2A]/50">
            A selection of events, productions and creative experiences.
          </p>

        </div>

        {/* Projects */}
        <div className="mt-12 grid grid-cols-1 border-l border-t border-[#332E2A]/15 sm:grid-cols-2 lg:grid-cols-4">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative flex min-h-190px flex-col justify-between border-b border-r border-[#332E2A]/15 p-5 transition-colors duration-300 hover:bg-[#4D5440] hover:text-[#F7F3EA] sm:min-h-210px sm:p-6"
            >

              {/* Number */}
              <div className="flex items-start justify-between">

                <span className="text-[9px] font-medium uppercase tracking-[0.16em] opacity-40">
                  {project.number}
                </span>

                {/* Arrow */}
                <Link
                  to={`/work/${project.slug}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#332E2A]/20 text-sm transition-all duration-300 group-hover:border-[#F7F3EA]/30 group-hover:bg-[#E8D59E] group-hover:text-[#332E2A] group-hover:rotate-45"
                  aria-label={`View ${project.title}`}
                >
                  ↗
                </Link>

              </div>

              {/* Project */}
              <div>

                <h3 className="max-w-240px text-2xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-[1.7rem]">
                  {project.title}
                </h3>

                {project.subtitle && (
                  <p className="mt-1 text-sm opacity-45">
                    {project.subtitle}
                  </p>
                )}

                <p className="mt-4 text-[8px] font-medium uppercase tracking-[0.15em] opacity-45">
                  {project.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Work;