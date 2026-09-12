import { MessageCircle } from "lucide-react";

export default function ShareSection({ onShare }) {
  return (
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
          onClick={onShare}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#8d240f] px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
        >
          <MessageCircle size={20} />
          WhatsApp वर आमंत्रण पाठवा
        </button>
      </div>
    </section>
  );
}
