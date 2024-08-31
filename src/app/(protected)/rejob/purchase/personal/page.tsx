'use client'

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PersonalPurchasePage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setError(null);
    try {
      console.log('Starting purchase process...');
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize.');

      console.log('Fetching checkout session...');
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_1PXYEZKhpvpingwuBLBGPCgx', // Replace with your actual Stripe Price ID
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${errorData.message || response.statusText}`);
      }

      const { sessionId } = await response.json();
      console.log('Received sessionId:', sessionId);

      if (!sessionId) {
        throw new Error('No sessionId received from the server');
      }

      console.log('Redirecting to Stripe checkout...');
      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error: any) {
      console.error('Error in handlePurchase:', error);
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Personal Purchase</h1>
      <p className="mb-4">You are about to purchase the Personal plan.</p>
      <button 
        onClick={handlePurchase}
        className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full"
      >
        Purchase Personal Plan
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default PersonalPurchasePage;