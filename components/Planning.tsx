import { ArrowUpRight, Check } from "lucide-react";

const goals = [
  {
    name: "Build a home fund",
    target: "₹25L",
    saved: "₹12.4L",
    progress: 49,
    date: "December 2028",
  },
  {
    name: "Long-term investing",
    target: "₹50L",
    saved: "₹18.7L",
    progress: 37,
    date: "June 2032",
  },
];

export default function Planning() {
  return (
    <section
      id="planning"
      className="border-t border-[#dde1d8] py-24 sm:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-24">
        {/* Copy */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6c716a]">
            Plan what comes next
          </p>

          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
            Give your money somewhere to go.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#6c716a]">
            Set goals, understand what it will take to reach them, and make
            small adjustments before they become big decisions.
          </p>

          <a
            href="#get-started"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#315f40]"
          >
            Start planning
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Planner */}
        <div className="rounded-[1.75rem] bg-[#e7ece2] p-2 sm:p-3">
          <div className="rounded-[1.4rem] border border-[#d7ddd3] bg-white p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a9087]">
                  Your goals
                </p>

                <p className="mt-1 text-sm text-[#6c716a]">
                  2 goals in progress
                </p>
              </div>

              <button className="rounded-full border border-[#d9ded6] px-4 py-2 text-xs font-medium transition-colors hover:bg-[#f3f5f0]">
                Add goal
              </button>
            </div>

            <div className="mt-7 space-y-4">
              {goals.map((goal) => (
                <div
                  key={goal.name}
                  className="rounded-2xl border border-[#e1e5df] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e6efe2] text-[#99F89B]">
                          <Check size={13} />
                        </span>

                        <p className="text-sm font-medium">
                          {goal.name}
                        </p>
                      </div>

                      <p className="mt-3 text-xs text-[#8a9087]">
                        Target · {goal.target}
                      </p>
                    </div>

                    <span className="text-xs text-[#8a9087]">
                      {goal.date}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-semibold tracking-[-0.04em]">
                        {goal.saved}
                      </p>

                      <p className="text-xs font-medium text-[#315f40]">
                        {goal.progress}% complete
                      </p>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#edf0eb]">
                      <div
                        className="h-full rounded-full bg-[#99F89B]"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation */}
            <div className="mt-4 rounded-2xl bg-[#99F89B] p-5 text-[#11140f] shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#11140F]">
                Fermor recommendation
              </p>

              <p className="mt-2 max-w-md text-sm leading-5">
                Adding ₹8,500 to your monthly investment could keep your home
                goal comfortably on track.
              </p>

              <button className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#11140f]">
                See the plan
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}