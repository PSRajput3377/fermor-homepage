import {
  ArrowUpRight,
  CircleDollarSign,
  Landmark,
  PiggyBank,
} from "lucide-react";

const accounts = [
  {
    icon: Landmark,
    name: "Investments",
    value: "₹8.48L",
    change: "+12.4%",
  },
  {
    icon: PiggyBank,
    name: "Savings",
    value: "₹2.75L",
    change: "+4.8%",
  },
  {
    icon: CircleDollarSign,
    name: "Cash",
    value: "₹1.25L",
    change: "+2.1%",
  },
];

export default function FinancialOverview() {
  return (
    <section
      id="product"
      className="border-t border-[#dde1d8] py-24 sm:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
        {/* Copy */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6c716a]">
            Your financial picture
          </p>

          <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
            Everything important, in one view.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#6c716a]">
            Instead of jumping between accounts and spreadsheets, get a
            clearer picture of where your money is and how it is changing.
          </p>

          <a
            href="#planning"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#315f40]"
          >
            Explore your financial picture
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Financial UI */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#e7ece2]" />

          <div className="relative rounded-[1.75rem] border border-[#d7ddd3] bg-white p-5 sm:p-7">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a9087]">
                  Net worth
                </p>

                <div className="mt-3 flex items-end gap-3">
                  <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    ₹12.48L
                  </p>

                  <span className="mb-1 flex items-center gap-1 rounded-full bg-[#e5f0e0] px-2.5 py-1 text-xs font-medium text-[#315f40]">
                    <ArrowUpRight size={12} />
                    8.4%
                  </span>
                </div>
              </div>

              <span className="text-xs text-[#8a9087]">
                2026
              </span>
            </div>

            {/* Chart */}
            <div className="mt-8 h-40 overflow-hidden rounded-xl bg-[#f6f7f2] p-3">
              <svg
                viewBox="0 0 600 180"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="overviewFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#dce8d7"
                      stopOpacity="1"
                    />

                    <stop
                      offset="100%"
                      stopColor="#dce8d7"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 140 C55 136 72 125 110 128 C150 130 167 101 208 105 C248 110 260 83 300 88 C345 94 350 64 395 67 C438 71 452 42 495 46 C530 49 560 25 600 20 L600 180 L0 180 Z"
                  fill="url(#overviewFill)"
                />

                <path
                  d="M0 140 C55 136 72 125 110 94 C145 76, 164 91, 195 74 C225 57, 246 73, 278 52 C312 30, 337 49, 365 37 C401 22, 424 35, 500 12"
                  fill="none"
                  stroke="#99F89B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Account breakdown */}
            <div className="mt-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a9087]">
                  Accounts
                </p>

                <p className="text-xs text-[#8a9087]">
                  3 accounts
                </p>
              </div>

              <div className="divide-y divide-[#edf0eb]">
                {accounts.map((account) => {
                  const Icon = account.icon;

                  return (
                    <div
                      key={account.name}
                      className="flex items-center justify-between py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f3ed] text-[#99F89B]">
                          <Icon size={16} />
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            {account.name}
                          </p>

                          <p className="mt-0.5 text-xs text-[#8a9087]">
                            {account.change} this year
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium">
                        {account.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom insight */}
            <div className="mt-5 rounded-xl bg-[#99F89B] p-4 text-[#11140f] shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#11140F]">
                Fermor insight
              </p>

              <p className="mt-1.5 text-sm leading-5">
                Your investment growth is currently driving most of your
                overall progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}