import { MapPin, Navigation } from "lucide-react";

export default function LocationSection({ address, mapUrl }) {
  return (
    <section id="location" className="px-5 py-24 md:py-32">
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
          <div className="reveal rounded-[2rem] bg-[#7e1d0b] p-8 text-white shadow-xl md:p-12">
            <MapPin className="mb-6 text-[#f6cf7a]" size={40} />

            <p className="mb-3 text-sm tracking-[0.2em] text-[#f6cf7a]">
              पत्ता
            </p>

            <h3 className="font-serif text-3xl font-bold">{address.house}</h3>

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
  );
}
