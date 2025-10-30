"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CartClientPage() {
  const { items, updateQuantity, removeItem, total } = useCart()
  const router = useRouter()

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="w-20 h-20 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Add some delicious items from our menu to get started.</p>
          <Link href="/menu">
            <Button size="lg">Browse Menu</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-12">Your Pre-Order</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 border border-border p-6">
              <div className="w-24 h-24 bg-secondary flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-lg font-bold mb-4">${item.price}</p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button onClick={() => removeItem(item.id)} className="p-2 hover:bg-secondary transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-border p-8 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Pre-Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (10%)</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold mb-8">
              <span>Total</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>

            <button
              className="w-full mb-4 bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-dashed hover:border-accent"
              onClick={() => router.push("/checkout")}
            >
              Proceed to Checkout
            </button>

            <Link href="/menu">
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
