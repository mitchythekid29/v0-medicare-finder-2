"use client"

import type React from "react"

import { useState } from "react"
import { Check, Shield, ArrowRight, Phone, Info, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MedicareAdvantageLanding() {
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-teal-600 mr-2" />
            <span className="text-xl font-bold">Medicare Education Center</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#benefits" className="text-sm font-medium hover:text-teal-600">
              Benefits
            </a>
            <a href="#compare" className="text-sm font-medium hover:text-teal-600">
              Compare Plans
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-teal-600">
              FAQ
            </a>
          </nav>
          <a href="tel:1-800-123-4567" className="flex items-center text-teal-600 font-medium">
            <Phone className="h-5 w-5 mr-2" />
            1-800-123-4567
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-teal-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Understanding Medicare Advantage
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  Make an Informed Medicare Decision
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  Learn about Medicare Advantage plans and find coverage that fits your healthcare needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Compare Plans
                  </Button>
                  <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    Speak to an Expert
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Find Plans in Your Area</h2>

                {step === 1 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="First Name" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Last Name" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" placeholder="ZIP Code" required pattern="[0-9]{5}" />
                    </div>

                    <div>
                      <Label>Do you currently have Medicare?</Label>
                      <RadioGroup defaultValue="yes" className="flex gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="medicare-yes" />
                          <Label htmlFor="medicare-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="medicare-no" />
                          <Label htmlFor="medicare-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                      By continuing, you agree to our{" "}
                      <a href="#" className="underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(123) 456-7890" required />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700">See Available Plans</Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                      <Shield className="h-4 w-4" />
                      Your information is secure and will never be sold
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Medicare Advantage vs. Original Medicare</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding the differences can help you choose the right coverage for your healthcare needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-teal-100 rounded-full p-2 mr-3">
                      <Shield className="h-5 w-5 text-teal-600" />
                    </div>
                    Medicare Advantage (Part C)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Combines Part A (hospital) and Part B (medical) coverage</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Usually includes prescription drug coverage (Part D)</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>May offer extra benefits like dental, vision, and hearing</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Often includes fitness programs and wellness benefits</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Many plans have $0 premiums (you still pay Part B premium)</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Annual out-of-pocket maximum for financial protection</span>
                    </li>
                    <li className="flex">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>Usually has network restrictions for doctors and hospitals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    Original Medicare (Parts A & B)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Part A covers hospital stays and inpatient care</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Part B covers doctor visits and outpatient care</span>
                    </li>
                    <li className="flex">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>Does not include prescription drug coverage (need separate Part D)</span>
                    </li>
                    <li className="flex">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>No coverage for dental, vision, or hearing services</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Freedom to see any doctor that accepts Medicare</span>
                    </li>
                    <li className="flex">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>No out-of-pocket maximum (unlimited cost exposure)</span>
                    </li>
                    <li className="flex">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>May need supplemental coverage (Medigap) for additional protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-teal-600 hover:bg-teal-700">Compare Plans in Your Area</Button>
            </div>
          </div>
        </section>

        <section id="compare" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Types of Medicare Advantage Plans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Medicare Advantage offers different plan types to fit your healthcare preferences and needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">HMO Plans</h3>
                  <p className="text-gray-600 mb-4">
                    Health Maintenance Organization plans require you to use in-network providers except in emergencies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Lower out-of-pocket costs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Primary care physician coordinates care</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <span>Need referrals for specialists</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">PPO Plans</h3>
                  <p className="text-gray-600 mb-4">
                    Preferred Provider Organization plans offer more flexibility in choosing healthcare providers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Can see out-of-network providers (at higher cost)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>No referrals needed for specialists</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <span>Higher premiums than HMOs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Special Needs Plans</h3>
                  <p className="text-gray-600 mb-4">
                    SNPs are designed for people with specific diseases or characteristics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Tailored benefits for specific conditions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Specialized provider networks</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <span>Must meet eligibility requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-teal-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Important Medicare Dates</h2>
                  <p className="text-gray-600 mb-6">
                    Understanding enrollment periods is crucial for getting the coverage you need when you need it.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700">Speak to a Medicare Specialist</Button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="bg-teal-100 text-teal-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                        Oct 15 - Dec 7
                      </div>
                      <div>
                        <p className="font-medium">Annual Enrollment Period</p>
                        <p className="text-sm text-gray-600">Change your Medicare Advantage Plan</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-teal-100 text-teal-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                        Jan 1 - Mar 31
                      </div>
                      <div>
                        <p className="font-medium">Open Enrollment Period</p>
                        <p className="text-sm text-gray-600">Switch Medicare Advantage Plans</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-teal-100 text-teal-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                        3 months before & after 65th birthday
                      </div>
                      <div>
                        <p className="font-medium">Initial Enrollment Period</p>
                        <p className="text-sm text-gray-600">When you first become eligible for Medicare</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about Medicare Advantage plans.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basics">Basics</TabsTrigger>
                  <TabsTrigger value="costs">Costs</TabsTrigger>
                  <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
                </TabsList>
                <TabsContent value="basics" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is Medicare Advantage?</AccordionTrigger>
                      <AccordionContent>
                        Medicare Advantage (Medicare Part C) is an alternative to Original Medicare offered by private
                        insurance companies approved by Medicare. These plans combine Part A (hospital) and Part B
                        (medical) coverage, and usually include Part D (prescription drug) coverage and additional
                        benefits not covered by Original Medicare.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What additional benefits do Medicare Advantage plans offer?</AccordionTrigger>
                      <AccordionContent>
                        Many Medicare Advantage plans offer benefits not covered by Original Medicare, including dental
                        care, vision services, hearing aids, fitness memberships, transportation to medical
                        appointments, over-the-counter allowances, and meal delivery after hospitalizations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I keep my doctors with Medicare Advantage?</AccordionTrigger>
                      <AccordionContent>
                        Many Medicare Advantage plans have networks of doctors and hospitals. If keeping your current
                        doctors is important to you, you should check if they are in the network of any plan you're
                        considering. Some plans, like PPOs, allow you to see out-of-network providers at a higher cost.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="costs" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How much does Medicare Advantage cost?</AccordionTrigger>
                      <AccordionContent>
                        Many Medicare Advantage plans have $0 premiums, though you must continue to pay your Medicare
                        Part B premium. Plans may have different deductibles, copayments, and coinsurance for services.
                        Many plans include annual out-of-pocket maximums to protect you from high costs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Are there out-of-pocket maximums with Medicare Advantage?</AccordionTrigger>
                      <AccordionContent>
                        Yes, Medicare Advantage plans have yearly limits on your out-of-pocket costs for medical
                        services. Once you reach this limit, you'll pay nothing for covered services for the rest of the
                        year. This is a key difference from Original Medicare, which has no out-of-pocket maximum.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Do I still need to pay my Part B premium?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you must continue to pay your Medicare Part B premium when enrolled in a Medicare Advantage
                        plan. Some Medicare Advantage plans offer a "giveback" benefit that reduces your Part B premium,
                        but this varies by plan and location.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="enrollment" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>When can I enroll in a Medicare Advantage plan?</AccordionTrigger>
                      <AccordionContent>
                        You can enroll during your Initial Enrollment Period (when you first become eligible for
                        Medicare), during the Annual Enrollment Period (October 15 - December 7 each year), or during
                        the Medicare Advantage Open Enrollment Period (January 1 - March 31 each year if you're already
                        in a Medicare Advantage plan).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can I switch Medicare Advantage plans?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you can switch Medicare Advantage plans during the Annual Enrollment Period (October 15 -
                        December 7) or during the Medicare Advantage Open Enrollment Period (January 1 - March 31) if
                        you're already enrolled in a Medicare Advantage plan. You may also qualify for a Special
                        Enrollment Period in certain situations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What is a Special Enrollment Period?</AccordionTrigger>
                      <AccordionContent>
                        A Special Enrollment Period (SEP) is a time outside the standard enrollment periods when you can
                        sign up for or switch Medicare Advantage plans. SEPs are triggered by certain life events, such
                        as moving to a new address, losing other health coverage, qualifying for Medicaid, or moving
                        into or out of a nursing home.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Margaret J.",
                  age: "68",
                  quote:
                    "The educational resources helped me understand the difference between Medicare Advantage and Original Medicare. I made a more informed choice thanks to their guidance.",
                },
                {
                  name: "Robert T.",
                  age: "71",
                  quote:
                    "I was able to find a plan that covered all my medications and let me keep my doctors. The comparison tool made it easy to see which plan was best for me.",
                },
                {
                  name: "Barbara M.",
                  age: "65",
                  quote:
                    "As someone new to Medicare, I appreciated the clear explanations and patient support. They answered all my questions and helped me enroll in the right plan.",
                },
              ].map((testimonial, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="bg-teal-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <span className="text-teal-600 font-medium">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">Age {testimonial.age}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Medicare Advantage Plan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our licensed Medicare specialists are ready to help you understand your options and find the right
              coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                Compare Plans Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700">
                Call 1-800-123-4567
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-teal-400 mr-2" />
                <span className="text-lg font-bold">Medicare Education Center</span>
              </div>
              <p className="text-gray-400 mb-4">Helping seniors make informed Medicare decisions since 2010.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Medicare Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Plan Comparison Tool
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Medicare Glossary
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                  <span className="text-gray-400">1-800-123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">support@medicareeducation.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} Medicare Education Center. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs">
              This is not a complete description of benefits. Contact the plan for more information. Limitations,
              copayments, and restrictions may apply. Benefits, premiums and/or copayments/co-insurance may change on
              January 1 of each year. You must continue to pay your Medicare Part B premium.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
