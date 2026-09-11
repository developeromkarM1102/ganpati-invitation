import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Navigation, Volume2, VolumeX, Menu, X, CalendarDays, Clock3, Heart, MessageCircle, ChevronDown } from "lucide-react";
import ganpatiImage from "./assets/image.png";
import ganpatiMusic from "./assets/ganapati.mp3";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);
  const ganpatiRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const petalsRef = useRef(null);
  const audioRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (musicOn) {
        audioRef.current.pause();
        setMusicOn(false);
      } else {
        await audioRef.current.play();
        setMusicOn(true);
      }
    } catch (error) {
      console.error("Music playback failed:", error);
    }
  };

  /*
    ========================================
    GANPATI DETAILS
    Change these values
    ========================================
  */

  const ganpatiDate = new Date("2026-09-14T10:00:00");

  const address = {
    house: "श्री राम अपार्ट",
    building: "खोली क्र. १११, पहिला मजला",
    street: "ए विंग, समर्थ नगर",
    city: "घणसोली, नवी मुंबई",
  };

  const mapUrl =
    "https://goo.gl/maps/h5MFzTEu9jfdH1Mu5?g_st=aw";

  /*
    ========================================
    HERO ANIMATION
    ========================================
  */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ganpatiRef.current,
        {
          opacity: 0,
          scale: 0.7,
          y: 80,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.6,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      );

      tl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      );

      tl.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      gsap.to(ganpatiRef.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".golden-aura", {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".diya", {
        y: -8,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".card-reveal").forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /*
    ========================================
    PETALS
    ========================================
  */

  useEffect(() => {
    const container = petalsRef.current;

    if (!container) return;

    const petals = [];

    for (let i = 0; i < 25; i++) {
      const petal = document.createElement("div");

      petal.innerHTML = "🌼";

      petal.style.position = "absolute";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.top = "-50px";
      petal.style.fontSize = `${10 + Math.random() * 18}px`;
      petal.style.opacity = `${0.3 + Math.random() * 0.6}`;
      petal.style.pointerEvents = "none";

      container.appendChild(petal);
      petals.push(petal);

      gsap.to(petal, {
        y: window.innerHeight + 100,
        x: `+=${Math.random() * 200 - 100}`,
        rotation: Math.random() * 720,
        duration: 8 + Math.random() * 8,
        repeat: -1,
        delay: Math.random() * 8,
        ease: "none",
      });
    }

    return () => {
      petals.forEach((petal) => petal.remove());
    };
  }, []);

  /*
    ========================================
    SMOOTH SCROLL
    ========================================
  */

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  /*
    ========================================
    WHATSAPP
    ========================================
  */

  const shareOnWhatsApp = () => {
    const message = `
🙏 गणपती बाप्पा मोरया! 🙏

बाप्पांच्या मंगलमय आगमनाच्या शुभक्षणी
आपली उपस्थिती आमच्यासाठी आनंद आणि आशीर्वाद ठरेल.

आपण सहकुटुंब आवर्जून यावे, ही प्रेमाची विनंती. ❤️

🙏 निमंत्रक

श्री. दिपक शालू पवार
सौ. जयश्री दिपक पवार

कु. जयदीप दिपक पवार
कु. वेदांत दिपक पवार

📍 पत्ता:
${address.house}
${address.building}
${address.street}
${address.city}

गणपती बाप्पा मोरया! 🌺
    `;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main
      ref={heroRef}
      className="min-h-screen overflow-hidden bg-[#fff8ed] text-[#4b170d]"
    >
      {/* ================= BACKGROUND MUSIC ================= */}

      <audio
        ref={audioRef}
        src={ganpatiMusic}
        loop
        preload="auto"
      />

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-[#d6a64f]/30 bg-[#fffaf1]/80 px-5 py-3 shadow-xl backdrop-blur-xl">
          <button
            onClick={() => scrollToSection("home")}
            className="font-serif text-xl font-bold text-[#8d240f]"
          >
            ॐ श्री गणेशाय नमः
          </button>

          <div className="hidden items-center gap-7 md:flex">
            <button onClick={() => scrollToSection("home")}>
              बाप्पांचे आगमन
            </button>

            <button onClick={() => scrollToSection("invitation")}>
              आमंत्रण
            </button>

            <button onClick={() => scrollToSection("darshan")}>
              दर्शन
            </button>

            <button onClick={() => scrollToSection("location")}>
              पत्ता
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 transition hover:bg-[#8d240f]/10 md:hidden"
            aria-label={menuOpen ? "मेनू बंद करा" : "मेनू उघडा"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-2 rounded-3xl border border-[#d6a64f]/30 bg-[#fffaf1]/95 p-5 shadow-xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4 text-center">
              <button onClick={() => scrollToSection("home")}>
                बाप्पांचे आगमन
              </button>

              <button onClick={() => scrollToSection("invitation")}>
                आमंत्रण
              </button>

              <button onClick={() => scrollToSection("darshan")}>
                दर्शन
              </button>

              <button onClick={() => scrollToSection("location")}>
                पत्ता
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ================= MUSIC BUTTON ================= */}

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full border border-[#d6a64f]/40 bg-[#fffaf1]/90 px-4 py-3 text-[#8d240f] shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        aria-label={musicOn ? "संगीत बंद करा" : "संगीत सुरू करा"}
      >
        <div className={musicOn ? "animate-pulse" : ""}>
          {musicOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </div>
        <span className="hidden text-sm font-semibold sm:block">
          {musicOn ? "संगीत सुरू" : "संगीत"}
        </span>
      </button>

      {/* ================= WHATSAPP BUTTON ================= */}

      <button
        onClick={shareOnWhatsApp}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#8d240f] px-5 py-3 font-semibold text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">आमंत्रण पाठवा</span>
      </button>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24"
      >
        <div ref={petalsRef} className="pointer-events-none absolute inset-0" />

        {/* Background glow */}

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
            <span className="text-[#b7791f]">
              आगमनाचा आनंदोत्सव!
            </span>
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

      {/* ================= COUNTDOWN ================= */}

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

      {/* ================= DETAILS ================= */}

      <section
        id="invitation"
        className="px-5 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-[#a36b18]">
              शुभमुहूर्त
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#7f1d0b] md:text-5xl">
              बाप्पांचे आगमन
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <DetailCard
              icon={<CalendarDays />}
              title="स्थापना"
              value="१४ सप्टेंबर २०२६"
            />

            <DetailCard
              icon={<Clock3 />}
              title="स्थापना वेळ"
              value="सकाळी १०:०० वा."
            />

            <DetailCard
              icon={<Heart />}
              title="आरती"
              value="संध्याकाळी ९ वा."
            />

            <DetailCard
              icon={<CalendarDays />}
              title="विसर्जन"
              value="लवकरच"
            />

          </div>
        </div>
      </section>

      {/* ================= INVITATION ================= */}

      <section className="px-5 pb-28">
        <div className="reveal mx-auto max-w-4xl rounded-[2rem] border border-[#d6a64f]/40 bg-[#fffdf8] p-8 text-center shadow-2xl md:p-16">
          <div className="mb-7 text-5xl">🌸</div>

          <h2 className="font-serif text-3xl font-bold text-[#7f1d0b] md:text-5xl">
            आपण यावे, हीच बाप्पांच्या चरणी प्रार्थना 🙏
          </h2>

          <div className="mx-auto my-8 h-px max-w-xs bg-[#d6a64f]/50" />

          <p className="text-base leading-9 text-[#704b3e] md:text-lg">
            गणरायाच्या आगमनाने आमच्या घरात आनंद, उत्साह आणि भक्तीचे वातावरण
            निर्माण झाले आहे.
            <br />
            <br />
            या मंगल सोहळ्यात आपण सहकुटुंब सहभागी व्हावे आणि बाप्पांचे आशीर्वाद
            घ्यावेत, ही मनःपूर्वक इच्छा.
          </p>

          <p className="mt-8 font-serif text-xl font-bold text-[#a36b18]">
            आपली उपस्थिती हाच आमच्यासाठी बाप्पांचा आशीर्वाद ❤️
          </p>
        </div>

      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="font-serif text-4xl font-bold text-[#b7791f]">
            निमंत्रक
          </h2>

          <div className="mx-auto my-6 h-px w-40 bg-[#d6a64f]" />

          <div className="space-y-4 font-serif text-xl leading-relaxed text-[#7f1d0b] md:text-2xl">

            <p>श्री. दिपक शालू पवार</p>

            <p>सौ. जयश्री दिपक पवार</p>

            <p>कु. जयदीप दिपक पवार</p>

            <p>कु. वेदांत दिपक पवार</p>

          </div>

          <div className="mt-8 text-2xl">
            🌺 🙏 🌺
          </div>

        </div>
      </section>

      {/* ================= LOCATION ================= */}

      <section
        id="location"
        className="px-5 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-[#a36b18]">
              बाप्पांच्या दर्शनासाठी
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#7f1d0b] md:text-5xl">
              जरूर या 📍
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* ADDRESS */}

            <div className="reveal rounded-[2rem] bg-[#7e1d0b] p-8 text-white shadow-xl md:p-12">
              <MapPin className="mb-6 text-[#f6cf7a]" size={40} />

              <p className="mb-3 text-sm tracking-[0.2em] text-[#f6cf7a]">
                पत्ता
              </p>

              <h3 className="font-serif text-3xl font-bold">
                {address.house}
              </h3>

              <p className="mt-6 leading-8 text-[#fce9c1]">
                {address.building}
                <br />
                {address.street}
                <br />
                {address.city}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#f6c45d] px-5 py-3 font-semibold text-[#5e1b0d] transition hover:scale-105"
                >
                  <MapPin size={18} />
                  Google Maps
                </a>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#f6c45d]/50 px-5 py-3 font-semibold transition hover:bg-white/10"
                >
                  <Navigation size={18} />
                  मार्गदर्शन
                </a>
              </div>
            </div>

            {/* MAP */}

            <div className="reveal min-h-[350px] overflow-hidden rounded-[2rem] border border-[#d6a64f]/30 shadow-xl">
              <iframe
                title="Ganpati Location"
                src="https://www.google.com/maps?q=Shri%20Ram%20Apartment%2C%20Samarth%20Nagar%2C%20Ghansoli%2C%20Navi%20Mumbai%2C%20Maharashtra&output=embed"
                className="h-full min-h-[350px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHARE ================= */}

      <section className="px-5 py-20">
        <div className="reveal mx-auto max-w-3xl rounded-[2rem] bg-[#f1d59d]/50 p-10 text-center">
          <div className="mb-5 text-4xl">❤️</div>

          <h2 className="font-serif text-3xl font-bold text-[#7f1d0b]">
            ही आनंदाची बातमी आपल्या आप्तेष्टांपर्यंत पोहोचवा
          </h2>

          <p className="mt-4 text-[#704b3e]">
            बाप्पांचे आशीर्वाद घेण्यासाठी आपल्या प्रियजनांनाही सोबत घेऊन या.
          </p>

          <button
            onClick={shareOnWhatsApp}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#8d240f] px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
          >
            <MessageCircle size={20} />
            WhatsApp वर आमंत्रण पाठवा
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative overflow-hidden bg-[#5b160b] px-5 py-24 text-center text-white">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#f6c45d]/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-5 text-5xl">🙏</div>

          <h2 className="font-serif text-4xl font-bold text-[#f6cf7a] md:text-6xl">
            गणपती बाप्पा मोरया!
          </h2>

          <p className="mt-6 text-xl text-[#fce9c1]">
            पुढच्या वर्षी लवकर या! ❤️
          </p>

          <div className="mx-auto mt-10 h-px max-w-xs bg-[#f6cf7a]/30" />

          <p className="mt-6 text-sm text-[#e8cda9]">
            प्रेमपूर्वक आमंत्रण • गणेशोत्सव २०२६
          </p>
        </div>
      </footer>
    </main>
  );
}

/*
========================================
COUNTDOWN COMPONENT
========================================
*/

function Countdown({ targetDate }) {
  const calculateTime = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        arrived: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
      arrived: false,
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (time.arrived) {
    return (
      <div className="mt-10 font-serif text-3xl font-bold text-[#f6cf7a] md:text-5xl">
        बाप्पा आले! 🥳
      </div>
    );
  }

  const items = [
    ["दिवस", time.days],
    ["तास", time.hours],
    ["मिनिटे", time.minutes],
    ["सेकंद", time.seconds],
  ];

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-[#f6cf7a]/20 bg-white/10 p-5 backdrop-blur-xl"
        >
          <div className="font-serif text-4xl font-bold text-[#f6cf7a] md:text-5xl">
            {String(value).padStart(2, "0")}
          </div>

          <div className="mt-2 text-sm text-[#fce9c1]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

/*
========================================
DETAIL CARD
========================================
*/

function DetailCard({ icon, title, value }) {
  return (
    <div className="card-reveal group rounded-3xl border border-[#d6a64f]/30 bg-white/70 p-7 text-center shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#8d240f] text-[#f6cf7a] transition group-hover:rotate-6">
        {icon}
      </div>

      <p className="text-sm tracking-wider text-[#a36b18]">
        {title}
      </p>

      <h3 className="mt-2 font-serif text-xl font-bold text-[#6f1a0b]">
        {value}
      </h3>
    </div>
  );
}