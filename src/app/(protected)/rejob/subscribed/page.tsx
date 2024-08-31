'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SuccessPage = () => {
  const router = useRouter()

  useEffect(() => {
    const updatePurchaseStatus = async () => {
      try {
        const response = await fetch('/api/update-purchase', { method: 'POST' })
        if (!response.ok) {
          throw new Error('Failed to update purchase status')
        }
      } catch (error) {
        console.error('Error updating purchase status:', error)
      }
    }

    updatePurchaseStatus()

    const timer = setTimeout(() => {
      router.push('/rejob/dash')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-[#ff3e4c] mb-4">Thank You for Your Purchase!</h1>
      <p className="text-gray-600">Redirecting to dashboard...</p>
    </div>
  )
}

export default SuccessPage