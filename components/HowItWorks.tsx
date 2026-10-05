const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "See your financial picture clearly, without having to piece together numbers from different places.",
  },
  {
    number: "02",
    title: "Decide",
    description:
      "Put your money into context and understand the choices and trade-offs behind your next move.",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Turn better financial decisions into progress toward the things that matter to you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[#dde1d8] py-24 sm:py-32"
    >
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        
        {/* Intro */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6c716a]">
            The Fermor approach
          </p>

          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
            A clearer way to move forward.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#6c716a]">
            Your finances are more than a collection of numbers. Fermor
            helps you understand what they mean — and what you can do next.
          </p>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:gap-8 ${
                index !== steps.length - 1
                  ? "border-b border-[#dde1d8]"
                  : ""
              }`}
            >
              <span className="text-xs font-medium tracking-[0.12em] text-[#8a9087]">
                {step.number}
              </span>

              <div>
                <h3 className="text-2xl font-medium tracking-[-0.03em]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#6c716a] sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress line */}
      <div className="mt-20 hidden items-center gap-5 md:flex">
        <div className="h-px flex-1 bg-[#cfd5cc]" />

        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-[#6c716a]">
          <span>Understand</span>
          <span className="text-[#b0b6ad]">→</span>
          <span>Decide</span>
          <span className="text-[#b0b6ad]">→</span>
          <span>Grow</span>
        </div>

        <div className="h-px flex-1 bg-[#cfd5cc]" />
      </div>
    </section>
  );
}