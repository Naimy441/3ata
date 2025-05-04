"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"

export default function ContactModal({ trigger }: { trigger: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [state, handleSubmit] = useForm("xvgakyjg")

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-900">
            Contact Us
          </DialogTitle>
        </DialogHeader>

        {state.succeeded ? (
          <p className="text-center py-4">
            Thanks for reaching out! We'll get back to you as soon as possible.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                className="w-full"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                className="w-full min-h-[100px] resize-vertical"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white"
            >
              {state.submitting ? "Sending..." : "Send"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}