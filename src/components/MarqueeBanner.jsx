import { useEffect, useRef } from 'react'

export default function MarqueeBanner({ items }) {
  return (
    <div className="overflow-hidden border-y border-border bg-darker py-4">
      <div className="marquee-track flex items-center gap-12 w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-accent text-lg">✦</span>
            <span className="font-display text-2xl tracking-widest text-light/70 uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
