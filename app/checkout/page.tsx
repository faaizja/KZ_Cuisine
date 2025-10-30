export const metadata = {
  title: "NOIR - Checkout",
  description: "Complete your pre-order",
}

export default function CheckoutPage() {
  return <CheckoutClientPage />
}

// This is a client component because it uses useState and useRouter hooks.
async function CheckoutClientPage() {
  // Dynamically import the client component to avoid issues with server rendering
  const CheckoutForm = (await import("./checkout-form")).default

  return <CheckoutForm />
}
