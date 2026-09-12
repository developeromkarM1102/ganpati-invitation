"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GanpatiEntry({
  ganpatiImage,
  onEnter,
  isOpening,
  setIsOpening,
  audioRef,
  setMusicOn,
}) {
  const entryRef = useRef(null);

  const headingRef = useRef(null);
  const ganpatiRef = useRef(null);
  const welcomeRef = useRef(null);
  const buttonRef = useRef(null);

  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);

  // ==================================================
  // ENTRY INTRO
  // ==================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, {
        autoAlpha: 0,
        y: 35,
      });

      gsap.set(ganpatiRef.current, {
        autoAlpha: 0,
        scale: 0.7,
        y: 40,
      });

      gsap.set(welcomeRef.current, {
        autoAlpha: 0,
        y: 25,
      });

      gsap.set(buttonRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        y: 20,
      });

      gsap.set(leftCurtainRef.current, {
        xPercent: 0,
      });

      gsap.set(rightCurtainRef.current, {
        xPercent: 0,
      });

      // ----------------------------------------------
      // INTRO TIMELINE
      // ----------------------------------------------

      const intro = gsap.timeline();

      intro
        .to(headingRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })

        .to(
          ganpatiRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "back.out(1.5)",
          },
          "-=0.35"
        )

        .to(
          welcomeRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .to(
          buttonRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.25"
        )

        // ------------------------------------------
        // ONLY START FLOATING AFTER INTRO
        // ------------------------------------------

        .call(() => {
          gsap.to(ganpatiRef.current, {
            y: -8,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      // ----------------------------------------------
      // GOLDEN AURA
      // ----------------------------------------------

      gsap.to(".entry-aura", {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ----------------------------------------------
      // DIYAS
      // ----------------------------------------------

      gsap.to(".entry-diya", {
        y: -7,
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });

      // ----------------------------------------------
      // FLAMES
      // ----------------------------------------------

      gsap.to(".entry-flame", {
        scale: 1.15,
        opacity: 0.7,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        transformOrigin: "50% 100%",
        ease: "sine.inOut",
      });

      // ----------------------------------------------
      // SPARKS
      // ----------------------------------------------

      gsap.to(".entry-spark", {
        y: -12,
        opacity: 0.25,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    }, entryRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // ==================================================
  // OPEN INVITATION
  // ==================================================

  const openInvitation = async () => {
    if (isOpening) return;

    setIsOpening(true);

    // ----------------------------------------------
    // START MUSIC
    // ----------------------------------------------

    try {
      if (audioRef?.current) {
        audioRef.current.currentTime = 0;

        await audioRef.current.play();

        setMusicOn(true);
      }
    } catch (error) {
      console.warn(
        "Audio could not start:",
        error
      );
    }

    // ----------------------------------------------
    // OPENING TIMELINE
    // ----------------------------------------------

    const tl = gsap.timeline({
      defaults: {
        overwrite: "auto",
      },

      onComplete: () => {
        onEnter();
        setIsOpening(false);
      },
    });

    // Button press

    tl.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.12,
      ease: "power2.in",
    })

      // Text disappears

      .to(
        [
          headingRef.current,
          welcomeRef.current,
          buttonRef.current,
        ],
        {
          autoAlpha: 0,
          y: -25,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.in",
        },
        "-=0.02"
      )

      // Ganpati zooms

      .to(
        ganpatiRef.current,
        {
          scale: 1.25,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.in",
        },
        "-=0.25"
      )

      // Left curtain

      .to(
        leftCurtainRef.current,
        {
          xPercent: -105,
          duration: 1.1,
          ease: "power4.inOut",
        },
        "-=0.3"
      )

      // Right curtain

      .to(
        rightCurtainRef.current,
        {
          xPercent: 105,
          duration: 1.1,
          ease: "power4.inOut",
        },
        "<"
      )

      // Final fade

      .to(
        entryRef.current,
        {
          autoAlpha: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.05"
      );
  };

  // ==================================================
  // UI
  // ==================================================

  return (
    <div
      ref={entryRef}
      className="fixed inset-0 z-[9999] min-h-[100svh] overflow-hidden bg-[#64160f]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#b83a20_0%,#8f2417_45%,#5b130d_100%)]" />

      {/* Aura */}

      <div className="entry-aura absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd76a]/20 blur-[70px] sm:h-[430px] sm:w-[430px] md:h-[550px] md:w-[550px]" />

      {/* Borders */}

      <div className="pointer-events-none absolute inset-2 rounded-[22px] border border-[#f6d47b]/40 sm:inset-5 sm:rounded-[30px] sm:border-2" />

      <div className="pointer-events-none absolute inset-5 rounded-[18px] border border-[#f6d47b]/20 sm:inset-8 sm:rounded-[26px]" />

      {/* Sparks */}

      <div className="pointer-events-none absolute inset-0">
        <span className="entry-spark absolute left-[12%] top-[20%] text-2xl text-[#f8d98b]">
          ✦
        </span>

        <span className="entry-spark absolute left-[18%] top-[68%] text-lg text-[#f8d98b]">
          ✧
        </span>

        <span className="entry-spark absolute right-[12%] top-[24%] text-2xl text-[#f8d98b]">
          ✦
        </span>

        <span className="entry-spark absolute right-[18%] top-[68%] text-lg text-[#f8d98b]">
          ✧
        </span>

        <span className="entry-spark absolute left-[50%] top-[12%] text-lg text-[#f8d98b]">
          ✦
        </span>
      </div>

      {/* ==================================================
          LEFT CURTAIN
      ================================================== */}

      <div
        ref={leftCurtainRef}
        className="absolute inset-y-0 left-0 z-10 w-1/2 bg-[linear-gradient(90deg,#50100c_0%,#781912_72%,#9e291a_100%)] shadow-[12px_0_45px_rgba(0,0,0,0.3)]"
      >
        <div className="absolute inset-y-0 right-0 w-px bg-[#f6d47b]/60 sm:w-1" />
      </div>

      {/* ==================================================
          RIGHT CURTAIN
      ================================================== */}

      <div
        ref={rightCurtainRef}
        className="absolute inset-y-0 right-0 z-10 w-1/2 bg-[linear-gradient(270deg,#50100c_0%,#781912_72%,#9e291a_100%)] shadow-[-12px_0_45px_rgba(0,0,0,0.3)]"
      >
        <div className="absolute inset-y-0 left-0 w-px bg-[#f6d47b]/60 sm:w-1" />
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="absolute inset-0 z-20 flex items-center justify-center px-5 py-8 sm:px-8">
        <div className="flex w-full max-w-2xl flex-col items-center text-center">

          {/* Heading */}

          <div ref={headingRef}>
            <p className="text-xs font-medium tracking-[0.25em] text-[#f8d98b] sm:text-base">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <h1 className="mt-2 font-serif text-3xl font-bold text-[#fff2ce] sm:text-5xl md:text-6xl">
              गणपती बाप्पा मोरया!
            </h1>

            <p className="mt-2 text-xs tracking-wider text-[#f6dca1] sm:text-sm">
              मंगलमूर्ती मोरया 🙏
            </p>
          </div>

          {/* Ganpati */}

          <div
            ref={ganpatiRef}
            className="relative my-5 flex h-[205px] w-[205px] items-center justify-center sm:my-7 sm:h-[285px] sm:w-[285px] md:h-[340px] md:w-[340px]"
          >
            <div className="entry-aura absolute inset-5 rounded-full bg-[#ffd76a]/20 blur-3xl" />

            <div className="absolute inset-1 rounded-full border border-[#f6d47b]/50 sm:inset-3 sm:border-2" />

            <div className="absolute inset-5 rounded-full border border-dashed border-[#f6d47b]/35 sm:inset-8" />

            <img
              src={ganpatiImage}
              alt="Ganpati Bappa"
              className="relative z-10 h-[175px] w-[175px] rounded-full object-cover shadow-[0_15px_45px_rgba(0,0,0,0.35)] sm:h-[250px] sm:w-[250px] md:h-[290px] md:w-[290px]"
            />
          </div>

          {/* Welcome */}

          <div ref={welcomeRef}>
            <p className="max-w-md text-xs leading-6 text-[#f9e5b0] sm:text-sm sm:leading-7 md:text-base">
              आमच्या गणपती उत्सवाच्या मंगलमय सोहळ्यात
              <br />
              आपले मनःपूर्वक स्वागत आहे.
            </p>

            {/* Button */}

            <button
              ref={buttonRef}
              type="button"
              onClick={openInvitation}
              disabled={isOpening}
              className="group mt-5 flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#f8d77e] bg-[#f4c653] px-7 py-3 text-sm font-bold text-[#64160f] shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:bg-[#ffdb76] active:scale-95 disabled:cursor-not-allowed sm:mt-6 sm:min-h-[54px] sm:px-9 sm:text-base"
            >
              <span className="text-lg">
                🪔
              </span>

              <span>
                {isOpening
                  ? "स्वागत आहे..."
                  : "प्रवेश करा"}
              </span>

              {!isOpening && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>

            <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-[#f2d69a]/70 sm:text-[10px]">
              Tap to open invitation
            </p>
          </div>
        </div>
      </div>

      {/* ==================================================
          DIYAS
      ================================================== */}

      <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-30 flex justify-between px-5 sm:bottom-7 sm:px-10">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="entry-diya relative text-3xl sm:text-5xl"
          >
            🪔

            <span className="entry-flame absolute left-1/2 top-0 -translate-x-1/2 text-xs">
              🔥
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}