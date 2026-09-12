import Countdown from "./Countdown";

export default function CountdownSection({ ganpatiDate }) {
  return (
    <section className="relative bg-[#7e1d0b] px-5 py-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#f5bd55,transparent_60%)]" />
      </div>

      <div className="reveal relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm tracking-[0.3em] text-[#f6cf7a]">
          मंगल आगमन
        </p>

        <h2 className="font-serif text-3xl font-bold md:text-5xl">
          बाप्पांच्या आगमनाला...
        </h2>

        <Countdown targetDate={ganpatiDate} />

        <p className="mt-8 text-lg text-[#fce9c1]">
          🙏 गणपती बाप्पा मोरया 🙏
        </p>
      </div>
    </section>
  );
}
