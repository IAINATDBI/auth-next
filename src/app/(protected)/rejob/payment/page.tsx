'use client'

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      // Verify the session on your server
      // Then redirect or update UI
      router.push('/rejob/subscribed');
    }
  }, [searchParams, router]);

  return <div>Processing your payment...</div>;
}