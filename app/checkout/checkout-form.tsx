"use client"

import type React from "react"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function CheckoutForm() {
  const { items, total } = useCart()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="w-20 h-20 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to your cart before checking out.</p>
          <Link href="/menu">
            <Button size="lg">Browse Menu</Button>
          </Link>
        </div>
      </main>
    )
  }

  const isFormValid = formData.name.trim() !== "" && formData.phone.trim() !== "" && formData.email.trim() !== ""

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    // Store customer info in sessionStorage to pass to confirmation page
    sessionStorage.setItem("customerInfo", JSON.stringify(formData))
    sessionStorage.setItem("orderItems", JSON.stringify(items))
    sessionStorage.setItem("orderTotal", total.toString())
    router.push("/confirmation")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-12">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Customer Details Form */}
        <div className="lg:col-span-2">
          <div className="border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Your Details</h2>
            <p className="text-muted-foreground mb-8">
              Please provide your contact information for pre-order confirmation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="h-12"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full btn-primary text-lg py-4 ${!isFormValid ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  Confirm Pre-Order
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-border p-8 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Pre-Order Summary</h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 pb-6 border-t border-border pt-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (10%)</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
