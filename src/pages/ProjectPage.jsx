import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const projects = {
  "office-of-student-affairs": {
    title: "Office of Student Affairs",
    subtitle: "Chitkara University",
    role: "Event Management Trainee",
    date: "07 August 2026 — 3 Month Internship",

    aboutTitle: "Inside OSA",

    about:
      "The Office of Student Affairs drives a wide range of cultural, student and institutional experiences at Chitkara University, from major celebrations and fests to convocations, performances and NSS initiatives.",

    contribution:
      "As an Event Management Trainee, I work across planning, creative development, logistics and on-ground execution. My role also includes designing event graphics, creating post-event newsletters, managing props and coordinating the many moving parts that bring each experience together.",

    links: [
      {
        label: "Visit Office of Student Affairs",
        url: "https://www.chitkara.edu.in/osa",
      },
    ],

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
    subtitle: "Creative Agency",
    role: "Creative Coordinator",
    date: "June 2026 — September 2026",

    aboutTitle: "Inside the Agency",

    about:
      "Agyaat Films is a media agency focused on building and managing social media presence for clients. I worked across two accounts — Agyaat Aadarsh, a poet and storyteller with around 80K followers, and Golzza, a food outlet.",

    contribution:
      "I handled the complete content lifecycle across both clients — from ideation, scripting and shooting to editing, captions, content calendars and publishing. Agyaat Aadarsh reached approximately 1.5M, while Golzza crossed 100K reach within its first 28 days.",

    links: [
      {
        label: "@agyaat.aadarsh",
        url: "https://www.instagram.com/agyaat.aadarsh/",
      },
      {
        label: "@golzza_",
        url: "https://www.instagram.com/golzza_/",
      },
    ],

    images: [],
  },

  "lit-fair-2": {
    title: "Lit Fair 2.0",
    subtitle: "Chitkara University",
    role: "Fest Head",
    date: "June 2026 — July 2026",

    aboutTitle: "The Festival",

    about:
      "Lit Fair 2.0 was a three-day intra-university literary festival celebrating the second anniversary of Alfaaz, the flagship open mic of C2S2 Literayllis. The festival brought together poetry, storytelling, quizzes, debates and other literary formats.",

    contribution:
      "I led the festival from concept to execution, bringing together a combined team and overseeing branding, graphics, social media, budgeting, logistics, vendors, rehearsals and on-ground production. Across three days, the festival hosted 8 events, 200+ participants and 2,000+ audience members, with Neelesh Misra headlining the final day.",

    images: [
      "/projects/lit-fair-2/hero.jpg",
      "/projects/lit-fair-2/event-1.jpg",
      "/projects/lit-fair-2/event-2.jpg",
      "/projects/lit-fair-2/event-3.jpg",
      "/projects/lit-fair-2/event-4.jpg",
      "/projects/lit-fair-2/event-5.jpg",
    ],
  },

  eventure: {
    title: "Eventure",
    subtitle: "Chitkara University",
    role: "Founder & Head",
    date: "April 2026 — Present",

    aboutTitle: "About Eventure",

    about:
      "Eventure is the Event Management and Production Club at Chitkara University. Built around production, logistics, creative and media, the club brings together 60+ members, with 25+ actively involved across its core verticals.",

    contribution:
      "As Founder and Head, I lead the club across productions ranging from theatrical shows and corporate activations to competitions and university events. My work spans pre-event planning, promotions, volunteer coordination, technical production, logistics and on-ground execution.",

    images: [
      "/projects/eventure/hero.jpg",
      "/projects/eventure/event-1.jpg",
      "/projects/eventure/event-2.jpg",
      "/projects/eventure/event-3.jpg",
      "/projects/eventure/event-4.jpg",
      "/projects/eventure/event-5.jpg",
    ],
  },

  "agyaat-aadarsh": {
    title: "Agyaat Aadarsh",
    subtitle: "Artist Management",
    role: "Artist Manager",
    date: "February 2026 — September 2026",

    aboutTitle: "The Artist",

    about:
      "Agyaat Aadarsh is a poet, storyteller and content creator with approximately 80K followers. I worked with him as his artist manager across live performances, collaborations and brand opportunities.",

    contribution:
      "I managed bookings, contracts, live-event coordination and external collaborations, while working across college shows, open mics, festivals and lineup events. I also closed and managed an Amazon Audible brand collaboration from outreach and negotiation through final delivery.",

    links: [
      {
        label: "@agyaat.aadarsh",
        url: "https://www.instagram.com/agyaat.aadarsh/",
      },
    ],

    images: [
      "/projects/agyaat-aadarsh/hero.jpg",
    ],
  },

  "aiu-north-zone-youth-festival": {
    title: "AIU North Zone Youth Festival",
    subtitle: "Association of Indian Universities",
    role: "Media Lead",
    date: "January 2026",

    aboutTitle: "The Festival",

    about:
      "A five-day inter-university youth festival bringing together universities from across the North Zone, with multiple events and performances running throughout the festival.",

    contribution:
      "Selected as Media Lead after my work at Rangrezz, I led a three-member media team through five days of continuous coverage alongside university examinations. Against a target of 700 reels, we delivered 400+ without missing a single student performance and generated 75K+ organic reach for the official page in five days.",

    images: [
      "/projects/aiu-north-zone-youth-festival/hero.jpg",
      "/projects/aiu-north-zone-youth-festival/event-1.jpg",
      "/projects/aiu-north-zone-youth-festival/event-2.jpg",
      "/projects/aiu-north-zone-youth-festival/event-3.jpg",
      "/projects/aiu-north-zone-youth-festival/event-4.jpg",
      "/projects/aiu-north-zone-youth-festival/event-5.jpg",
    ],
  },

  "rangrezz-25": {
    title: "Rangrezz '25",
    subtitle: "National Theatre Fest",
    role: "Media Coordinator",
    date: "October 2025 — November 2025",

    aboutTitle: "The Fest",

    about:
      "Rangrezz '25 was Chitkara University's national theatre festival, bringing together performances, artists and audiences for a multi-day celebration of theatre and culture.",

    contribution:
      "I managed the festival's social media coverage from the ground — developing reel ideas, shooting BTS content, editing and publishing throughout the fest. One of my reels reached 183K views, the highest-performing reel on the festival page. I also organised the content and data after the festival.",

    links: [
      {
        label: "@rangrezz.ntf",
        url: "https://www.instagram.com/rangrezz.ntf/",
      },
    ],

    images: [
      "/projects/rangrezz-25/hero.jpg",
      "/projects/rangrezz-25/event-1.jpg",
      "/projects/rangrezz-25/event-2.jpg",
      "/projects/rangrezz-25/event-3.jpg",
    ],
  },

  "c2s2-literayllis": {
    title: "C2S2 Literayllis",
    subtitle: "Chitkara University",
    role: "Coordinator",
    date: "September 2024 — Present",

    aboutTitle: "The Club",

    about:
      "C2S2 Literayllis is Chitkara University's literary club, creating spaces for poetry, storytelling, comedy, performance and literary expression across campus.",

    contribution:
      "I joined Literayllis in 2024 and became Coordinator in 2025. I have worked across Alfaaz, the club's flagship open mic, Kavya Rangmanch, workshops and departmental events, while also handling vendors, logistics and stakeholder coordination across campus and inter-university festivals.",

    links: [
      {
        label: "@c2s2_literayllis",
        url: "https://www.instagram.com/c2s2_literayllis/",
      },
    ],

    images: [
      "/projects/c2s2-literayllis/hero.jpg",
      "/projects/c2s2-literayllis/event-1.jpg",
      "/projects/c2s2-literayllis/event-2.jpg",
      "/projects/c2s2-literayllis/event-3.jpg",
      "/projects/c2s2-literayllis/event-4.jpg",
    ],
  },
};

function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const backToWork = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("work")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F7F3EA] px-5 py-10 text-[#332E2A] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <button
            onClick={backToWork}
            className="text-sm opacity-55 transition-opacity hover:opacity-100"
          >
            ← Back to work
          </button>

          <h1 className="mt-20 text-5xl font-semibold tracking-[-0.06em]">
            Project not found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#332E2A]">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">

        {/* Back */}
        <button
          onClick={backToWork}
          className="inline-block text-sm opacity-55 transition-opacity hover:opacity-100"
        >
          ← Back to work
        </button>

        {/* Header */}
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
              <p className="max-w-[200px] text-[9px] uppercase leading-5 tracking-[0.15em] opacity-40 sm:text-right">
                {project.date}
              </p>
            )}
          </div>
        </header>

        {/* Hero image */}
        {project.images[0] && (
          <div className="mt-12 overflow-hidden rounded-2xl">
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-[45vh] w-full object-cover sm:h-[60vh]"
            />
          </div>
        )}

        {/* About */}
        {project.about && (
          <section className="mt-16 overflow-hidden rounded-2xl bg-[#4D5440] text-[#F7F3EA] sm:mt-20">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20 lg:p-12">
            <div>
  <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#F7F3EA] sm:text-5xl lg:text-6xl">
    {project.aboutTitle}
  </h2>
</div>

              <p className="max-w-3xl text-lg leading-8 text-[#F7F3EA]/80 sm:text-xl sm:leading-9">
                {project.about}
              </p>
            </div>
          </section>
        )}

        {/* My Role */}
        {project.contribution && (
          <section className="mt-4 overflow-hidden rounded-2xl bg-[#4D5440] text-[#F7F3EA]">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20 lg:p-12">
            <div>
  <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#F7F3EA] sm:text-5xl lg:text-6xl">
    My Role
  </h2>
</div>

              <p className="max-w-3xl text-lg leading-8 text-[#F7F3EA]/80 sm:text-xl sm:leading-9">
                {project.contribution}
              </p>
            </div>
          </section>
        )}

        {/* External links */}
        {project.links?.length > 0 && (
          <section className="mt-8 border-t border-[#332E2A]/15 pt-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="mr-2 text-[9px] font-medium uppercase tracking-[0.2em] opacity-40">
                Explore
              </p>

              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#332E2A]/15 px-4 py-2 text-xs transition-all duration-300 hover:border-[#4D5440] hover:bg-[#4D5440] hover:text-[#F7F3EA]"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Photo gallery */}
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

        {/* Bottom back */}
        <div className="mt-20 border-t border-[#332E2A]/15 py-8 sm:mt-28">
          <button
            onClick={backToWork}
            className="text-sm underline underline-offset-4"
          >
            ← Back to all work
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;