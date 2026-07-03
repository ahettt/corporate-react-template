import { Fragment } from 'react'

// Рендер інлайн-вузлів: рядок | { b } жирний | { a, href, b? } лінк (+опц. жирний)
function Inline({ nodes }) {
  if (nodes == null) return null
  if (typeof nodes === 'string') return nodes
  return nodes.map((n, i) => {
    if (typeof n === 'string') return <Fragment key={i}>{n}</Fragment>
    if (n.a) {
      const link = (
        <a
          href={n.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {n.a}
        </a>
      )
      return n.b ? <strong key={i}>{link}</strong> : <Fragment key={i}>{link}</Fragment>
    }
    if (n.b) return <strong key={i}>{n.b}</strong>
    return null
  })
}

export default function PrivacyContent({ blocks }) {
  return (
    <div>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2 key={i} className="mt-12 mb-4 text-2xl font-bold text-ink md:text-3xl">
                {b.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="mt-8 mb-3 text-lg font-bold text-ink md:text-xl">
                {b.content ? <Inline nodes={b.content} /> : b.text}
              </h3>
            )
          case 'p':
            return (
              <p key={i} className="mt-4 text-base leading-relaxed text-ink/90">
                <Inline nodes={b.content} />
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className="mt-4 list-[square] space-y-2 pl-5 marker:text-ink">
                {b.items.map((it, ii) => (
                  <li key={ii} className="text-base leading-relaxed text-ink/90">
                    <Inline nodes={it} />
                  </li>
                ))}
              </ul>
            )
          case 'table':
            return (
              <div key={i} className="my-8 overflow-x-auto">
                {/* table-fixed + small font + break-words = поведінка оригіналу (squish на мобілці) */}
                <table className="w-full table-fixed text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      {b.head.map((h, hi) => (
                        <th key={hi} className="p-3 align-top font-bold text-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="whitespace-pre-line break-words p-3 align-top text-ink"
                          >
                            <Inline nodes={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}