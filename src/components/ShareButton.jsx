import { MessageCircle } from "lucide-react";

export default function ShareButton({ onShare }) {
  return (
    <button
      onClick={onShare}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#8d240f] px-5 py-3 font-semibold text-white shadow-xl transition hover:scale-105"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">आमंत्रण पाठवा</span>
    </button>
  );
}
