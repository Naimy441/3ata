"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PremiumDialog() {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    setOpen(false)
    // Give the dialog time to close before redirecting
    setTimeout(() => {
      window.open("https://buy.stripe.com/5kQeVe1E63m91gK5HUdMI04", "_blank")
    }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thank You for Choosing Us</DialogTitle>
          <DialogDescription>
            To cancel later, simply send us an email at <strong>hello@3ata.org</strong>. Your cancellation will be processed within 3 to 5 business days.
          </DialogDescription>
        </DialogHeader>
        <div className="py-2 text-sm text-gray-700">
          <p>
            Please press <strong>Continue</strong> to complete your subscription to the <strong>Premium Plan</strong>.<br /><br />
            We will reach out to you using your email and phone number to begin the onboarding process.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleConfirm} className="bg-purple-600 hover:bg-purple-700 text-white">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}