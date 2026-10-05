import { ArrowUpRight } from "lucide-react";

const moves = [
  {
    number: "01",
    title: "Build a stronger buffer",
    detail: "Add ₹18,000 a month until your emergency fund feels comfortable.",
  },
  {
    number: "02",
    title: "Increase your investment",
    detail:
      "An extra ₹5,000 each month could meaningfully change your long-term plan.",
  },
  {
    number: "03",
    title: "Bring a goal closer",
    detail:
      "A small change today could move your target several months forward.",
  },
];

export default function SmallMoves() {
  return (
    <section className="border-t border-[#dde1d8] py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6c716a]">
            Small moves
          </p>

          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
            Progress doesn&apos;t have to be complicated.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#6c716a]">
            Fermor helps you see the small decisions that can make a meaningful
            difference over time.
          </p>
        </div>

        <div className="border-t border-[#dde1d8]">
          {moves.map((move) => (
            <a
              href="#get-started"
              key={move.number}
              className="group grid gap-4 border-b border-[#dde1d8] py-6 sm:grid-cols-[40px_1fr_auto] sm:items-center sm:py-7"
            >
              <span className="text-xs tracking-[0.12em] text-[#9aa097]">
                {move.number}
              </span>

              <div>
                <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                  {move.title}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[#6c716a]">
                  {move.detail}
                </p>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dde1d8] transition-all duration-200 group-hover:border-[#99F89B] group-hover:bg-[#99F89B] group-hover:text-[#11140f]">
                <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}