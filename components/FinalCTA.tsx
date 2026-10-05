import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="border-t border-[#dde1d8] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6c716a]">
          Start with clarity
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
          Know where your money is going.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#6c716a]">
          See the bigger picture, understand what matters, and make your next
          financial decision with more confidence.
        </p>

        <a
          href="#top"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#99F89B] px-6 py-3 text-sm font-medium text-[#11140f] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Get started
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}