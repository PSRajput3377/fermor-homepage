import { ArrowUpRight } from "lucide-react";

const questions = [
  {
    number: "01",
    question: "Am I investing enough for my goals?",
  },
  {
    number: "02",
    question: "Can I afford this without slowing down my plans?",
  },
  {
    number: "03",
    question: "Where should my next ₹50,000 go?",
  },
  {
    number: "04",
    question: "Am I making progress at the right pace?",
  },
];

export default function Questions() {
  return (
    <section className="border-t border-[#dde1d8] py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        
        {/* Intro */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6c716a]">
            Better questions
          </p>

          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
            Your money comes with questions.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#6c716a]">
            Fermor helps turn financial information into something more
            useful: a clearer understanding of what you can do next.
          </p>
        </div>

        {/* Questions */}
        <div className="border-t border-[#dde1d8]">
          {questions.map((item) => (
            <a
              key={item.number}
              href="#planning"
              className="group flex items-center gap-5 border-b border-[#dde1d8] py-6 transition-all duration-200 sm:py-7"
            >
              <span className="w-7 shrink-0 text-xs font-medium tracking-[0.12em] text-[#9aa097]">
                {item.number}
              </span>

              <span className="flex-1 text-lg font-medium tracking-[-0.02em] text-[#11140f] transition-transform duration-200 group-hover:translate-x-1 sm:text-xl">
                {item.question}
              </span>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dde1d8] text-[#6c716a] transition-all duration-200 group-hover:border-[#99F89B] group-hover:bg-[#99F89B] group-hover:text-[#11140f]">
                <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}