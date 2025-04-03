type ToastProps = {
  title?: string
  description?: string
  duration?: number
}

export const toast = ({ title, description, duration = 3000 }: ToastProps) => {
  // In a real implementation, this would use a context provider
  // For this simple example, we're just creating a function that can be imported
  const toastEvent = new CustomEvent("toast", {
    detail: {
      title,
      description,
      duration,
    },
  })

  document.dispatchEvent(toastEvent)
}

