export default function Footer() {
  return (
    <footer className="border-t border-[#dde1d8]">
      <div className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[-0.04em]">
            fermor<span className="text-[#183D2B]">.</span>
          </p>

          <p className="mt-2 text-xs text-[#858b84]">
            A clearer way to look at your money.
          </p>
        </div>

        <div className="flex gap-6 text-xs text-[#626861]">
          <a
            href="#product"
            className="transition-colors hover:text-[#315f40]"
          >
            Product
          </a>

          <a
            href="#how-it-works"
            className="transition-colors hover:text-[#315f40]"
          >
            How it works
          </a>

          <a
            href="#planning"
            className="transition-colors hover:text-[#315f40]"
          >
            Planning
          </a>
        </div>

        <p className="text-xs text-[#858b84]">
          © 2026 Fermor
        </p>
      </div>
    </footer>
  );
}