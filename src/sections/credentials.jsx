import { useState } from "react";
const certificates = [
  {
    title: "Lit Fair 2.0",
    subtitle: "Chitkara University",
    year: "2026",
    file: "/certificates/lit-fair.pdf",
  },
  {
    title: "AIU North Zone Youth Festival",
    subtitle: "39th Inter-University North Zone Youth Festival",
    year: "2026",
    file: "/certificates/aiu.pdf",
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
    title: "AI & Business Immersion Programme",
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
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section
      id="credentials"
      className="bg-[#F7F3EA] px-5 py-10 text-[#332E2A] sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
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
        <div className="mt-7 flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory">
          {certificates.map((certificate) => (
            <button
            key={certificate.title}
            type="button"
            onClick={() => setActiveCertificate(certificates.indexOf(certificate))}
            aria-label={`View ${certificate.title} certificate`}
            className="group w-[220px] min-w-[220px] shrink-0 aspect-square snap-start rounded-xl border border-[#332E2A]/10 bg-[#E8D59E]/20 p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-[#4D5440] hover:text-[#F7F3EA] sm:aspect-auto sm:w-[250px] sm:min-w-[250px] sm:p-5"
          >
            <div className="flex items-start justify-between gap-2">
                <span className="text-[7px] uppercase tracking-[0.18em] opacity-40 sm:text-[8px]">
                  Certificate
                </span>

                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#332E2A]/15 text-[10px] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#E8D59E] group-hover:bg-[#E8D59E] group-hover:text-[#332E2A] sm:h-7 sm:w-7 sm:text-xs">
                  ↗
                </span>
              </div>

              <div className="mt-4 sm:mt-10">                <h3 className="text-sm font-semibold leading-tight tracking-[-0.03em] sm:text-xl">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-[10px] leading-4 opacity-50 sm:mt-2 sm:text-xs sm:leading-5">
                  {certificate.subtitle}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[#332E2A]/10 pt-2 group-hover:border-[#F7F3EA]/20 sm:mt-5 sm:pt-3">
                <span className="text-[7px] uppercase tracking-[0.15em] opacity-40 sm:text-[9px]">
                  View
                </span>

                <span className="text-[10px] opacity-40 sm:text-xs">
                  {certificate.year}
                </span>
              </div>
            </button>
          ))}

        </div>
        </div>

{activeCertificate !== null && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
    onClick={() => setActiveCertificate(null)}
  >
    <div
      className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#F7F3EA] text-[#332E2A] shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between border-b border-[#332E2A]/10 px-5 py-4">
        <div>
          <h3 className="text-sm font-semibold sm:text-base">
            {certificates[activeCertificate].title}
          </h3>
          <p className="mt-1 text-xs text-[#332E2A]/50">
            {certificates[activeCertificate].subtitle} · {certificates[activeCertificate].year}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveCertificate(null)}
          className="ml-4 text-2xl text-[#332E2A]/50 hover:text-[#332E2A]"
          aria-label="Close certificate"
        >
          ×
        </button>
      </div>

      <div className="min-h-0 flex-1 bg-[#332E2A]">
        <iframe
          key={certificates[activeCertificate].file}
          src={certificates[activeCertificate].file}
          title={certificates[activeCertificate].title}
          className="h-full w-full"
        />
      </div>

      <div className="flex items-center justify-between border-t border-[#332E2A]/10 px-5 py-3">
        <span className="text-xs text-[#332E2A]/50">
          {activeCertificate + 1} / {certificates.length}
        </span>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() =>
              setActiveCertificate(
                (activeCertificate - 1 + certificates.length) %
                  certificates.length
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#332E2A]/20 hover:bg-[#332E2A] hover:text-white"
            aria-label="Previous certificate"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveCertificate(
                (activeCertificate + 1) % certificates.length
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#332E2A]/20 hover:bg-[#332E2A] hover:text-white"
            aria-label="Next certificate"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </div>
)}

</section>
  );
}

export default Credentials;