const certificates = [
  {
    title: "Lit Fair 2.0",
    subtitle: "Chitkara University",
    year: "2026",
    file: "/certificates/lit-fair.pdf",
  },
  {
    title: "Rangrezz '25",
    subtitle: "Media Coordinator",
    year: "2025",
    file: "/certificates/rangrezz-25.pdf",
  },
  {
    title: "Sahityam 2026",
    subtitle: "1st Position",
    year: "2026",
    file: "/certificates/sahityam-2026.pdf",
  },
  {
    title: "AI & Business Immersion",
    subtitle: "Middlesex University Dubai",
    year: "2025",
    file: "/certificates/ai-business-immersion.pdf",
  },
  {
    title: "13th Global Week",
    subtitle: "Chitkara University",
    year: "2023",
    file: "/certificates/global-week-2023.pdf",
  },
  {
    title: "Neelesh Misra Festival",
    subtitle: "Chitkara University",
    year: "2026",
    file: "/certificates/neelesh-misra-festival.pdf",
  },
];

function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-[#F7F3EA] px-5 py-10 text-[#332E2A] sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              A few things
              <br />
              along the way.
            </h2>

            <p className="max-w-md text-sm leading-6 text-[#332E2A]/55 sm:text-right">
              Selected experiences, recognitions and milestones.
            </p>
          </div>
        </div>

        {/* Certificate Cards */}
        <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-6">

          {certificates.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-[#332E2A]/10 bg-[#E8D59E]/20 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4D5440] hover:text-[#F7F3EA] sm:p-5"            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[8px] uppercase tracking-[0.18em] opacity-40">
                  Certificate
                </span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#332E2A]/15 text-xs transition-all duration-300 group-hover:rotate-45 group-hover:border-[#E8D59E] group-hover:bg-[#E8D59E] group-hover:text-[#332E2A]">
                  ↗
                </span>
              </div>

              <div className="mt-7 sm:mt-10">                <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em]">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-xs leading-5 opacity-50">
                  {certificate.subtitle}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t ...\ border-[#332E2A]/10 pt-3 group-hover:border-[#F7F3EA]/20">
                <span className="text-[9px] uppercase tracking-[0.15em] opacity-40">
                  View
                </span>

                <span className="text-xs opacity-40">
                  {certificate.year}
                </span>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Credentials;