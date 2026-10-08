import { Link } from "react-router-dom";

function Work() {
  const projects = [
    {
      number: "01",
      title: "Office of Student Affairs",
      subtitle: "Chitkara University",
      role: "Event Management Trainee",
      slug: "office-of-student-affairs",
      instagram: { handle: "osa.chitkarau", url: "https://www.instagram.com/osa.chitkarau/" },
    },
    {
      number: "02",
      title: "Agyaat Films",
      subtitle: "",
      role: "Creative Coordinator",
      slug: "agyaat-films",
      instagram: { handle: "agyaat.aadarsh", url: "https://www.instagram.com/agyaat.aadarsh/" },
    },
    {
      number: "03",
      title: "Rangrezz '25",
      subtitle: "",
      role: "Media Coordinator",
      slug: "rangrezz-25",
      instagram: { handle: "rangrezz.ntf", url: "https://www.instagram.com/rangrezz.ntf/" },
    },
    {
      number: "04",
      title: "Eventure",
      subtitle: "",
      role: "Club Head",
      slug: "eventure",
      instagram: null,
    },
    {
      number: "05",
      title: "AIU North Zone Youth Festival",
      subtitle: "",
      role: "Media Lead",
      slug: "aiu-north-zone-youth-festival",
      instagram: null,
    },
    {
      number: "06",
      title: "Lit Fair 2.0",
      subtitle: "",
      role: "Fest Head",
      slug: "lit-fair-2",
      instagram: null,
    },
    {
      number: "07",
      title: "C2S2 Literayllis",
      subtitle: "",
      role: "Club Coordinator",
      slug: "c2s2-literayllis",
      instagram: { handle: "c2s2_literayllis", url: "https://www.instagram.com/c2s2_literayllis/" },
    },
    {
      number: "08",
      title: "Agyaat Aadarsh",
      subtitle: "",
      role: "Artist Manager",
      slug: "agyaat-aadarsh",
      instagram: { handle: "agyaat.aadarsh", url: "https://www.instagram.com/agyaat.aadarsh/" },
    },
  ];

  return (
    <section
      id="work"
      className="bg-[#F7F3EA] py-10 sm:py-12 lg:py-14"
    >
      {/* Heading */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-[5.5rem]">
            Things I've
            <br />
            <span className="text-[#4D5440]">
              brought to life.
            </span>
          </h2>

          <p className="max-w-xs text-sm leading-6 text-[#332E2A]/50">
            A selection of events, productions and creative experiences.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-10 grid grid-cols-1 border-l border-t border-[#332E2A]/15 sm:grid-cols-2 lg:grid-cols-4">

        {projects.map((project) => (
          <div
            key={project.number}
            className="group relative flex min-h-190px flex-col justify-between border-b border-r border-[#332E2A]/15 p-5 transition-colors duration-300 hover:bg-[#4D5440] hover:text-[#F7F3EA] sm:min-h-210px sm:p-6"
          >

            {/* Number + Arrow */}
            <div className="flex items-start justify-between">
              <span className="text-[9px] font-medium uppercase tracking-[0.16em] opacity-40">
                {project.number}
              </span>

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
    </section>
  );
}

export default Work;
