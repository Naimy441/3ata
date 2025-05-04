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

export default function PricingDialog() {
  const [open, setOpen] = useState(false)

  return (
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
          <p className="mb-4">
            Please confirm that your mosque genuinely cannot afford the $50/month premium plan. We believe in honesty
            and integrity in all our dealings.
          </p>
          <p>
            Our premium plan provides additional features and helps us continue developing better tools for mosque
            communities.
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => setOpen(false)} className="sm:w-full">
            Consider Premium Plan
          </Button>
          <Button onClick={() => setOpen(false)} className="bg-purple-600 hover:bg-purple-700 sm:w-full">
            Confirm Free Plan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
