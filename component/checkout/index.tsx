"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard/payment-history`,
      },
    });

    if (error) {
      setError(error.message || "Payment failed");
      setLoading(false);
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Payment successful",
      timer: 1500,
      showConfirmButton: false,
    });

    router.push("/dashboard/payment-history");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 👇 THIS IS WHERE CARD INFO APPEARS */}
      <PaymentElement />

      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn btn-ghost mt-4"
      >
        {loading ? "Processing..." : "Pay"}
      </button>

      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default Checkout;
