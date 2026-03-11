"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, DollarSign } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DonateModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-white bg-[#4d082d] hover:text-[#4d082d] border border-white rounded-full hover:bg-white hover:border hover:border-[#4d082d] transition duration-200">
          <span className="mr-2">Donate</span>
          <span className="group-hover:rotate-45 transform transition duration-100">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L1 9"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.33571V1H1.66429"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="h-10"></div>
        <ScrollArea className="h-80 w-full rounded-md border">
          <Card className="w-full max-w-3xl mx-auto border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Support <span className="text-[#4d082d]">TOBK</span>
              </CardTitle>
              <p className="text-center text-lg text-gray-600">
                The True Our Brothers Keeper International Holy Community Foundation
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-xl font-medium text-[#4d082d] mb-2">
                  "WE ARE IN THE BUSINESS OF INSTILLING HOPE AND CHANGING LIVES"
                </p>
                <p className="text-lg">
                  Together, we can make a difference in our community and beyond!
                </p>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg border border-[#4d082d]/20">
                <h3 className="font-semibold mb-4 flex items-center text-xl text-[#4d082d]">
                  <Heart className="w-6 h-6 mr-2" />
                  Our Mission & Impact
                </h3>
                <p className="mb-3">
                  TOBK is a faith-based organization dedicated to putting true love into action. Since understanding promotes hope, and hope promotes change, we are a source of hope and a force for change in our communities.
                </p>
                <p>
                  Your generous contribution helps us bridge the gap between inner-city residents and the abundant resources available in our city, while building a stronger community that fulfills the needs of children and families.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-4 flex items-center text-xl text-[#4d082d]">
                  <DollarSign className="w-6 h-6 mr-2" />
                  How Your Donation Helps
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4d082d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Home Visits & Door-to-Door Outreach</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4d082d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Parenting & Life Skills Programs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4d082d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Entrepreneurship Development</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4d082d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Restoring Foreclosed City Homes</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4d082d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Annual Events to Stop the Killing</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d082d]/10 p-6 rounded-lg border border-[#4d082d]/30">
                <h3 className="font-semibold mb-4 flex items-center text-xl text-[#4d082d]">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Ways to Donate
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Zelle Transfer</p>
                    <p className="font-mono text-lg">Phone: (414) 750-3402</p>
                    <p className="text-sm text-gray-600">or Email: tobkjustice@sbcglobal.net</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Mail Donations</p>
                    <p className="text-sm">2126 North 23ʳᵈ Street</p>
                    <p className="text-sm">Milwaukee, WI 53205</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Contact Us</p>
                    <p className="text-sm">Phone: (414) 750-3402</p>
                    <p className="text-sm">Fax: (414) 344-3591</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Founded in 1999 by Mr. Maurice Lawrence
                </p>
                <p className="text-sm text-gray-600">
                  501(c)(3) Non-Profit Organization | Tax ID Available
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button className="w-full text-lg py-6 bg-[#4d082d] hover:bg-[#5a0d35]" size="lg">
                <Heart className="w-6 h-6 mr-2" />
                Make a Donation Today
              </Button>
              <p className="text-sm text-gray-600 text-center">
                Every donation, no matter the size, helps us continue our mission of
                "Living for the Sake of Others"
              </p>
            </CardFooter>
          </Card>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
