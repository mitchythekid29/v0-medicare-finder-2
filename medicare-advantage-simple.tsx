"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Check, ArrowRight, Phone, Heart, FileText, PillIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function MedicareAdvantageLanding() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    zipCode: "",
    hasMedicare: "yes",
    phone: "",
  })

  // Initialize ActiveProspect TrustedForm

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })

    // Track field changes with ActiveProspect (if their API supports this)
    if (window.ActiveProspect && window.ActiveProspect.track) {
      window.ActiveProspect.track("field_change", {
        field: id,
        value: value,
      })
    }
  }

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      hasMedicare: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Track form step completion with ActiveProspect
    if (window.ActiveProspect && window.ActiveProspect.track) {
      window.ActiveProspect.track("form_step", {
        step: step,
        data: formData,
      })
    }

    if (step === 1) {
      setStep(2)
    } else {
      // Final submission tracking
      if (window.ActiveProspect && window.ActiveProspect.track) {
        window.ActiveProspect.track("form_complete", {
          data: formData,
        })
      }
      setSubmitted(true)
    }
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* ActiveProspect TrustedForm Script */}
      <Script id="trustedform-script" strategy="afterInteractive">
        {`
          (function() {
            var tf = document.createElement('script');
            tf.type = 'text/javascript'; tf.async = true;
            tf.src = 'https://api.trustedform.com/trustedform.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(tf, s);
          })();
        `}
      </Script>

      {/* TrustedForm Certificate URL Script */}
      <Script id="trustedform-cert-url" strategy="afterInteractive">
        {`
          (function() {
            var tfCertUrl = document.createElement('script');
            tfCertUrl.type = 'text/javascript';
            tfCertUrl.async = true;
            tfCertUrl.src = 'https://certificates.trustedform.com/0.0.0/js/capture.js';
            tfCertUrl.setAttribute('data-tf-domain', 'certificates.trustedform.com');
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(tfCertUrl, s);
            
            // Ensure the certificate URL is populated in the form field
            window.addEventListener('load', function() {
              setTimeout(function() {
                if (typeof window.TrustedForm !== 'undefined') {
                  document.getElementById('xxTrustedFormCertUrl').value = window.TrustedForm.certificate_url || '';
                }
              }, 1000);
            });
          })();
        `}
      </Script>

      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <Image
              src="/images/MedicareFinder_Logo_Cropped.png"
              alt="Medicare Finder Logo"
              width={200}
              height={56}
              className="mr-2"
            />
            <span className="text-xs text-gray-500 mt-2 text-center w-full block">
              A trusted non-government website.
            </span>
          </div>
          <div className="flex flex-col items-end">
            <a href="tel:8773530244" className="flex items-center text-[#4BB6E8] font-bold text-xs md:text-xl">
              <Phone className="h-3 w-3 md:h-5 md:w-5 mr-0.5 md:mr-2" />
              (877) 353-0244
            </a>
            <span className="text-xs text-gray-600 hidden md:inline">For Fastest Service Call Now!</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Understanding Medicare Today
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  Make An Informed Medicare Decision
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  Learn about Medicare plans and find coverage that fits your healthcare needs and budget.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Free Expert Guidance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Enroll with a Trusted Licensed Agent</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Compare Plans and Benefits</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">Fast, Easy, and Simple</span>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={formRef} className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-center text-blue-600">
                  Let's Get Started!
                </h2>

                {!submitted ? (
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
                          <Label htmlFor="terms" className="text-sm text-gray-500">
                            By submitting, I agree to the{" "}
                            <Link href="/terms-of-service" className="underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
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
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">
                      A licensed Medicare agent will be reaching out to you shortly! Please stand by.
                    </p>
                    <p className="text-gray-700 font-medium">
                      Don't want to wait?{" "}
                      <a href="tel:8773530244" className="text-blue-600 hover:underline">
                        Call us now at (877) 353-0244
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Plans We May Discuss With You</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Medicare Advantage</h3>
                  <p className="text-gray-600">
                    All-in-one plans that combine hospital, medical, and usually prescription drug coverage. Many plans
                    include extra benefits like dental, vision, and hearing coverage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Medicare Supplement</h3>
                  <p className="text-gray-600">
                    Also known as Medigap, these plans help pay for costs that Original Medicare doesn't cover, such as
                    copayments, coinsurance, and deductibles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <PillIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prescription Drug Plans</h3>
                  <p className="text-gray-600">
                    Medicare Part D plans that help cover the cost of prescription medications. These can be added to
                    Original Medicare or a Medicare Supplement plan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                <Image
                  src="/images/customer-service-agent-blue.png"
                  alt="Customer service agent with headset"
                  width={300}
                  height={300}
                  className="rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Our all-star team is ready to help you with all your Medicare needs!
                  </h3>
                  <p className="text-gray-600">
                    Our licensed agents are standing by to answer your questions and guide you through the Medicare
                    process.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-blue-600">
                  Important Medicare Dates
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                      Oct 15 - Dec 7
                    </div>
                    <div>
                      <p className="font-medium">Annual Election Period</p>
                      <p className="text-sm text-gray-600">Change your Medicare Advantage Plan</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                      Jan 1 - Mar 31
                    </div>
                    <div>
                      <p className="font-medium">Open Enrollment Period</p>
                      <p className="text-sm text-gray-600">Switch Medicare Advantage Plans</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                      3 months before & after 65th birthday
                    </div>
                    <div>
                      <p className="font-medium">Initial Enrollment Period</p>
                      <p className="text-sm text-gray-600">When you first become eligible for Medicare</p>
                    </div>
                  </div>
                  <Button onClick={scrollToForm} className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Speak to a Medicare Specialist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Medicare?</AccordionTrigger>
                  <AccordionContent>
                    Medicare is the federal health insurance program for people who are 65 or older, certain younger
                    people with disabilities, and people with End-Stage Renal Disease. Original Medicare consists of
                    Part A (Hospital Insurance) and Part B (Medical Insurance).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is Medicare Advantage?</AccordionTrigger>
                  <AccordionContent>
                    Medicare Advantage (Medicare Part C) is an alternative to Original Medicare offered by private
                    insurance companies approved by Medicare. These plans combine Part A (hospital) and Part B (medical)
                    coverage, and usually include Part D (prescription drug) coverage and additional benefits not
                    covered by Original Medicare.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is Medicare Supplement?</AccordionTrigger>
                  <AccordionContent>
                    Medicare Supplement (Medigap) plans are sold by private insurance companies to help pay some of the
                    healthcare costs that Original Medicare doesn't cover, such as copayments, coinsurance, and
                    deductibles. These plans work alongside Original Medicare and can help reduce your out-of-pocket
                    expenses.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What is Medicare Part D?</AccordionTrigger>
                  <AccordionContent>
                    Medicare Part D is prescription drug coverage offered by private insurance companies approved by
                    Medicare. Part D plans help cover the cost of prescription medications and can be added to Original
                    Medicare, some Medicare Cost Plans, some Medicare Private Fee-for-Service Plans, and Medicare
                    Medical Savings Account Plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I Keep My Doctors?</AccordionTrigger>
                  <AccordionContent>
                    With Original Medicare and Medicare Supplement plans, you can see any doctor that accepts Medicare.
                    With Medicare Advantage plans, you typically need to use doctors in the plan's network. We will
                    check if they are in network of any Medicare Advantage plan you're considering.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Find Your Perfect Medicare Advantage Plan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our licensed agents are standing by to help you find the right coverage at no cost to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={scrollToForm}
              >
                Check Your Eligibility
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/images/medicare-finder-pin-logo.png"
                alt="Medicare Finder Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-sm text-gray-400">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Medicare Benefits Center. All rights reserved.
            </p>
            <div className="mt-2 text-left">
              <p className="text-xs mb-2">
                Medicare Finder is not affiliated with the government or the federal Medicare program. We do not offer
                every plan available in your area. Any information we provide is limited to the plans we do offer in
                your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
              </p>
              <p className="text-xs mb-2">
                This is not a complete description of benefits. Contact the plan for more information. Limitations,
                copayments, and restrictions may apply. Benefits, premiums and/or copayments/co-insurance may change on
                January 1 of each year. You must continue to pay your Medicare Part B premium.
              </p>
              <p className="text-xs mb-2">
                Enrollment in the described plan type may be limited to certain times of the year unless you qualify for
                a Special Enrollment Period.
              </p>
              <p className="text-xs mb-2">This website is an advertisement.</p>
              <p className="text-xs text-gray-500 mt-4">MULTIPLAN_NSBAW_SBH_M</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Add TypeScript interface for the global window object
declare global {
  interface Window {
    ActiveProspect?: {
      track: (event: string, data: any) => void
    }
  }
}
