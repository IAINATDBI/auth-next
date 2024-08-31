import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function POST() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        personalPlanPurchased: true,
        personalPlanPurchaseDate: new Date(),
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to update user purchase status:', error)
    return NextResponse.json({ error: 'Failed to update purchase status' }, { status: 500 })
  }
}