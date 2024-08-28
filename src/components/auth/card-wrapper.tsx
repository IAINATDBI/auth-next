'use client'

import { ReactNode } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Header } from "@/components/auth/header"
import { Social } from "./social"
import { BackButton } from "@/components/auth/back-button"

interface CardWrapperProps {
  children: ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
  bgColor?: string // Add this line
}

export function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  bgColor = 'bg-white', // Add this line with a default value
}: CardWrapperProps) {
  return (
    <Card className={`w-[400px] shadow-md ${bgColor}`}> {/* Use the bgColor prop here */}
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
        {children}   
      </CardContent>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton 
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  )
}