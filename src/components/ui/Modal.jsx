import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'

export default function Modal({ open, onClose, className, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // лок скролу під модалкою
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose} // клік на бекдроп — закрити
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()} // клік усередині картки не закриває
        className={cn('w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl sm:p-10', className)}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}