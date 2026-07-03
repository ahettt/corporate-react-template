export default function OfficeCountry({ flag, country, addresses, className }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <img src={flag} alt="" aria-hidden="true" className="h-5 w-auto shrink-0" />
        <h4 className="font-display text-xl font-semibold text-ink">{country}</h4>
      </div>
      <div className="mt-4 space-y-4">
        {addresses.map((addr) => (
          <p key={addr} className="leading-relaxed text-muted">
            {addr}
          </p>
        ))}
      </div>
    </div>
  )
}