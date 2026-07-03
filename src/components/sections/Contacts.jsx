import { useState } from 'react'
import { BsChevronDown, BsPaperclip, BsXLg, BsCheckLg } from 'react-icons/bs'
import { CONTACTS } from '../../constants/contacts'
import { cn } from '../../utils/cn'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

const EMPTY = {
  name: '', surname: '', email: '', phone: '',
  source: '', comment: '', accepted: false, fileName: '',
}

// Приглушений помаранчевий банер + приблизний CSS-патерн дуг
const BANNER_PATTERN = {
  backgroundImage:
    'repeating-radial-gradient(circle at 12% 50%, rgba(0,0,0,0.06) 0 1px, transparent 1px 24px)',
}

// --- Мінімальні перевірки ---
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
// телефон: цифри/пробіли + опційний «+» ЛИШЕ на початку, мінімум 6 цифр
const isPhone = (v) => /^\+?[\d ]+$/.test(v) && (v.match(/\d/g) || []).length >= 6

export default function Contacts({
  bannerTitle = CONTACTS.bannerTitle,
  openButton = CONTACTS.openButton,
}) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [form, setForm] = useState(EMPTY)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const close = () => {
    setOpen(false)
    setSubmitted(false)
    setDropOpen(false)
    setDragOver(false)
    setForm(EMPTY)
  }

  // Прийняти файл (клік або drop), відсікти непідтримуване розширення
  const acceptExts = CONTACTS.fileAccept.split(',')
  const handleFile = (file) => {
    if (!file) return
    const ok = acceptExts.some((ext) => file.name.toLowerCase().endsWith(ext))
    if (ok) set('fileName', file.name)
  }

  const emailError = form.email && !isEmail(form.email) ? CONTACTS.errors.email : ''
  const phoneError = form.phone && !isPhone(form.phone) ? CONTACTS.errors.phone : ''

  const canSubmit =
    form.name &&
    form.surname &&
    isEmail(form.email) &&
    isPhone(form.phone) &&
    form.fileName &&
    form.accepted

  const submit = () => {
    if (!canSubmit) return
    setSubmitted(true) // мок: без реального endpoint
  }

  return (
    <Section
      as="section"
      id="contacts"
      className="relative overflow-hidden bg-[#de8051]"
      style={BANNER_PATTERN}
    >
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          {bannerTitle}
        </h2>

        <Button
          onClick={() => setOpen(true)}
          className="mt-8 rounded-pill bg-white px-8 uppercase text-ink transition hover:bg-white hover:text-accent"
        >
          {openButton}
        </Button>
      </Container>

      <Modal open={open} onClose={close}>
        {/* Хедер */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <p className="text-2xl font-medium uppercase text-ink">{CONTACTS.modalTitle}</p>
          <button
            type="button"
            onClick={close}
            aria-label="Закрити"
            className="text-ink transition hover:text-accent"
          >
            <BsXLg className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          /* === Екран «Дякуємо» === */
          <div className="py-8 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <BsCheckLg className="h-8 w-8" />
            </span>
            <p className="mt-6 text-2xl font-bold text-ink">{CONTACTS.thanks.title}</p>
            <p className="mt-3 text-muted">{CONTACTS.thanks.text}</p>
            <Button variant="outline" onClick={close} className="mt-8 rounded-pill uppercase">
              {CONTACTS.thanks.back}
            </Button>
          </div>
        ) : (
          /* === Форма === */
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <Field label={CONTACTS.fields.name.label} required
                value={form.name} onChange={(v) => set('name', v)} />
              <Field label={CONTACTS.fields.surname.label} required
                value={form.surname} onChange={(v) => set('surname', v)} />
              <Field label={CONTACTS.fields.email.label} required type="email"
                value={form.email} onChange={(v) => set('email', v)} error={emailError} />
              <Field label={CONTACTS.fields.phone.label} required type="tel"
                value={form.phone} onChange={(v) => set('phone', v)} error={phoneError} />

              {/* Кастомний дропдаун «Де ви про нас почули?» */}
              <div className="relative sm:col-span-2">
                <button
                  type="button"
                  onClick={() => setDropOpen((o) => !o)}
                  className="flex w-full items-center justify-between border-b border-gray-300 py-2 text-left"
                >
                  <span className={form.source ? 'text-ink' : 'text-muted'}>
                    {form.source || CONTACTS.sourcePlaceholder}
                  </span>
                  <BsChevronDown
                    className={cn('h-4 w-4 text-muted transition', dropOpen && 'rotate-180')}
                  />
                </button>
                {dropOpen && (
                  <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg">
                    {CONTACTS.sourceOptions.map((o) => (
                      <li key={o}>
                        <button
                          type="button"
                          onClick={() => { set('source', o); setDropOpen(false) }}
                          className="block w-full px-4 py-2 text-left text-ink hover:bg-surface"
                        >
                          {o}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Коментар + лічильник */}
              <div className="sm:col-span-2">
                <textarea
                  rows={2}
                  maxLength={CONTACTS.commentMax}
                  value={form.comment}
                  onChange={(e) => set('comment', e.target.value)}
                  placeholder={CONTACTS.commentPlaceholder}
                  className="w-full resize-none border-b border-gray-300 bg-transparent py-2 outline-none placeholder:text-muted focus:border-accent"
                />
                <div className="mt-1 text-right text-sm text-muted">
                  {form.comment.length}/{CONTACTS.commentMax}
                </div>
              </div>

              {/* Файл + drag-and-drop (у спокої вигляд незмінний, підсвітка лише при перетягуванні) */}
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault()
                  setDragOver(false)
                  handleFile(e.dataTransfer.files?.[0])
                }}
                className={cn(
                  'rounded-md transition sm:col-span-2',
                  dragOver && 'bg-accent/5 outline-2 outline-dashed outline-accent',
                )}
              >
                <label className="flex cursor-pointer items-center gap-2 text-lg font-bold text-ink">
                  <BsPaperclip className="h-5 w-5" />
                  <span>
                    {CONTACTS.fileLabel} <span className="text-accent">*</span>
                  </span>
                  <input
                    type="file"
                    accept={CONTACTS.fileAccept}
                    onChange={(e) => handleFile(e.target.files?.[0])}
                    className="hidden"
                  />
                </label>
                <p className="mt-1 text-sm text-muted">{CONTACTS.fileHint}</p>
                {form.fileName && (
                  <div className="mt-3 flex items-center gap-3 rounded-md bg-surface px-4 py-2 text-sm">
                    <span className="truncate text-ink">{form.fileName}</span>
                    <button
                      type="button"
                      onClick={() => set('fileName', '')}
                      aria-label="Видалити файл"
                      className="ml-auto text-muted transition hover:text-accent"
                    >
                      <BsXLg className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>

              {/* Згода */}
              <label className="flex items-center gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={form.accepted}
                  onChange={(e) => set('accepted', e.target.checked)}
                  className="h-4 w-4 accent-accent"
                />
                <span className="text-ink">
                  {CONTACTS.privacyLabel}{' '}
                  <a
                    href={CONTACTS.privacyLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    {CONTACTS.privacyLink.text}
                  </a>
                </span>
              </label>
            </div>

            {/* Кнопки: mobile — submit зверху (col-reverse), desktop — праворуч у ряд */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button variant="outline" onClick={close} className="rounded-pill uppercase">
                {CONTACTS.cancel}
              </Button>
              <Button
                onClick={submit}
                disabled={!canSubmit}
                className="rounded-pill uppercase disabled:cursor-not-allowed disabled:opacity-50"
              >
                {CONTACTS.submit}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}

// Підполе вводу з підкресленням + помилкою
function Field({ label, required, type = 'text', value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm text-muted">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'mt-1 w-full border-b bg-transparent py-2 text-ink outline-none',
          error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-accent',
        )}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}