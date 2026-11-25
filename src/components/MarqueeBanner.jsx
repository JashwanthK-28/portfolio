export default function MarqueeBanner({ items }) {
  return (
    <div className="overflow-hidden border-y-[3px] border-black bg-black py-4">
      <div className="marquee-track flex items-center gap-10 w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 whitespace-nowrap">
            <span className="text-accent text-lg font-bold">✦</span>
            <span className="font-display text-2xl tracking-wider text-white uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
