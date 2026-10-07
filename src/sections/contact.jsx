function Contact() {
    return (
      <section
        id="contact"
        className="bg-[#332E2A] px-5 py-20 text-[#F7F3EA] sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-1400px">
  
          <div className="mb-16 border-b border-[#F7F3EA]/20 pb-5 sm:mb-24">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 sm:text-sm">
              07 — Contact
            </p>
          </div>
  
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
  
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#E8D59E]">
                Open to opportunities
              </p>
  
              <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-9xl">
                LET'S
                <br />
                WORK
                <br />
                TOGETHER.
              </h2>
            </div>
  
            <div className="flex flex-col justify-end">
  
              <p className="mb-8 max-w-md text-base leading-7 opacity-60 sm:text-lg">
                I'm currently open to internship and early-career opportunities
                in event production, artist management, creative coordination and
                media. If you think I could be a good fit for your team, I'd love
                to hear from you.
              </p>
  
              <div className="space-y-5 border-t border-[#F7F3EA]/20 pt-6">
  
                <a
                  href="mailto:vasuaggarwal875@gmail.com"
                  className="flex items-center justify-between border-b border-[#F7F3EA]/20 pb-5 text-lg transition-opacity hover:opacity-50 sm:text-xl"
                >
                  <span>Email</span>
                  <span>↗</span>
                </a>
  
                <a
                  href="tel:+919964207000"
                  className="flex items-center justify-between border-b border-[#F7F3EA]/20 pb-5 text-lg transition-opacity hover:opacity-50 sm:text-xl"
                >
                  <span>Phone</span>
                  <span>↗</span>
                </a>
  
              </div>
            </div>
  
          </div>
  
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-[#F7F3EA]/20 pt-5 text-xs uppercase tracking-[0.15em] opacity-50 sm:flex-row">
            <span>Punjab, India</span>
            <span>Open to internship opportunities</span>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Contact;