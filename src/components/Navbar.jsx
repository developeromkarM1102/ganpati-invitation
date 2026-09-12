import { Menu, X } from "lucide-react";

export default function Navbar({ menuOpen, setMenuOpen, scrollToSection }) {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-[#d6a64f]/30 bg-[#fffaf1]/80 px-5 py-3 shadow-xl backdrop-blur-xl">
        <button
          onClick={() => scrollToSection("home")}
          className="font-serif text-xl font-bold text-[#8d240f]"
        >
          ॐ श्री गणेशाय नमः
        </button>

        <div className="hidden items-center gap-7 md:flex">
          <button onClick={() => scrollToSection("home")}>बाप्पांचे आगमन</button>
          <button onClick={() => scrollToSection("invitation")}>आमंत्रण</button>
          <button onClick={() => scrollToSection("darshan")}>दर्शन</button>
          <button onClick={() => scrollToSection("location")}>पत्ता</button>
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
            <button onClick={() => scrollToSection("home")}>बाप्पांचे आगमन</button>
            <button onClick={() => scrollToSection("invitation")}>आमंत्रण</button>
            <button onClick={() => scrollToSection("location")}>पत्ता</button>
          </div>
        </div>
      )}
    </nav>
  );
}
