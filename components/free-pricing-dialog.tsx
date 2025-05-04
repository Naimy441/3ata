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

export default function FreeDialog() {
  const [open, setOpen] = useState(false)
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleInitialConfirm = () => {
    setOpen(false)
    setConfirmationOpen(true)
    setShouldRedirect(true)
  }

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false)
    if (shouldRedirect) {
      setShouldRedirect(false)
      window.open("https://buy.stripe.com/cN2160fwU6fy9a0bIK", "_blank")
    }
  }

  return (
    <>
      {/* First Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
            Get Started
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogDescription>
              We offer our free plan for mosques that truly cannot afford the premium plan.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
  <p className="mb-2">
    Please confirm that your mosque genuinely <strong>cannot afford</strong> the $50/month premium plan. As Muslims, we are taught to uphold honesty and trust — <em>breaking a promise is a serious matter in Islam</em>.
  </p>
</div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="sm:flex-1"
            >
              Consider Premium Plan
            </Button>
            <Button
              onClick={handleInitialConfirm}
              className="bg-purple-600 hover:bg-purple-700 text-white sm:flex-1"
            >
              Confirm Free Plan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Second Modal */}
      <Dialog open={confirmationOpen} onOpenChange={handleCloseConfirmation}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thank You for Choosing Us</DialogTitle>
          <DialogDescription>
            To cancel later, simply send us an email at <strong>hello@3ata.org</strong>. Your cancellation will be processed within 3 to 5 business days.
          </DialogDescription>
        </DialogHeader>
        <div className="py-2 text-sm text-gray-700">
          <p>
            Please press <strong>Continue</strong> to complete your subscription to the <strong>Free Plan</strong>.<br /><br />
            We will reach out to you using your email and phone number to begin the onboarding process.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleCloseConfirmation} className="bg-purple-600 hover:bg-purple-700 text-white">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
      </Dialog>
    </>
  )
}