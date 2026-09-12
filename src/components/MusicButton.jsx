import { Volume2, VolumeX } from "lucide-react";

export default function MusicButton({ musicOn, toggleMusic }) {
  return (
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
  );
}
