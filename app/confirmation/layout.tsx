import type React from "react"
export const metadata = {
  title: "NOIR - Order Confirmed",
  description: "Your pre-order has been confirmed",
}

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
