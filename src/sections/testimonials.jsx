
import { useEffect, useState } from "react";

const TESTIMONIALS_API =
  "https://script.google.com/macros/s/AKfycbxmSpgRT73LKkjJbgIZ-DZq0YJmCINv0EwHWiQ7WAnGeeWZgnn2JN03vKu5J-Uco1t3FQ/exec";

function Testimonials() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const callbackName =
      "testimonialCallback_" + Date.now();

    const script = document.createElement("script");

    window[callbackName] = (data) => {
      setRecommendations(Array.isArray(data) ? data : []);
      setLoading(false);
    };

    script.src =
      `${TESTIMONIALS_API}?callback=${callbackName}&t=${Date.now()}`;

    script.onerror = () => {
      setError(true);
      setLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      delete window[callbackName];
      script.remove();
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-[#4D5440] px-5 py-14 text-[#F7F3EA] sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADING */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#E8D59E]">
              A different perspective
            </p>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl">
              Not just my words.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/65">
            The people, experiences and conversations
            that have been a part of my journey.
          </p>
        </div>

        {/* FEATURED COMPILATION */}
        <div className="mt-12 grid gap-6 overflow-hidden rounded-2xl bg-[#332E2A] text-[#F7F3EA] md:grid-cols-[1.4fr_0.8fr]">
          <div className="relative aspect-video bg-black">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster="/testimonials/compilation-poster.jpg"
            >
              <source
                src="/testimonials/compilation.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#E8D59E]">
              A collection of voices
            </p>

            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
              Beyond the work,
              <br />
              in their words.
            </h3>

            <p className="mt-5 text-sm leading-6 text-white/60">
              A few moments and perspectives from the
              people I've had the opportunity to work
              and grow with.
            </p>
          </div>
        </div>

        {/* WRITTEN RECOMMENDATIONS */}
        <div className="mt-20">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#E8D59E]">
            Written recommendations
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
            A few words that stay.
          </h3>

          {loading && (
            <p className="mt-7 text-sm text-white/60">
              Loading recommendations...
            </p>
          )}

          {error && (
            <p className="mt-7 text-sm text-white/60">
              Unable to load recommendations right now.
              Please try again later.
            </p>
          )}

          {!loading && !error && recommendations.length === 0 && (
            <p className="mt-7 text-sm text-white/60">
              No recommendations yet. Be the first to share your experience!
            </p>
          )}

          {recommendations.length > 0 && (
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recommendations.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex flex-col rounded-xl border border-white/10 bg-[#F7F3EA] p-5 text-[#332E2A] transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                >
                  <span className="text-4xl leading-none text-[#C98F7B]">
                    “
                  </span>

                  <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-6 text-[#332E2A]/75">
                    {item.testimonial}
                  </p>

                  <div className="mt-7 border-t border-[#332E2A]/10 pt-4">
                    <p className="text-xs font-semibold">
                      {item.name}
                    </p>

                    <p className="mt-1 text-[10px] text-[#332E2A]/50">
                      {[item.role, item.organisation]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SUBMIT TESTIMONIAL */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSesVaAfXC-hcou9gRRFPO1znY23AKhUWx_cvZXzQ5dR8GJj_A/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4D5440" }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F7F3EA] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8D59E]"
        >
          Share Your Experience
          <span aria-hidden="true">↗</span>
        </a>

      </div>
    </section>
  );
}

export default Testimonials;
