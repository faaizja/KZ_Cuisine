"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

interface CustomerInfo {
  name: string
  phone: string
  email: string
}

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function ConfirmationPage() {
  const router = useRouter()
  const { clearCart } = useCart()
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null)
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [orderTotal, setOrderTotal] = useState(0)
  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    const storedCustomerInfo = sessionStorage.getItem("customerInfo")
    const storedOrderItems = sessionStorage.getItem("orderItems")
    const storedOrderTotal = sessionStorage.getItem("orderTotal")

    if (!storedCustomerInfo || !storedOrderItems || !storedOrderTotal) {
      router.push("/menu")
      return
    }

    setCustomerInfo(JSON.parse(storedCustomerInfo))
    setOrderItems(JSON.parse(storedOrderItems))
    setOrderTotal(Number.parseFloat(storedOrderTotal))

    setTimeout(() => {
      setIsProcessing(false)
      clearCart()
      sessionStorage.removeItem("customerInfo")
      sessionStorage.removeItem("orderItems")
      sessionStorage.removeItem("orderTotal")
    }, 2000)
  }, [router, clearCart])

  if (!customerInfo) {
    return null
  }

  const tax = orderTotal * 0.1
  const finalTotal = orderTotal + tax

  if (isProcessing) {
    return (
      <main className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <Loader2 className="w-12 h-12 text-accent animate-spin" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Processing Your Pre-Order...
          </h1>
          <p className="text-lg md:text-xl text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Please wait while we confirm your order
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 drop-shadow-2xl">
            <CheckCircle2 className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Pre-Order Confirmed!
          </h1>
          <p className="text-lg md:text-xl text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Thank you for your pre-order. You will receive a confirmation email shortly.
          </p>
        </div>

        <div className="border-2 border-white/20 p-8 mb-8 backdrop-blur-sm animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 pb-4 border-b-2 border-white/20 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Pre-Order Receipt
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Customer Information</h3>
            <div className="space-y-2 text-white/80">
              <p>
                <span className="font-medium text-white">Name:</span> {customerInfo.name}
              </p>
              <p>
                <span className="font-medium text-white">Phone:</span> {customerInfo.phone}
              </p>
              <p>
                <span className="font-medium text-white">Email:</span> {customerInfo.email}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Pre-Order Items</h3>
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start border-b border-white/10 pb-3">
                  <div className="flex-1">
                    <p className="font-medium text-lg">{item.name}</p>
                    <p className="text-sm text-white/60">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t-2 border-white/20">
            <div className="flex justify-between text-white/70 text-lg">
              <span>Subtotal</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white/70 text-lg">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-3xl font-bold pt-3 border-t-2 border-white/20 text-white">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in-up">
          <Link href="/">
            <button className="btn-primary px-12 py-4 text-lg">Back to Home</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
