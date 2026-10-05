import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        
        {/* Left side */}
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dde1d8] bg-white/50 px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#99F89B]" />

            <span className="text-xs font-medium tracking-wide text-[#6c716a]">
              A clearer way to look at your money
            </span>
          </div>

          <h1 className="max-w-2xl text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#11140f] sm:text-6xl lg:text-[5.25rem]">
            Your money,
            <br />
            finally in context.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#6c716a] sm:text-lg">
            Fermor brings your financial picture together, so you can
            understand where you stand, make better decisions, and plan
            what comes next.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#product"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#99F89B] px-5 py-3.5 text-sm font-medium text-[#11140f] transition-transform duration-200 hover:scale-[1.02]"
            >
              Explore Fermor

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd5cc] px-5 py-3.5 text-sm font-medium text-[#11140f] transition-colors hover:bg-white"
            >
              See how it works
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Right side */}
        <FinancialSnapshot />
      </div>
    </section>
  );
}

function FinancialSnapshot() {
  return (
    <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
      
      {/* Decorative background shape */}
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[#e7ece2]" />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#d7ddd3] bg-white p-5 shadow-[0_25px_70px_rgba(24,61,43,0.08)] sm:p-7">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a9087]">
              Financial picture
            </p>

            <p className="mt-2 text-sm text-[#6c716a]">
              This year
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce8d7] text-[#99F89B]">
            <TrendingUp size={17} />
          </div>
        </div>

        {/* Net worth */}
        <div className="mt-8">
          <p className="text-sm text-[#6c716a]">
            Net worth
          </p>

          <div className="mt-1 flex items-end gap-3">
            <p className="text-4xl font-semibold tracking-[-0.05em] text-[#11140f] sm:text-5xl">
              ₹12.48L
            </p>

            <span className="mb-1 rounded-full bg-[#e5f0e0] px-2.5 py-1 text-xs font-medium text-[#315f40]">
              +8.4%
            </span>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8 h-36">
          <svg
            viewBox="0 0 500 150"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="chartFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#dce8d7"
                  stopOpacity="0.9"
                />

                <stop
                  offset="100%"
                  stopColor="#dce8d7"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="M0 118 C55 108, 75 112, 110 94 C145 76, 164 91, 195 74 C225 57, 246 73, 278 52 C312 30, 337 49, 365 37 C401 22, 424 35, 500 12 L500 150 L0 150 Z"
              fill="url(#chartFill)"
            />

            <path
              d="M0 118 C55 108, 75 112, 110 94 C145 76, 164 91, 195 74 C225 57, 246 73, 278 52 C312 30, 337 49, 365 37 C401 22, 424 35, 500 12"
              fill="none"
              stroke="#99F89B"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Breakdown */}
        <div className="mt-6 border-t border-[#edf0eb] pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wide text-[#8a9087]">
              Breakdown
            </span>

            <span className="text-xs text-[#8a9087]">
              Current
            </span>
          </div>

          <div className="space-y-4">
            <MoneyRow
              label="Investments"
              amount="₹8.48L"
              percentage="68%"
              width="68%"
            />

            <MoneyRow
              label="Savings"
              amount="₹2.75L"
              percentage="22%"
              width="22%"
            />

            <MoneyRow
              label="Cash"
              amount="₹1.25L"
              percentage="10%"
              width="10%"
            />
          </div>
        </div>
      </div>

      {/* Floating insight */}
      <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-[#d7ddd3] bg-[#99F89B] px-4 py-3 text-[#11140f] shadow-xl sm:block">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#11140F]">
          One small insight
        </p>

        <p className="mt-1 text-sm font-medium">
          Your investments are growing.
        </p>
      </div>
    </div>
  );
}

function MoneyRow({
  label,
  amount,
  percentage,
  width,
}: {
  label: string;
  amount: string;
  percentage: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-[#41473f]">
          {label}
        </span>

        <span className="text-sm font-medium text-[#11140f]">
          {amount}
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-[#edf0eb]">
        <div
          className="h-full rounded-full bg-[#99F89B]"
          style={{ width }}
        />
      </div>

      <p className="mt-1 text-right text-[11px] text-[#8a9087]">
        {percentage}
      </p>
    </div>
  );
}