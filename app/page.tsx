"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, TreePalmIcon as PalmTree, Sunset, Umbrella } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thanks for joining!",
        description: "We'll notify you when Sauntr launches.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-[#FFD4E5] via-[#FFE8C2] to-[#B4E7F8]">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Sun */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#FF9F68] opacity-80 blur-sm"></div>

        {/* Palm trees */}
        <div className="absolute bottom-0 left-0 transform translate-x-[-30%] hidden md:block">
          <PalmTree className="text-[#0B4B23] h-64 w-64" />
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-[30%] hidden md:block">
          <PalmTree className="text-[#0B4B23] h-48 w-48" />
        </div>

        {/* Geometric shapes */}
        <div className="absolute bottom-20 left-1/4 w-64 h-16 bg-[#FF85A1] opacity-30 rounded-lg transform rotate-12"></div>
        <div className="absolute top-40 left-10 w-32 h-32 bg-[#87CEEB] opacity-30 rounded-lg transform -rotate-6"></div>
        <div className="absolute bottom-40 right-10 w-48 h-20 bg-[#FFD700] opacity-30 rounded-lg transform rotate-3"></div>

        {/* Horizontal line - like a horizon or pool edge */}
        <div className="absolute bottom-[25%] left-0 right-0 h-1 bg-[#0B4B23] opacity-30"></div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-md w-full space-y-8 text-center backdrop-blur-sm bg-white/30 p-8 rounded-xl shadow-lg border border-white/40">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF85A1] opacity-20 blur-md rounded-full transform -translate-y-2 translate-x-2"></div>
              <Image
                src="/images/sauntr-logo.png"
                alt="Sauntr Logo"
                width={240}
                height={240}
                className="h-auto w-auto max-w-[240px] relative z-10"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-[#0B4B23] sm:text-4xl drop-shadow-sm">Coming Soon</h1>
            <p className="text-lg text-[#0B4B23]/80 drop-shadow-sm">
              Join our waitlist to be the first to know when we launch. Discover a new way to get lost.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-[#0B4B23]/20 focus-visible:ring-[#0B4B23] bg-white/70 placeholder:text-[#0B4B23]/50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FF85A1] hover:bg-[#FF85A1]/90 text-white shadow-md"
              >
                {isSubmitting ? (
                  "Joining..."
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <div className="pt-4">
            <p className="text-sm text-[#0B4B23]/70">
              Be the first to experience Sauntr, the travel app that helps spontaneous travelers find places to go and
              things to do that fit their vibe.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t border-[#0B4B23]/10 bg-white/20 backdrop-blur-sm relative z-10">
        <div className="container flex justify-center items-center gap-2">
          <Sunset className="h-4 w-4 text-[#FF85A1]" />
          <p className="text-sm text-[#0B4B23]/70">© {new Date().getFullYear()} Sauntr. All rights reserved.</p>
          <Umbrella className="h-4 w-4 text-[#FF85A1]" />
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

