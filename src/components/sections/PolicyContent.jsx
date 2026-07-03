import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

// Інлайн: рядок | { t, href }. http → нова вкладка, mailto → пошта, інше → внутрішній Link
function Inline({ parts }) {
  return parts.map((p, i) => {
    if (typeof p === 'string') return <span key={i}>{p}{' '}</span>
    const { t, href } = p
    if (href.startsWith('http')) {
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          {t}
        </a>
      )
    }
    if (href.startsWith('mailto:')) {
      return <a key={i} href={href} className="text-accent hover:underline">{t}</a>
    }
    return <Link key={i} to={href} className="text-accent hover:underline">{t}</Link>
  })
}

function PolicyTable({ headers, rows }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="border border-gray-200 bg-surface px-3 py-2 text-left font-semibold text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="align-top">
              {row.map((cell, ci) => (
                <td key={ci} className="border border-gray-200 px-3 py-2 leading-relaxed text-muted">
                  <Inline parts={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Сітка карток (CSR) — як у AboutSocial
function Cards({ cards }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <div key={c.titleLines.join(' ')} className="h-full bg-[#f5f5f5] p-8 lg:p-10">
          <h3 className="text-base font-bold uppercase leading-snug tracking-wide text-ink lg:text-lg">
            {c.titleLines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </h3>
          <ul className="mt-6 space-y-4">
            {c.points.map((p, j) => (
              <li key={j} className="flex items-start gap-4">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                <span className="text-[15px] leading-relaxed text-muted">
                  {typeof p === 'string' ? p : <Inline parts={p} />}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-10 text-2xl font-bold uppercase leading-snug text-ink md:text-3xl">{block.text}</h2>
    case 'h3':
      return <h3 className="mt-8 text-lg font-bold uppercase leading-snug text-ink">{block.text}</h3>
    case 'p':
      if (!block.content?.length) return null
      return (
        <p className="mt-5 leading-relaxed text-muted">
          <Inline parts={block.content} />
        </p>
      )
    case 'list':
      return (
        <div className="mt-6 rounded-md border border-dashed border-accent/40 bg-accent/5 p-6 md:p-8">
          <ul className="space-y-4">
            {block.items.map((it, j) => (
              <li key={j} className="flex gap-4">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                <span className="leading-relaxed text-ink">
                  <Inline parts={it} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'table':
      return <PolicyTable headers={block.headers} rows={block.rows} />
    case 'cards':
      return <Cards cards={block.cards} />
    default:
      return null
  }
}

// Уніфікований контент політик: центроване інтро + список блоків
export default function PolicyContent({ intro, blocks }) {
  return (
    <>
      {intro && <p className="mt-8 text-center leading-relaxed text-muted">{intro}</p>}
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  )
}
