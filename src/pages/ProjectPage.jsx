import { Link, useParams, useNavigate } from "react-router-dom";

const projects = {
  "office-of-student-affairs": {
    title: "Office of Student Affairs",
    subtitle: "Chitkara University",
    role: "Event Management Trainee",
    date: "07 August 2026 — 3 Month Internship",

    about:
      "The Office of Student Affairs is behind a wide range of cultural and student experiences at Chitkara University — from major celebrations and university fests to convocations, performances and NSS initiatives.",

    contribution:
      "As an Event Management Trainee, I work across the different stages of bringing an event to life — from planning and production to logistics, on-ground execution, creative work and post-event documentation.",

    images: [
      "/projects/office-of-student-affairs/hero.jpg",
      "/projects/office-of-student-affairs/event-1.jpg",
      "/projects/office-of-student-affairs/event-2.jpg",
      "/projects/office-of-student-affairs/event-3.jpg",
      "/projects/office-of-student-affairs/event-4.jpg",
    ],
  },

  "agyaat-films": {
    title: "Agyaat Films",
    subtitle: "",
    role: "Event & Production",
    date: "",
    about: "",
    contribution: "",
    images: [],
  },

  "rangrezz-25": {
    title: "Rangrezz '25",
    subtitle: "",
    role: "Event Production",
    date: "",
    about: "",
    contribution: "",
    images: [],
  },

  eventure: {
    title: "Eventure",
    subtitle: "",
    role: "Event Management",
    date: "",
    about: "",
    contribution: "",
    images: [],
  },

  "aiu-north-zone-youth-festival": {
    title: "AIU North Zone Youth Festival",
    subtitle: "",
    role: "Event Coordination",
    date: "",
    about: "",
    contribution: "",
    images: [],
  },

  "lit-fair-2": {
    title: "Lit Fair 2.0",
    subtitle: "",
    role: "Event & Creative Coordination",
    date: "",
    about: "",
    contribution: "",
    images: [],
  },

  "c2s2-literayllis": {
    title: "C2S2 Literayllis",
    subtitle: "",
    role: "Event Management",
    date: "",
    about: "",
    contribution: "",
    images: [],
  },

  "agyaat-aadarsh": {
    title: "Agyaat Aadarsh",
    subtitle: "",
    role: "Creative Coordination",
    date: "",
    about: "",
    contribution: "",
    images: [],
  },
};

function ProjectPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
  
    const backToWork = () => {
      navigate("/");
  
      setTimeout(() => {
        document.getElementById("work")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    };
  
    const project = projects[slug];

  /* ---------------- PROJECT NOT FOUND ---------------- */

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F7F3EA] px-5 py-10 text-[#332E2A] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
        <a
  href="/#work"
  className="inline-block text-sm opacity-55 transition-opacity hover:opacity-100"
>
  ← Back to work
</a>

          <h1 className="mt-20 text-5xl font-semibold tracking-[-0.06em]">
            Project not found
          </h1>
        </div>
      </main>
    );
  }

  /* ---------------- PROJECT PAGE ---------------- */

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#332E2A]">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">

        {/* BACK */}
        <button
  onClick={backToWork}
  className="inline-block text-sm opacity-55 transition-opacity hover:opacity-100"
>
  ← Back to work
</button>

        {/* ================= HEADER ================= */}

        <header className="mt-20 border-t border-[#332E2A]/15 pt-5">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-45 sm:text-[10px]">
                {project.role}
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[6.5rem]">
                {project.title}
              </h1>

              {project.subtitle && (
                <p className="mt-4 text-lg text-[#332E2A]/50 sm:text-xl">
                  {project.subtitle}
                </p>
              )}
            </div>

            {project.date && (
              <p className="max-w-[180px] text-[9px] uppercase leading-5 tracking-[0.15em] opacity-40 sm:text-right">
                {project.date}
              </p>
            )}

          </div>
        </header>

        {/* ================= HERO IMAGE ================= */}

        {project.images[0] && (
          <div className="mt-12 overflow-hidden rounded-2xl">
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-[45vh] w-full object-cover sm:h-[60vh]"
            />
          </div>
        )}

        {/* ================= ABOUT ================= */}

       {/* INSIDE OSA */}
{project.about && (
  <section className="mt-20 overflow-hidden rounded-3xl bg-[#4D5440] text-[#F7F3EA] sm:mt-24">
    <div className="grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-14 lg:py-20">
      
      <div>
        <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
          Inside OSA
        </h2>
      </div>

      <p className="max-w-3xl self-end text-lg leading-8 text-[#F7F3EA]/80 sm:text-xl sm:leading-9">
        {project.about}
      </p>

    </div>
  </section>
)}

{/* MY ROLE */}
{project.contribution && (
  <section className="mt-4 overflow-hidden rounded-3xl bg-[#4D5440] text-[#F7F3EA]">
    <div className="grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-14 lg:py-20">
      
      <div>
        <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
          My Role
        </h2>
      </div>

      <p className="max-w-3xl self-end text-lg leading-8 text-[#F7F3EA]/80 sm:text-xl sm:leading-9">
        {project.contribution}
      </p>

    </div>
  </section>
)}

        {/* ================= PHOTOS ================= */}

        {project.images.length > 1 && (
          <section className="mt-20 sm:mt-28">

            <div className="mb-6 flex items-center justify-between border-t border-[#332E2A]/15 pt-5">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-45">
                Selected moments
              </p>

              <p className="text-[9px] uppercase tracking-[0.2em] opacity-35">
                {String(project.images.length - 1).padStart(2, "0")} Photos
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {project.images.slice(1).map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-xl ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} — ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-500 hover:scale-[1.02] ${
                      index === 2
                        ? "h-[400px] sm:h-[600px]"
                        : "h-[320px] sm:h-[430px]"
                    }`}
                  />
                </div>
              ))}

            </div>

          </section>
        )}

        {/* ================= BOTTOM ================= */}

        <div className="mt-20 border-t border-[#332E2A]/15 py-8 sm:mt-28">

        <button
  onClick={backToWork}
  className="inline-block text-sm opacity-55 transition-opacity hover:opacity-100"
>
  ← Back to work
</button>

        </div>

      </div>
    </main>
  );
}

export default ProjectPage;