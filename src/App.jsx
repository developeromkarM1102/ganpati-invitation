"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ganpatiImage from "./assets/image.png";
import ganpatiMusic from "./assets/ganapati.aac";

import GanpatiEntry from "./components/GanpatiEntry";
import Navbar from "./components/Navbar";
import MusicButton from "./components/MusicButton";
import ShareButton from "./components/ShareButton";
import Hero from "./components/Hero";
import CountdownSection from "./components/CountdownSection";
import DetailCard from "./components/DetailCard";
import InvitationSection from "./components/InvitationSection";
import Organizers from "./components/Organizers";
import LocationSection from "./components/LocationSection";
import ShareSection from "./components/ShareSection";
import Footer from "./components/Footer";

import {
  CalendarDays,
  Clock3,
  Heart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // ==================================================
  // REFS
  // ==================================================

  const mainRef = useRef(null);

  const heroRef = useRef(null);
  const ganpatiRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const petalsRef = useRef(null);

  const audioRef = useRef(null);

  // ==================================================
  // STATE
  // ==================================================

  const [menuOpen, setMenuOpen] = useState(false);

  const [musicOn, setMusicOn] = useState(false);

  // Entry screen state
  const [entered, setEntered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  // ==================================================
  // GANPATI DATE
  // ==================================================

  const ganpatiDate = new Date("2026-09-14T10:00:00");

  // ==================================================
  // ADDRESS
  // ==================================================

  const address = {
    house: "श्री राम अपार्ट",
    building: "खोली क्र. १११, पहिला मजला",
    street: "ए विंग, समर्थ नगर",
    city: "घणसोली, नवी मुंबई",
  };

  const mapUrl =
    "https://goo.gl/maps/h5MFzTEu9jfdH1Mu5?g_st=aw";

  // ==================================================
  // MUSIC
  // ==================================================

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

  // ==================================================
  // MAIN WEBSITE ANIMATION
  // ONLY STARTS AFTER ENTRY
  // ==================================================

  useEffect(() => {
    if (!entered) return;

    const ctx = gsap.context(() => {
      // ----------------------------------------------
      // HERO ENTRANCE
      // ----------------------------------------------

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
      )

        .fromTo(
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
        )

        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )

        .fromTo(
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

      // ----------------------------------------------
      // FLOATING GANPATI
      // ----------------------------------------------

      if (ganpatiRef.current) {
        gsap.to(ganpatiRef.current, {
          y: -12,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // ----------------------------------------------
      // GOLDEN AURA
      // ----------------------------------------------

      gsap.to(".golden-aura", {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ----------------------------------------------
      // DIYAS
      // ----------------------------------------------

      gsap.to(".diya", {
        y: -8,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });

      // ----------------------------------------------
      // SECTION REVEALS
      // ----------------------------------------------

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

      // ----------------------------------------------
      // CARD REVEALS
      // ----------------------------------------------

      gsap.utils.toArray(".card-reveal").forEach(
        (element, index) => {
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
        }
      );
    }, mainRef);

    // Refresh after page becomes visible
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, [entered]);

  // ==================================================
  // FLOWER PETALS
  // ==================================================

  useEffect(() => {
    if (!entered) return;

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
      petals.forEach((petal) => {
        gsap.killTweensOf(petal);
        petal.remove();
      });
    };
  }, [entered]);

  // ==================================================
  // SCROLL
  // ==================================================

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };

  // ==================================================
  // WHATSAPP SHARE
  // ==================================================

  const shareOnWhatsApp = () => {
    const message = `
🙏 गणपती बाप्पा मोरया! 🙏

बाप्पांच्या मंगलमय आगमनाच्या शुभक्षणी
आपली उपस्थिती आमच्यासाठी आनंद आणि आशीर्वाद ठरेल.

आपण सहकुटुंब आवर्जून यावे, ही प्रेमाची विनंती. ❤️

🙏 निमंत्रक

श्री. दिपक बाळू पवार
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

  // ==================================================
  // ENTRY COMPLETED
  // ==================================================

  const handleEnter = () => {
    setEntered(true);

    // Give React time to remove the entry overlay
    // and render the actual page.
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  // ==================================================
  // RETURN
  // ==================================================

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen overflow-x-hidden bg-[#fff8ed] text-[#4b170d]"
    >
      {/* ==================================================
          AUDIO
      ================================================== */}

      <audio
        ref={audioRef}
        src={ganpatiMusic}
        loop
        preload="auto"
      />

      {/* ==================================================
          ENTRY SCREEN
      ================================================== */}

      {!entered && (
        <GanpatiEntry
          ganpatiImage={ganpatiImage}
          onEnter={handleEnter}
          isOpening={isOpening}
          setIsOpening={setIsOpening}
          audioRef={audioRef}
          setMusicOn={setMusicOn}
        />
      )}

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* ==================================================
          MUSIC
      ================================================== */}

      <MusicButton
        musicOn={musicOn}
        toggleMusic={toggleMusic}
      />

      {/* ==================================================
          SHARE
      ================================================== */}

      <ShareButton
        onShare={shareOnWhatsApp}
      />

      {/* ==================================================
          HERO
      ================================================== */}

      <Hero
        petalsRef={petalsRef}
        ganpatiRef={ganpatiRef}
        titleRef={titleRef}
        subtitleRef={subtitleRef}
        ctaRef={ctaRef}
        scrollToSection={scrollToSection}
        ganpatiImage={ganpatiImage}
      />

      {/* ==================================================
          COUNTDOWN
      ================================================== */}

      <CountdownSection
        ganpatiDate={ganpatiDate}
      />

      {/* ==================================================
          DETAILS
      ================================================== */}

      <section className="px-5 py-24 md:py-32">
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
              value="२५ सप्टेंबर"
            />

          </div>
        </div>
      </section>

      {/* ==================================================
          INVITATION
      ================================================== */}

      <InvitationSection />

      {/* ==================================================
          ORGANIZERS
      ================================================== */}

      <Organizers />

      {/* ==================================================
          LOCATION
      ================================================== */}

      <LocationSection
        address={address}
        mapUrl={mapUrl}
      />

      {/* ==================================================
          SHARE
      ================================================== */}

      <ShareSection
        onShare={shareOnWhatsApp}
      />

      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />
    </main>
  );
}