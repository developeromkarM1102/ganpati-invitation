export default function DetailCard({ icon, title, value }) {
  return (
    <div className="card-reveal group rounded-3xl border border-[#d6a64f]/30 bg-white/70 p-7 text-center shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#8d240f] text-[#f6cf7a] transition group-hover:rotate-6">
        {icon}
      </div>
      <p className="text-sm tracking-wider text-[#a36b18]">{title}</p>
      <h3 className="mt-2 font-serif text-xl font-bold text-[#6f1a0b]">
        {value}
      </h3>
    </div>
  );
}
