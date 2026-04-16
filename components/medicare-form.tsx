"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

interface FormData {
  firstName: string
  lastName: string
  zipCode: string
  hasMedicare: string
  phone: string
}

export default function MedicareForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    zipCode: "",
    hasMedicare: "yes",
    phone: "",
  })
  const formRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, hasMedicare: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Form submission logic here
      console.log("Form submitted:", formData)
      alert("Thank you! A licensed agent will contact you shortly.")
    }
  }

  return (
    <div ref={formRef}>
      <form onSubmit={handleSubmit} className="space-y-4" id="lead-form">
        {/* Hidden TrustedForm field */}
        <input
          type="hidden"
          name="xxTrustedFormCertUrl"
          id="xxTrustedFormCertUrl"
          className="xxTrustedFormField_0"
        />
        <input
          type="hidden"
          name="xxTrustedFormToken"
          id="xxTrustedFormToken"
          className="xxTrustedFormField_1"
        />

        {step === 1 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="xxTrustedFormField_2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="xxTrustedFormField_3"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                placeholder="ZIP Code"
                required
                pattern="[0-9]{5}"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="xxTrustedFormField_4"
              />
            </div>

            <div>
              <Label>Do you currently have Medicare?</Label>
              <RadioGroup defaultValue="yes" className="flex gap-4 mt-2" onValueChange={handleRadioChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="medicare-yes" className="xxTrustedFormField_5" />
                  <Label htmlFor="medicare-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="medicare-no" className="xxTrustedFormField_6" />
                  <Label htmlFor="medicare-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="(123) 456-7890"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="xxTrustedFormField_7"
              />
            </div>

            <div className="flex items-top space-x-2 mt-4">
              <Checkbox id="terms" required className="xxTrustedFormField_8" />
              <Label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                {'By clicking "Submit" below, I provide my express written consent by electronic signature to be contacted by National Senior Benefit Advisors about my request for information including, without limitation, by a licensed insurance agent regarding Medicare Advantage or Part D plans, or by providing to me information, offers or advertisements, or plan quotes by telephone call or text message to the number(s) I have provided on this form (including any cellular number), even if that number is on any local, state or national "Do Not Call" list, sent using an automatic telephone dialer or an artificial or prerecorded voice, and by email or live agent. This consent is not required as a condition of making a purchase or enrollment. Message and Data rates may apply. Message frequency varies. I agree that any dispute arising out of or relating to this submission, shall be resolved exclusively through binding arbitration under the rules of the American Arbitration Association, and not in court. I understand that I am waiving any right to a jury trial. I also hereby agree to '}
                <Link href="/terms-of-service" className="underline">
                  Terms of Service
                </Link>{" "}
                {"and "}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Submit
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
              <Check className="h-4 w-4" />
              Your information is secure and will never be sold
            </div>
          </>
        )}
      </form>
    </div>
  )
}
