"use client"

import type React from "react"

import { useState } from "react"
import { Check, Calendar, Phone, Shield, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-red-600 mr-2" />
            <span className="text-xl font-bold">MedicarePlus Advantage</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#benefits" className="text-sm font-medium hover:text-red-600">
              Benefits
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-red-600">
              How It Works
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-red-600">
              FAQ
            </a>
            <a href="tel:(877) 353-0244" className="hidden md:flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <strong>
                <b>(877) 353-0244</b>
              </strong>
            </a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 hidden md:flex">Speak to an Agent</Button>
        </div>

        {/* Mobile phone display - absolute simplest version */}
        <div className="md:hidden bg-gray-50 p-2 text-center">
          <a href="tel:(877) 353-0244" style={{ fontWeight: 900 }}>
            <strong>
              <b>(877) 353-0244</b>
            </strong>
          </a>
          <br />
          <small>For Fastest Service Call Now</small>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  2024 Medicare Advantage Plans
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  Get the Medicare Advantage Benefits You Deserve
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  Find plans with $0 premiums, prescription drug coverage, dental, vision, hearing benefits and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Check Your Eligibility
                  </Button>
                  <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    View Plan Options
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" />
                    $0 Premium Plans
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" />
                    Dental & Vision
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" />
                    Prescription Coverage
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">Find Your Perfect Medicare Plan</h2>

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

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
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

                    <div>
                      <Label>When do you need coverage?</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1month">Within 1 month</SelectItem>
                          <SelectItem value="3months">Within 3 months</SelectItem>
                          <SelectItem value="researching">Just researching</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">See My Plan Options</Button>

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
              <h2 className="text-3xl font-bold mb-4">Medicare Advantage Benefits</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Medicare Advantage plans offer all the benefits of Original Medicare plus additional coverage that can
                help you save money and stay healthy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">All-in-One Coverage</h3>
                  <p className="text-gray-600">
                    Combines Part A (hospital), Part B (medical), and usually Part D (prescription drugs) in one plan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Extra Benefits</h3>
                  <p className="text-gray-600">
                    Many plans include dental, vision, hearing aids, fitness memberships, and transportation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Annual Check-ups</h3>
                  <p className="text-gray-600">
                    Preventive services and annual wellness visits to help you stay healthy and catch issues early.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Finding the right Medicare Advantage plan is easy with our simple process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-red-600 text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Your Information</h3>
                <p className="text-gray-600">
                  Fill out our simple form with your basic information and Medicare status.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-red-600 text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Review Plan Options</h3>
                <p className="text-gray-600">
                  We'll show you available Medicare Advantage plans in your area that fit your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-red-600 text-white w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Enroll with Assistance</h3>
                <p className="text-gray-600">
                  Our licensed agents will help you enroll in the plan of your choice at no cost to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Don't Miss the Enrollment Period</h2>
                  <p className="text-gray-600 mb-6">
                    The Annual Enrollment Period (AEP) for Medicare Advantage runs from October 15 to December 7. Don't
                    miss your chance to get the coverage you need.
                  </p>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Check Your Eligibility Now
                  </Button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Important Medicare Dates</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="bg-red-100 text-red-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                        Oct 15 - Dec 7
                      </div>
                      <div>
                        <p className="font-medium">Annual Enrollment Period</p>
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
                      <div className="bg-green-100 text-green-600 px-3 py-2 rounded text-sm font-medium w-32 text-center">
                        Year-round
                      </div>
                      <div>
                        <p className="font-medium">Special Enrollment Periods</p>
                        <p className="text-sm text-gray-600">For qualifying life events</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted Insurance Carriers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We work with top-rated Medicare Advantage providers to bring you the best options.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                  <img
                    src={`/abstract-insurance-symbol.png?height=60&width=120&text=Insurance+Logo+${i}`}
                    alt={`Insurance carrier ${i}`}
                    className="h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Thousands of seniors have found their perfect Medicare Advantage plan with our help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Margaret J.",
                  location: "Florida",
                  quote:
                    "I was overwhelmed by all the Medicare options until I found this service. They helped me find a plan with great prescription coverage and dental benefits.",
                },
                {
                  name: "Robert T.",
                  location: "Arizona",
                  quote:
                    "The agent I spoke with was patient and knowledgeable. They found me a plan that saved me over $200 per month on my medications.",
                },
                {
                  name: "Barbara M.",
                  location: "Pennsylvania",
                  quote:
                    "I've been able to keep my doctors and get better coverage with the Medicare Advantage plan they recommended. The process was so simple!",
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
                      <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-medium">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="coverage">Coverage</TabsTrigger>
                  <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-6">
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
                      <AccordionTrigger>How does Medicare Advantage differ from Original Medicare?</AccordionTrigger>
                      <AccordionContent>
                        Medicare Advantage plans often offer additional benefits not covered by Original Medicare, such
                        as dental, vision, hearing, and fitness programs. They also typically have networks of doctors
                        and hospitals, and may have different costs and rules than Original Medicare.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is there a cost for Medicare Advantage plans?</AccordionTrigger>
                      <AccordionContent>
                        Many Medicare Advantage plans have $0 premiums, though you must continue to pay your Medicare
                        Part B premium. Plans may have different deductibles, copayments, and coinsurance for services.
                        Many plans include annual out-of-pocket maximums to protect you from high costs.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="coverage" className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What additional benefits do Medicare Advantage plans offer?</AccordionTrigger>
                      <AccordionContent>
                        Many Medicare Advantage plans offer benefits not covered by Original Medicare, including dental
                        care, vision services, hearing aids, fitness memberships, transportation to medical
                        appointments, over-the-counter allowances, and meal delivery after hospitalizations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can I keep my doctors with Medicare Advantage?</AccordionTrigger>
                      <AccordionContent>
                        Many Medicare Advantage plans have networks of doctors and hospitals. If keeping your current
                        doctors is important to you, you should check if they are in the network of any plan you're
                        considering. Some plans, like PPOs, allow you to see out-of-network providers at a higher cost.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Do Medicare Advantage plans cover prescription drugs?</AccordionTrigger>
                      <AccordionContent>
                        Most Medicare Advantage plans include prescription drug coverage (Part D). Each plan has its own
                        formulary (list of covered drugs) and may have different costs for different medications. It's
                        important to check if your specific medications are covered by any plan you're considering.
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
                        in a Medicare Advantage plan). Special Enrollment Periods may also be available in certain
                        situations.
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
                      <AccordionTrigger>
                        Do I need to reapply for my Medicare Advantage plan each year?
                      </AccordionTrigger>
                      <AccordionContent>
                        No, your Medicare Advantage plan automatically renews each year unless you choose to change it.
                        However, it's a good idea to review your plan during the Annual Enrollment Period as benefits,
                        costs, and provider networks may change from year to year.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Medicare Advantage Plan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our licensed agents are standing by to help you find the right coverage at no cost to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                Check Your Eligibility
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-red-700">
                Call 1-800-123-4567
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-500 mr-2" />
                <span className="text-lg font-bold">MedicarePlus Advantage</span>
              </div>
              <p className="text-gray-400 mb-4">Helping seniors find the right Medicare Advantage plans since 2010.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Medicare Advantage
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Medicare Supplement
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Prescription Drug Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Find an Agent
                  </a>
                </li>
              </ul>
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
                    Enrollment Periods
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
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
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
                  <span className="text-gray-400">support@medicareplus.com</span>
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">
                    123 Medicare St, Suite 100
                    <br />
                    Phoenix, AZ 85001
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} MedicarePlus Advantage. All rights reserved.</p>
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
