import { ChevronDown } from "lucide-react";

export default function Hero({
  petalsRef,
  ganpatiRef,
  titleRef,
  subtitleRef,
  ctaRef,
  scrollToSection,
  ganpatiImage,
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24"
    >
      <div ref={petalsRef} className="pointer-events-none absolute inset-0" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9a227]/20 blur-[120px]" />

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        <p className="mb-5 font-serif text-lg tracking-[0.3em] text-[#a36b18]">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <div className="relative mb-8">
          <div className="golden-aura absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5bb45]/30 blur-3xl md:h-96 md:w-96" />

          <div
            ref={ganpatiRef}
            className="relative mx-auto flex h-[420px] w-[340px] items-center justify-center md:h-[600px] md:w-[500px]"
          >
            <img
              src={ganpatiImage}
              alt="Ganpati Bappa"
              className="h-full w-full rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>

        <h1
          ref={titleRef}
          className="font-serif text-4xl font-bold leading-tight text-[#7f1d0b] md:text-7xl"
        >
          गणपती बाप्पांच्या
          <br />
          <span className="text-[#b7791f]">आगमनाचा आनंदोत्सव!</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#704b3e] md:text-lg"
        >
          बाप्पांच्या मंगलमय आगमनाच्या शुभक्षणी
          <br />
          आपली उपस्थिती आमच्यासाठी आनंद आणि आशीर्वाद ठरेल.
          <br />
          आपण सहकुटुंब आवर्जून यावे, ही प्रेमाची विनंती.
        </p>

        <button
          ref={ctaRef}
          onClick={() => scrollToSection("invitation")}
          className="group mt-9 rounded-full bg-[#8d240f] px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#a52b11]"
        >
          आपले मनःपूर्वक स्वागत आहे 🙏
        </button>

        <div className="mt-12 flex flex-col items-center">
          <p className="font-serif text-xl font-bold text-[#a36b18]">
            गणपती बाप्पा मोरया!
          </p>
          <ChevronDown className="mt-3 animate-bounce text-[#a36b18]" />
        </div>
      </div>
    </section>
  );
}
