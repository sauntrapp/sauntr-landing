"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

type Toast = {
  id: string
  title?: string
  description?: string
  duration?: number
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handleToast = (e: Event) => {
      const { title, description, duration } = (e as CustomEvent).detail
      const id = Math.random().toString(36).substring(2, 9)

      setToasts((prev) => [...prev, { id, title, description, duration }])

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, duration || 3000)
    }

    document.addEventListener("toast", handleToast)

    return () => {
      document.removeEventListener("toast", handleToast)
    }
  }, [])

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 md:p-6 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/40 p-4 max-w-sm w-full animate-in slide-in-from-bottom-5"
        >
          <div className="flex justify-between items-start">
            <div>
              {toast.title && <h3 className="font-medium text-[#0B4B23]">{toast.title}</h3>}
              {toast.description && <p className="text-sm text-[#0B4B23]/70 mt-1">{toast.description}</p>}
            </div>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="text-[#FF85A1] hover:text-[#FF85A1]/80"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

